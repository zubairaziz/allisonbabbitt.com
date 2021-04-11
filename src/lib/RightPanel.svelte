<script>
  import Slider from './Slider.svelte'
</script>

<section class="relative w-full h-full p-8">
  <div class="relative w-full h-full bg-lavender-50">
    <div class="w-full h-full flex flex-col justify-between">
      <div class="h-5/12 w-full">
        <Slider />
      </div>
      <div class="">
        <p class="text-center text-base md:text-3xl px-4">
          Happy Birthday Allison. <br />
          I hope it's a good one this year 😊<br />
          Looking forward to celebrating it with you!
        </p>
      </div>
      <div class="flex justify-end items-end ">
        <div class="w-1/4 pb-4 md:pb-8">
          <p class="text-base md:text-2xl">
            xoxo <br />
            Bear
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    font-family: 'Sacramento', cursive;
  }
</style>
