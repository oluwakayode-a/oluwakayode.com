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
          <div class="flex items-center gap-3">
            <img src="~/assets/images/logo.jpg" alt="" class="w-10">
            <span class="font-bold text-lg">Oluwakayode</span>
          </div>
          <svg class="w-8 h-8 block md:hidden cursor-pointer" @click="() => showNavBar = !showNavBar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>

      </div>
    </header>

    
    <nav class="px-[1.5rem] mt-4 block md:hidden" v-show="showNavBar">
      <ul>
        <li class="border-2 mb-2 border-black text-lg p-[1.38rem] font-bold">
          <a href="">Projects</a>
        </li>
        <li class="border-2 mb-2 border-black text-lg p-[1.38rem] font-bold">
          <a href="">Resume</a>
        </li>
        <li class="border-2 border-black text-lg p-[1.38rem] font-bold">
          <a href="">Let's Talk!</a>
        </li>
      </ul>

      <span class="font-bold text-red-300 float-right cursor-pointer" @click="() => showNavBar = !showNavBar">x Close</span>
    </nav>


    <section class="pt-[6rem] px-[1.5rem]">
      <img src="~/assets/images/Frame 14.svg" alt="">
      <p class="text-[2.265rem] font-bold stroke-black stroke-2">
        I design ✍️ top notch <span class="text-highlight">websites</span> 
      </p>

      <div class="relative">
        <button class="border-4 border-black font-bold mt-[1.5rem] rotate-[0.543deg] px-[1.8rem] py-[1rem] bg-[#BAE6FF] text-base rounded-[3rem]">
          See Portfolio
        </button>

        <img src="~/assets/images/Frame 13.svg" class="absolute left-[9.6rem] -bottom-[1rem]" alt="">
      </div>
    </section>

    <section class="px-[1.5rem] pt-[4.26rem]">
      <div class="relative">
        <img src="~/assets/images/Arrow_07.png" class="absolute -top-[3.2rem] right-[5rem]" alt="">
        <img src="~/assets/images/Size7.png" alt="">
        <img src="~/assets/images/Frame 20.svg" class="absolute -top-[1rem] left-[2rem]" alt="">
        <span class="absolute uppercase -top-3 left-[3.6rem] -rotate-[40deg] font-medium">kay</span>

      </div>
    </section>

    <section class="pt-[3rem]">
      <div class="relative">
        <span class="absolute left-0">
          <img src="~/assets/images/Vector (2).svg" class="w-full" alt="">
        </span>
      </div>

      <Vue3Marquee class="bg-black py-3">
        <div v-for="skill in skills">
          <div class="flex items-center mr-10 text-white">
            {{ skill }}
          </div>
        </div>
      </Vue3Marquee>
    </section>
  </div>
</template>

<style>
.text-highlight {
  position: relative;
}

.text-highlight::before {
  background-color: #FFDC58;
  content: "";
  position: absolute;
  width: calc(100% - 2px);
  height: 20%;
  bottom: 10px;
  z-index: -1;
}
</style>

<script setup lang="ts">
useHead({
  title: "Kayode Oladipo | Fullstack Software Developer"
})

const showNavBar = ref(false)

const skills = ref([
  "django", "python"
])
</script>
