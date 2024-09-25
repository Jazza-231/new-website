<script lang="ts">
   import { T, useTask } from "@threlte/core";
   import { useGltf } from "@threlte/extras";

   let rotation = 0;
   useTask((delta) => {
      rotation += delta;
   });
</script>

<T.PerspectiveCamera
   makeDefault
   position={[10, 10, 10]}
   oncreate={(ref) => {
      ref.lookAt(0, 1, 0);
   }}
   zoom={4.5}
/>

<T.DirectionalLight position={[10, 10, 15]} intensity={2} castShadow />

<T.AmbientLight intensity={4} />

{#await useGltf("/Laptop modelling attempt.glb") then gltf}
   <!-- Traverse the gltf.scene to apply shadows to all meshes -->
   {#key gltf.scene}
      {gltf.scene.traverse((object) => {
         //@ts-ignore
         if (object.isMesh) {
            object.castShadow = true;
            object.receiveShadow = true;
         }
         console.log(gltf.materials);
      })}
      <T is={gltf.scene} position.y={1.5} rotation.y={rotation} scale={7} />
   {/key}
{/await}

<T.Mesh rotation.x={-Math.PI / 2} receiveShadow position.y={0.5}>
   <T.CircleGeometry args={[7, 100]} />
   <T.ShadowMaterial opacity={0.5} />
</T.Mesh>
