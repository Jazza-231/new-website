<script lang="ts">
   import { page } from "$app/stores";
</script>

<nav class="header">
   <ul>
      <li>
         <a href="/" class:selected={$page.url.pathname === "/"}>Home</a>
      </li>
      <li>
         <a
            href="/projects"
            class:selected={$page.url.pathname === "/projects"}
         >
            Projects
         </a>
      </li>
      <li>
         <a href="/links" class:selected={$page.url.pathname === "/links"}>
            Links
         </a>
      </li>
      <li>
         <a href="/posts" class:selected={$page.url.pathname === "/posts"}>
            Posts
         </a>
      </li>

      {#if $page.url.pathname === "/secret/onlyfans"}
         <li>
            <a
               href="/secret/onlyfans"
               class:selected={$page.url.pathname === "/secret/onlyfans"}
            >
               Only Fans
            </a>
         </li>
      {/if}
   </ul>
</nav>

<style>
   nav {
      position: sticky;
      top: 0;
      -webkit-backdrop-filter: blur(1rem);
      backdrop-filter: blur(1rem);
      background: linear-gradient(180deg, black, transparent);
      border-bottom: 1px solid var(--background-100);
      z-index: 100;
   }

   ul {
      list-style-type: none;
      padding: 10px;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      justify-content: center;
      min-height: 3rem;
      align-items: center;
      margin: 0;

      a {
         color: var(--primary);
         text-decoration: none;
         padding: 1rem;
         margin: 0.3rem;
         transition:
            color 200ms,
            font-size 200ms;
         font-size: 1.5rem;

         &:hover {
            color: var(--text-800);
            font-size: 1.7rem;
         }

         &.selected {
            color: var(--text);
            font-size: 2rem;
         }
      }
   }
</style>
