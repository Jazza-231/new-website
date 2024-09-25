<script lang="ts">
   import { T, useTask, useThrelte } from "@threlte/core";
   import { useGltf, Text3DGeometry, Align } from "@threlte/extras";

   let rotation = $state(Math.PI / 2);
   useTask((delta) => {
      rotation += delta;
   });

   console.log(useThrelte().scene);

   let tempFix = $state(false);
</script>

<T.PerspectiveCamera
   makeDefault
   position={[10, 10, 0]}
   oncreate={(ref) => {
      ref.lookAt(0, 1, 0);
   }}
   zoom={3}
/>

<T.DirectionalLight position={[-3, 30, 10]} intensity={2} castShadow />

<T.AmbientLight intensity={3} />

{#await useGltf("/models/Laptop modelling attempt.glb") then gltf}
   <!-- Traverse the gltf.scene to apply shadows to all meshes -->
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

<T.Group rotation.y={rotation}>
   <T.Group position={[0, 2.3, -0.55]}>
      <Align>
         {#snippet children({ align })}
            <T.Mesh castShadow>
               <Text3DGeometry
                  text={"Lenovo Legion Pro 7i Gen 8"}
                  size={0.1}
                  depth={0.02}
                  font="/fonts/Inter Medium_Regular.json"
                  oncreate={() => {
                     align();

                     useThrelte().scene.traverse((obj) => {
                        console.log(obj.position);
                     });
                  }}
               />
               <T.MeshStandardMaterial />
            </T.Mesh>
         {/snippet}
      </Align>
   </T.Group>
</T.Group>
