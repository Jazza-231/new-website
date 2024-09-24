<script lang="ts">
   import { onMount } from "svelte";
   import * as THREE from "three";
   import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

   let container: HTMLDivElement;
   let autoRotate = true;
   let lastFrameTime = 0;
   let renderer: THREE.WebGLRenderer;
   let scene: THREE.Scene;
   let camera: THREE.PerspectiveCamera;
   let animationId: number;
   let laptopModel: THREE.Group; // To hold the loaded model

   onMount(() => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
         75,
         container.clientWidth / container.clientHeight,
         0.1,
         1000,
      );

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      const loader = new GLTFLoader();
      loader.load("/AI laptop glow.glb", (gltf) => {
         laptopModel = gltf.scene;

         // Enable shadow casting and receiving for the model
         laptopModel.traverse((node) => {
            if (node instanceof THREE.Mesh) {
               node.castShadow = true; // Model casts shadows
               node.receiveShadow = true; // Model receives shadows
            }
         });

         scene.add(laptopModel);
      });

      // Adjust the camera position to look down a bit
      camera.position.set(2, 0.11, 0.7);
      camera.lookAt(0, -0.2, 0);

      // Directional light for casting shadows
      const directionalLight = new THREE.DirectionalLight(0xffffff, 8);
      directionalLight.position.set(-5, 5, -5);
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.width = 1024;
      directionalLight.shadow.mapSize.height = 1024;
      directionalLight.shadow.camera.near = 0.5;
      directionalLight.shadow.camera.far = 20;
      scene.add(directionalLight);

      // Optional: Ambient light for overall lighting (no shadows)
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const animate = (time: number) => {
         animationId = requestAnimationFrame(animate);

         const deltaTime = time - lastFrameTime;

         if (deltaTime >= 1000 / 60) {
            lastFrameTime = time;

            if (autoRotate && laptopModel) {
               laptopModel.rotation.y += 0.01; // Rotate the laptop model
            }

            renderer.render(scene, camera);
         }
      };
      animate(0);

      // Handle window resize
      const handleResize = () => {
         const width = container.clientWidth;
         const height = container.clientHeight;

         camera.aspect = width / height;
         camera.updateProjectionMatrix();

         renderer.setSize(width, height);
         renderer.setPixelRatio(window.devicePixelRatio);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => {
         window.removeEventListener("resize", handleResize);
         cancelAnimationFrame(animationId);
         renderer.dispose();
         scene.traverse((object) => {
            if (object instanceof THREE.Mesh) {
               object.geometry.dispose();
               if (object.material instanceof THREE.Material) {
                  object.material.dispose();
               }
            }
         });
         container.removeChild(renderer.domElement);
      };
   });
</script>

<div bind:this={container}></div>

<style>
   div {
      height: 600px; /* Adjust the height as needed */
      overflow: hidden;
      position: relative;
   }
</style>
