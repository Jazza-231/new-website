<script lang="ts">
   const { children } = $props();

   import "./vars.css";
   import "./global.css";
   import "@fontsource-variable/inter";
   import Header from "./Header.svelte";
   import Footer from "./Footer.svelte";
   import { page } from "$app/stores";
   import { toTitleCase } from "$lib";

   let name = "jazza.dev";
   let title = $derived(
      [name, $page.url.pathname.split("/")[1]].filter(Boolean).join(" - "),
   );
</script>

<svelte:head>
   <title>{toTitleCase(title)}</title>
</svelte:head>

<Header></Header>

<div class="main">
   {@render children()}
</div>

<Footer></Footer>
