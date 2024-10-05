<script lang="ts">
   import { browser } from "$app/environment";

   const props = $props();
   const { header, imagePath } = props;

   let loaded: () => void;
   let srcLoader: any;
   let image: any;

   if (browser) {
      loaded = () => {
         image.src = srcLoader.src;
         image.classList.remove("blur");
         srcLoader.remove();
      };
   }
</script>

<img
   src="/low-res-images/{imagePath}"
   alt="Image for {header}"
   class="blur"
   bind:this={image}
/>
<img
   src="/images/{imagePath}"
   alt="Image for {header}"
   class="hidden"
   onload={loaded}
   bind:this={srcLoader}
/>

<style lang="scss">
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
