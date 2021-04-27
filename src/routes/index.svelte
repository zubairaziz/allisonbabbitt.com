<script lang="ts">
  import Card from '../lib/Card.svelte'

  const countDownDate = new Date('Apr 27, 2021 00:00:00').getTime()
  let isLive
  let distance
  let days
  let hours
  let minutes
  let seconds

  const x = setInterval(() => {
    const now = new Date().getTime()

    distance = countDownDate - now
    days = Math.floor(distance / (1000 * 60 * 60 * 24))
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    seconds = Math.floor((distance % (1000 * 60)) / 1000)

    if (distance <= 0) {
      isLive = distance <= 0
      clearInterval(x)
    }
  }, 1000)
</script>

<div class={`relative h-screen w-screen`}>
  <!-- {#if !isLive}
    <div class="relative h-screen w-screen bg-gradient-to-b from-lavender-500 to-purple-200">
      <div class="h-full w-full grid place-content-center p-4">
        <div
          class="p-8 bg-pink-50 text-lg text-purple-600 rounded-xl shadow-md flex flex-col text-center w-[90vw] md:w-[50vw] lg:w-[33vw] xl:w-[500px]"
        >
          <div class="text-2xl mb-4">Site will be live in:</div>
          <div class="mb-4 tabular-nums">
            {`
            ${days} day${days === 1 ? '' : 's'}
            ${hours} hour${hours === 1 ? '' : 's'}
            ${minutes} minute${minutes === 1 ? '' : 's'}  
            ${seconds} second${seconds === 1 ? '' : 's'} 
            `}
          </div>
          <div class="text-xl mb-4">See you soon</div>
        </div>
      </div>
    </div>
  {:else} -->
  <Card />
  <!-- {/if} -->
</div>

<style style lang="postcss">
</style>
