<script lang="ts">
   import NewLaptop from "$lib/NewLaptop.svelte";
</script>

<div class="title">
   <h1>My Rig</h1>
</div>

<div class="laptop">
   <NewLaptop />
</div>

<style lang="scss">
   .title {
      text-align: center;
   }

   .laptop {
      height: 1000px;
      z-index: -1;
      position: relative;
      opacity: 0;
      transition: opacity 1000ms;
   }

   :global(.laptop.done) {
      opacity: 1;
   }
</style>
