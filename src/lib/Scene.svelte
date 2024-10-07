<script lang="ts">
   import { T, useTask, useThrelte } from "@threlte/core";
   import { useGltf, Text3DGeometry, Align } from "@threlte/extras";

   // svelte-ignore non_reactive_update
   let rotate = false;
   let rotation = $state(Math.PI / 2);
   useTask((delta) => {
      if (rotate) rotation += delta / 2;
   });

   const laptopEl = document.querySelector(".laptop");
   const loadingEl = document.querySelector(".loading");
</script>

<T.PerspectiveCamera
   makeDefault
   position={[10, 10, 0]}
   oncreate={(ref) => {
      ref.lookAt(0, 1, 0);
   }}
   zoom={3}
/>

<T.DirectionalLight
   position={[-5, 20, 3]}
   intensity={2}
   castShadow
   shadow.bias={-0.0001}
/>

<T.AmbientLight intensity={1} />

{#await useGltf("/models/Laptop modelling attempt.glb") then gltf}
   <!-- Traverse the gltf.scene to apply shadows to all meshes -->
   {laptopEl?.classList.add("done")}
   {loadingEl?.classList.add("done")}
   {(rotate = true)}
   {#key gltf.scene}
      {gltf.scene.traverse((object) => {
         //@ts-ignore
         if (object.isMesh) {
            object.castShadow = true;
            object.receiveShadow = true;
         }
      })}
      <T is={gltf.scene} position.y={1.5} rotation.y={rotation} scale={7} />
   {/key}
{/await}

<T.Mesh rotation.x={-Math.PI / 2} receiveShadow position.y={0.5}>
   <T.CircleGeometry args={[7, 100]} />
   <T.ShadowMaterial opacity={0.3} />
</T.Mesh>

{#snippet RotatingText(
   origin: [x: number, y: number, z: number],
   position: [x: number, y: number, z: number],
   text: string,
   rotation: [x: number, y: number, z: number] = [0, 0, 0],
)}
   <T.Group rotation={origin}>
      <T.Group {position}>
         <Align>
            {#snippet children({ align })}
               <T.Mesh castShadow {rotation}>
                  <Text3DGeometry
                     {text}
                     size={0.1}
                     depth={0.02}
                     font="/fonts/Inter Medium_Regular.json"
                     oncreate={() => {
                        align();
                     }}
                  />
               </T.Mesh>
            {/snippet}
         </Align>
      </T.Group>
   </T.Group>
{/snippet}

{@render RotatingText(
   [0, rotation, 0],
   [0, 2.3, -0.5],
   "Lenovo Legion Pro 7i Gen 8",
)}

{@render RotatingText(
   [0, rotation, 0],
   [1, 1.7, -0.31],
   "240hz, 2560x1600",
   [-0.2, 0, 0],
)}

{@render RotatingText(
   [0, rotation, 0],
   [-0.4, 0.75, 1],
   "2x4TB SSD, 32GB RAM",
   [-Math.PI / 2, 0, 0],
)}

{@render RotatingText(
   [0, rotation, 0],
   [0.2, 0.9, -0.2],
   "RTX 4070, i9-13900hx",
   [0.5, Math.PI, 0],
)}
