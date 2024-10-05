<script lang="ts">
   import Image from "./Image.svelte";
   const props = $props();
   const { header, imagePath, short, content, href, area } = props;

   const bentoClass = header.toLowerCase().replaceAll(" ", "-");
</script>

<div
   class={`bento bento-${bentoClass}`}
   class:short
   style={`grid-area: ${area};`}
>
   <div class="text">
      <h3 class="header"><a {href}>{header}</a></h3>
      <p>{content}</p>
   </div>
   <a {href} aria-label="Link to {header} project page.">
      <!-- <img src="/low-res-images/{imagePath}" alt="Image for {header}" /> -->
      <!-- <img src="/images/{imagePath}" alt="Image for {header}" /> -->
      <Image {header} {imagePath} />
   </a>
</div>

<style>
   .bento {
      display: flex;
      flex-direction: column;
      padding: 2rem;
      border-radius: 0.5rem;
      backdrop-filter: blur(0.1rem);
      gap: 1rem;
      border: var(--secondary-400) solid 0.2rem;
      box-shadow: var(--secondary-200) 0 0 7rem;

      .text {
         display: flex;
         flex-direction: column;
      }

      .header {
         font-size: 1.5rem;
         margin-bottom: 0.5rem;
         min-height: 2rem;

         a {
            color: var(--primary);
            transition:
               color 200ms,
               font-size 200ms;
            font-size: 1.5rem;

            &:hover {
               color: var(--text-800);
               font-size: 1.6rem;
            }
         }
      }

      a:has(img) {
         display: flex;
         align-items: center;
         justify-content: center;
         width: 15rem;
      }

      :global(img) {
         width: 100%;
         height: auto;
         object-fit: contain;
         border-radius: 0.5rem;
         box-shadow: 0 0 0.5rem var(--primary);
         transition: all 0.2s ease-in-out;

         :global(&:hover) {
            transform: scale(1.05);
         }
      }

      &:global(.short img) {
         max-height: 10rem;
         height: auto;
         position: relative;
      }

      width: auto;
      height: 20rem;

      &:not(.short) {
         flex-direction: row;
      }
   }
</style>
