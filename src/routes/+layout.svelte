<script lang="ts">
   const { children } = $props();

   import "./vars.css";
   import "./global.scss";
   import "@fontsource-variable/inter";
   import Header from "./Header.svelte";
   import Footer from "./Footer.svelte";
</script>

<Header></Header>

<div class="main">
   {@render children()}
</div>

<Footer></Footer>
