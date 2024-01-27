<template>
  <div class="relative">
    <span class="absolute right-0">
      <img src="~/assets/images/Vector.svg" class="w-full" alt="">
    </span>

    <header class="px-[1.5rem] pt-[2.5rem]">
      <div class="border-2 border-black relative p-4 shadow-custom">
        <span class="w-2 h-2 z-1 bg-white border-[2.01px] border-black absolute -top-[5px] -left-[5px]"></span>
        <span class="w-2 h-2 z-1 bg-white border-[2.01px] border-black absolute -top-[5px] -right-[5px]"></span>
        <span class="w-2 h-2 z-1 bg-white border-[2.01px] border-black absolute -bottom-[5px] -left-[5px]"></span>
        <span class="w-2 h-2 z-1 bg-white border-[2.01px] border-black absolute -bottom-[5px] -right-[5px]"></span>

        <div class="flex justify-between">
          <img src="~/assets/images/Vector (1).svg" alt="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>


      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Kayode Oladipo | Fullstack Software Developer"
})
</script>
