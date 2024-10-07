<script lang="ts">
   import { browser } from "$app/environment";

   const props = $props();
   const { header, imagePath } = props;

   let loaded: () => void = $state(() => {});
   let srcLoader: HTMLImageElement;
   let image: HTMLImageElement;

   if (browser) {
      loaded = () => {
         setTimeout(() => {
            image.src = srcLoader.src;
            image.width = srcLoader.width;
            image.height = srcLoader.height;
            image.classList.remove("blur");
            srcLoader.remove();
         }, 200);
      };
   }
</script>

<img
   src="/src/lib/assets/images/low-res/{imagePath}"
   alt="Image for {header}"
   class="blur"
   bind:this={image}
/>
<img
   src="/src/lib/assets/images/{imagePath}"
   alt="Image for {header}"
   class="hidden"
   onload={loaded}
   bind:this={srcLoader}
/>

<style>
   img {
      opacity: 1;
      transition: blur 500ms;
   }

   .blur {
      filter: blur(0.2rem);
   }

   .hidden {
      display: none;
   }
</style>
