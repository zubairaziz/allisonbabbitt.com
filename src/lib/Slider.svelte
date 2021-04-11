<script>
  import { fade } from 'svelte/transition'

  const carouselPhotos = [
    './images/image-1.jpg',
    './images/image-2.jpg',
    './images/image-3.jpg',
    './images/image-4.jpg',
    './images/image-5.jpg',
    './images/image-6.jpg',
    './images/image-7.jpg',
    './images/image-8.jpg',
    './images/image-9.jpg',
    './images/image-10.jpg',
  ]

  let index = 0

  const next = () => {
    index = (index + 1) % carouselPhotos.length
  }

  setInterval(() => {
    next()
  }, 3500)
</script>

<div class="relative h-full w-full border-2 border-pink-50">
  <div class="relative object-cover w-full h-[153.33px] md:h-[286.66px]">
    {#each [carouselPhotos[index]] as src (index)}
      <img class="absolute inset-0" transition:fade {src} width="430" height="286.66" alt="" />
    {/each}
  </div>
  <div class="absolute z-10 bg-gradient-to-b from-transparent via-transparent to-pink-50 inset-0" />
</div>
