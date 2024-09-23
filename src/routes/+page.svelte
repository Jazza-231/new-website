<script lang="ts">
   const { data } = $props();
   const { age } = data;
</script>

<div class="greeting">
   <div class="glow"></div>
   <div class="hi">
      Hi! I'm <span class="colour-effect">Jazza</span>
   </div>
</div>

<div class="who">
   <h2>Who am I?</h2>
   <p>
      My name is Jazza, and I am an {age} year old beginner programmer. I began to
      learn programming about {age - 17 === 1 ? "1 year" : age - 17 + " years"} ago,
      starting with JS in order to contribute to the Scratch Addons project.
   </p>
   <p>
      My relationship with programming is one of immense love-filled hatred.
      <br />
      Looking at you CSS. (SASS makes it bearable.)
   </p>
   <p>
      I currently attend a TAFE institution in Western Australia for a music
      technology course, another of my passions. When I'm not studying there, I
      am coding. I am still 100% a beginner, and am currently learning
      svelte+kit. When I am not studying or coding, I am probably gaming. I play
      relatively popular games, such as Red Dead Redemption 2, CS2, Forza
      Horizon 5, and Cyberpunk 2077. You can check out screenshots <a
         href="/screenshots">here</a
      >
      and my rig <a href="/rig">here.</a>
   </p>
</div>

<style lang="scss">
   .greeting {
      display: flex;
      justify-content: center;

      .hi {
         font-size: 4rem;
      }
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
