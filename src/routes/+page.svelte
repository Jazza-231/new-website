<script lang="ts">
   import Bento from "$lib/Bento.svelte";
   const { data } = $props();
   const { age } = data;

   import { Arrow } from "$lib/Icons";

   const imagePath = "/images/bento/";
   const lowResPath = "/low-res/bento/";
</script>

<!-- PLEASE DO REACTIVITY SOMETIME https://www.youtube.com/watch?v=x4u1yp3Msao -->

<div class="home">
   <div class="greeting">
      <div class="glow"></div>
      <div class="hi">
         Hi! I'm <span class="colour-effect">Jazza</span>
      </div>
   </div>

   <div class="who">
      <h2>Who am I?</h2>
      <p>
         My name is Jarrad, and I am an {age} year old beginner programmer. I began
         to learn programming about {age - 17 === 1
            ? "1 year"
            : age - 17 + " years"} ago, starting with JS in order to contribute to
         the Scratch Addons project.
      </p>
      <p>
         My relationship with programming is one of immense love-filled hatred.
         <br />
         Looking at you CSS.
      </p>
      <p>
         I currently attend a TAFE institution in Western Australia for a music
         technology course, another of my passions. When I'm not studying there,
         I am coding. I am still 100% a beginner, and am currently learning
         svelte+kit. When I am not studying or coding, I am probably gaming. I
         play relatively popular games, such as Red Dead Redemption 2, CS2,
         Forza Horizon 5, and Cyberpunk 2077. You can check out screenshots <a
            href="/screenshots">here</a
         >
         and my rig <a href="/rig">here.</a>
      </p>
   </div>

   <div class="projects">
      <h2>Projects</h2>
      <div class="bentos">
         <Bento
            header="Scratch Addons"
            {imagePath}
            {lowResPath}
            imageName="ScratchAddons.png"
            content="A collection of addons for the kids' coding website; Scratch."
            href="/projects/scratch-addons"
            area="a"
         />
         <Bento
            header="MediaScout"
            {imagePath}
            {lowResPath}
            imageName="MediaScout.png"
            content="A movie explorer and player designed to just be...better"
            href="/projects/mediascout"
            short
            area="b"
         >
            <p>Currently private.</p>
         </Bento>
         <Bento
            header="Jazza's Website"
            {imagePath}
            {lowResPath}
            imageName="Website.png"
            content="A website I made for myself, to showcase my projects and stuff."
            href="/projects/jazzas-website"
            short
            area="c"
         />
         <Bento
            header="Quickie"
            {imagePath}
            {lowResPath}
            imageName="LoremPicsum.jpg"
            content="When you don't have much time, these code lessons are for you."
            href="/projects/quickie"
            area="d"
         >
            <p>Currently private.</p>
         </Bento>
      </div>
   </div>

   {#snippet indented(texts: string[])}
      {#each texts as text}
         <li class="indented">
            <div class="icon"><Arrow /></div>
            {text}
         </li>
      {/each}
      <br />
   {/snippet}

   <div class="about">
      <div class="more">
         <h2>More about me!</h2>
         <ul class="list">
            <li>I love programming, despite not being very good at it.</li>
            {@render indented([
               "I am currently learning svelte (and by extension sveltekit)",
               "I started learning programming at about 17 to contribute to the Scratch Addons project",
            ])}
            <li>I LIVE for music.</li>
            {@render indented([
               "I go to TAFE (It's like college) for music sound production",
               "Instead of performing, we do the technical side, which in my opinion is a lot more fun",
               "I also of course love listening to music (I am right now)",
               "Some of my favourite artists include Eminem, AJR, Imagine Dragons, and Train",
            ])}
            <li>I also love to play games.</li>
            {@render indented([
               "I play a lot of games, but I also do not play a lot of games",
               "I have about $300 worth of games installed that I haven't played :(",
               "And probably that much on my wishlist too",
            ])}
            <li>F O O D</li>
            {@render indented([
               "I LOVE food. Almost everything to be honest, you'll find me munching on a carrot randomly",
               "My absolute favourite food is Spaghetti Bolognese, with a special spice mix of my own creation",
               "My favourite pasta to go with it is Barilla Linguinie N.13",
               "Also recently I've found a love for salmon, and I've gotten quite good at cooking it",
            ])}
            <li>Other things I like!</li>
            {@render indented([
               "Photography",
               "Friends",
               "Movies (Classics like Inception to new hits like Deadpool And Wolverine)",
               "Reading (I LOVE YOU BRANDON SANDERSON)",
            ])}
         </ul>
      </div>
   </div>

   <div class="sitemap">
      <a href="/sitemap"> Sitemap </a>
   </div>
</div>

<style>
   .sitemap {
      display: flex;
      justify-content: center;

      a {
         color: var(--text-950);
         padding: 0.7rem 1rem;
      }
   }
   .home {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 3rem;
   }
   .greeting {
      display: flex;
      justify-content: center;
      margin-top: 2rem;

      .hi {
         font-size: 4rem;
      }
   }

   .list {
      list-style: none;
      padding: 0;

      .indented {
         padding-left: 1rem;
         display: flex;
         align-items: center;
         opacity: 0.7;

         .icon {
            padding-right: 0.3rem;
            display: flex;
            align-items: center;
         }
      }
   }

   .bentos {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 3rem;
      margin-top: 2rem;
      grid-template-areas:
         "a a b"
         "c d d";
   }

   .glow {
      background: linear-gradient(45deg, var(--primary), var(--secondary));
      width: 23rem;
      height: 3rem;
      filter: blur(3rem);
      position: absolute;
      left: 50%;
      top: 11rem;
      transform: translate(-50%, -50%);
      z-index: -1;
      opacity: 0.9;
   }
</style>
