<script lang="ts">
   import type { Component } from "svelte";
   import { Home, Folder, Link, Post, Image } from "$lib/Icons";
</script>

{#snippet sitemap(text: string, icon: Component, href: string)}
   <a {href} class="sitemap-link">
      <button class="sitemap-button">
         <div class="icon">
            <svelte:component this={icon} />
         </div>
         {text}
      </button>
   </a>
{/snippet}

<div class="sitemap">
   {@render sitemap("Home", Home, "/")}
   {@render sitemap("Projects", Folder, "/projects")}
   {@render sitemap("Links", Link, "/links")}
   {@render sitemap("Posts", Post, "/posts")}
   {@render sitemap("Screenshots", Image, "/screenshots")}
</div>

<style>
   .sitemap {
      display: flex;
      gap: 0.6rem;
      flex-wrap: wrap;
      .sitemap-link {
         text-decoration: none;
         .sitemap-button {
            display: flex;
            align-items: flex-start;
            gap: 0.2rem;

            .icon {
               display: flex;
               align-items: center;

               :global(svg) {
                  width: 1em;
                  height: 1em;
               }
            }
         }
      }
   }
</style>
