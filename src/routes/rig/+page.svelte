<script lang="ts">
   import Laptop from "../Laptop.svelte";
   import NewLaptop from "$lib/NewLaptop.svelte";
</script>

<div class="title">
   <h1>My Rig</h1>
</div>

<div class="laptop">
   <!-- <Laptop/> -->
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
   }
</style>
