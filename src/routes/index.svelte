<script lang="ts">
  import Confetti from '$lib/Confetti.svelte'
  import FrontPanel from '../lib/FrontPanel.svelte'
  import RightPanel from '../lib/RightPanel.svelte'
  let isOpen = false
</script>

<main class={`relative h-screen w-screen bg-gradient-to-b from-lavender-500 to-purple-200 ${isOpen ? 'open' : ''}`}>
  <Confetti />
  <div
    class="cursor-pointer absolute left-1/2 top-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2 duration-500 transition-all ease-in-out js-card-opener"
    on:click={() => (isOpen = !isOpen)}
  >
    <div class="card transition-all duration-500 w-[80vw] h-[104vw] block max-w-[500px] max-h-[650px]">
      <div class="card-panel front z-[1]">
        <FrontPanel />
      </div>
      <div class="card-panel inside-left !border-l z-0" />
      <div class="card-panel inside-right !border-l-0 z-[-1]">
        <RightPanel />
      </div>
    </div>
  </div>
</main>

<style style lang="postcss">
  .js-card-opener {
    perspective: 1400px;
  }

  .card {
    transform: rotateX(30deg);
    transform-style: preserve-3d;
  }

  .card-panel {
    @apply border-gray-600 border-2 bg-lavender-50 absolute w-full h-full inset-0 transition-all duration-1000 ease-in-out;
    backface-visibility: visible;
    transform-origin: left;
    transform-style: preserve-3D;
    transform: rotate3d(0, 1, 0, 0deg);
    background-image: url('./flowers.jpg');
    background-size: cover;
    background-repeat: norepeat;

    &.front {
      backface-visibility: hidden;
    }
  }

  .open {
    .js-card-opener {
      @apply md:translate-x-0;
    }

    .card {
      transform: rotateX(0deg);
    }

    .front {
      transform: rotate3d(0, 1, 0, -170deg);
    }

    .inside-left {
      transform: rotate3d(0, 1, 0, -170deg);
    }
  }
</style>
