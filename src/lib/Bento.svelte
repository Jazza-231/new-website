<script lang="ts">
   const props = $props();
   console.log(props);
   const { header, imagePath, short, content, href } = props;

   const bentoClass = header.toLowerCase().replaceAll(" ", "-");
</script>

<div class={`bento bento-${bentoClass}`} class:short>
   <div class="text">
      <h3 class="header"><a {href}>{header}</a></h3>
      <p>{content}</p>
   </div>
   <a {href} aria-label="Link to {header} project page.">
      <img src="/images/{imagePath}" alt="Image for {header}" />
   </a>
</div>

<style lang="scss">
   .bento {
      display: flex;
      flex-direction: column;
      padding: 2rem;
      border-radius: 0.5rem;
      backdrop-filter: blur(0.1rem);
      gap: 2rem;
      border: var(--secondary-400) solid 0.2rem;
      box-shadow: var(--secondary-200) 0 0 7rem;
      margin: 2rem 3rem 4rem 0;

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

      img {
         width: auto;
         height: 100%;
         border-radius: 0.5rem;
         box-shadow: 0 0 0.5rem var(--primary);
         transition: all 0.2s ease-in-out;

         &:hover {
            transform: scale(1.05);
         }
      }

      &.short img {
         width: 100%;
         height: auto;
         position: relative;
      }

      width: 40rem;
      height: 20rem;

      &.short {
         width: 20rem;
      }

      &:not(.short) {
         flex-direction: row;
      }
   }
</style>
