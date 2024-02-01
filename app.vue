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

      <Vue3Marquee class="bg-black py-3 overflow-hidden" 
        :pause-on-hover="true">
        <div v-for="skill in skills">
          <div class="flex items-center mr-10 text-white gap-2">
            <span v-html="skill.icon" class="w-6 h-6"></span> 
            <span class="capitalize">{{ skill.name }}</span> 
          </div>
        </div>
      </Vue3Marquee>
    </section>

    <section class="px-[1.5rem] pt-[3.34rem]">
      <div class="relative">
        <h1 class="text-[2.5rem] font-bold">My Portfolio</h1>
        <img class="absolute left-[4.5rem] bottom-0" src="~/assets/images/Underline_05.svg" alt="">
        <img src="~/assets/images/Frame 18.svg" alt="" class="absolute right-0 -top-4">
      </div>

      <div @click="goToPage(project.url)" class="mt-[4.5rem] relative py-[1.7rem] px-[1.8rem] hover:rotate-3 cursor-pointer transition" v-for="project in projects">
        <img src="~/assets/images/Border.svg" alt="" class="absolute inset-0">
        <img src="~/assets/images/Border.svg" alt="" class="absolute -inset-1 opacity-50">

        <div class="w-full h-full relative">
          <img :src="project.image" class="border-2 border-black h-[10.8rem] object-center object-cover mx-auto" alt="">
          
          <div class="flex justify-between items-center mt-5">
            <h1 class="font-bold text-[20px]">{{ project.name }}</h1>
            <NuxtLink :to="project.url" class="bg-black p-[0.5rem] shadow-[2.36px_2.36px_0px_#8E8F87]">
              <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.59821 1.37427L8.99524 8.03206M8.59821 1.37427L1.94042 1.7713M8.59821 1.37427L1.294 9.60489" stroke="#FDFDFD" stroke-width="1.41492" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            </NuxtLink>
          </div>

          <div class="flex items-center gap-3 mt-4">
            <span v-for="tech in project.technologies" v-html="tech" class="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>

    <section class="pt-[4.5rem] px-[1.5rem]">
      <h1 class="font-medium text-[24px]">
        Here’s what my clients <br> are saying about my work
      </h1>

      <svg class="ml-auto mt-4" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_1410)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.1827 17.3139C7.0645 17.1979 6.94543 17.0818 6.8255 16.9667C5.60283 15.7946 4.38968 14.6213 3.25144 13.3644C2.97565 13.0601 2.45783 12.4695 1.93785 12.1656C1.56594 11.9483 1.18102 11.8573 0.82903 11.9024C0.604759 11.9309 0.277024 12.044 0.1125 12.4739C0.0847909 12.5462 0.0518936 12.6704 0.0389048 12.8289C0.0181229 13.0852 0.038462 13.545 0.0449563 13.6086C0.135877 14.536 0.226795 15.4227 0.393484 16.3402C0.54675 17.1844 0.651522 18.0352 0.816478 18.8782C1.06326 20.1394 1.38106 21.3534 1.84433 22.5544C2.01621 23.0003 2.51801 23.2225 2.96396 23.0506C3.40947 22.8787 3.63201 22.3773 3.46012 21.9314C3.03366 20.8252 2.74315 19.7073 2.51628 18.5457C2.35262 17.7105 2.24914 16.8671 2.09717 16.0306C1.99845 15.4864 1.92831 14.9534 1.86856 14.4157L1.96771 14.5269C3.13366 15.8141 4.37496 17.0165 5.62708 18.2166C6.09553 18.666 6.54798 19.1284 7.0238 19.5705C7.06233 19.6268 7.24026 19.8848 7.32772 19.9731C7.47319 20.1203 7.63036 20.2026 7.76718 20.2433C8.11484 20.3472 8.46771 20.3087 8.77598 19.919C9.00674 19.6272 9.13964 19.1747 9.12968 18.6344C9.11626 17.8919 8.83443 16.913 8.77468 16.4618C8.39628 13.6074 7.78407 10.7641 7.62128 7.88497C7.59444 7.40785 7.18529 7.04242 6.70817 7.06926C6.23105 7.09654 5.86519 7.50567 5.89247 7.98279C6.05742 10.9053 6.67354 13.7918 7.05757 16.6896C7.07835 16.8437 7.12771 17.0632 7.1827 17.3139Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.749 5.48155C13.7671 5.74176 12.7834 5.96862 11.9946 6.64317C11.1694 7.34932 10.7498 8.375 10.6005 9.51801C10.41 10.9762 10.6654 12.6305 10.8239 13.8095C10.9061 14.4199 10.9412 15.2707 11.1191 16.0245C11.2724 16.6726 11.5335 17.2532 11.9314 17.6598C12.5566 18.2984 13.516 18.3629 14.5001 17.9646C15.637 17.5043 16.7692 16.4423 17.0771 15.8232C17.2901 15.3954 17.1156 14.875 16.6874 14.6624C16.2596 14.4494 15.7397 14.6239 15.5266 15.0516C15.3314 15.4443 14.5715 16.0674 13.8502 16.3596C13.6892 16.4245 13.5298 16.473 13.3792 16.4851C13.3008 16.4916 13.2224 16.5029 13.1692 16.4488C12.9081 16.1817 12.8163 15.7474 12.7406 15.3088C12.6345 14.6975 12.605 14.0589 12.5405 13.5783C12.3985 12.524 12.1474 11.0464 12.3176 9.74228C12.4089 9.04306 12.6154 8.39147 13.1207 7.95937C13.7069 7.45801 14.462 7.34933 15.1924 7.1558C15.6544 7.0337 15.9302 6.55918 15.8076 6.09722C15.6855 5.63525 15.211 5.35946 14.749 5.48155Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6809 10.0445C13.9202 10.4588 13.1071 10.8848 12.2919 11.1775C11.842 11.339 11.6078 11.8352 11.7689 12.285C11.9304 12.7349 12.4265 12.9691 12.8764 12.8076C13.7743 12.4855 14.6718 12.0218 15.5092 11.5659C15.9287 11.3373 16.0841 10.8108 15.8555 10.3913C15.6269 9.97129 15.1009 9.8163 14.6809 10.0445Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1428 10.504C24.5107 9.73939 23.8427 8.98692 23.137 8.29938C23.0794 8.24353 22.3676 7.6573 21.9446 7.43823C21.6593 7.29059 21.4064 7.26375 21.2584 7.27803C20.8276 7.3196 20.5648 7.55297 20.457 7.95215C20.3539 8.33489 20.3167 8.73364 20.3167 9.14062C19.6763 7.94003 19.0906 6.70524 18.7347 5.40507C18.7052 5.29769 18.6814 5.24747 18.6775 5.23837C18.5576 4.9734 18.3874 4.88333 18.3268 4.84783C18.0289 4.67292 17.7605 4.70238 17.5341 4.80412C17.5064 4.81625 16.8959 5.08727 17.0418 5.77957C17.0535 5.83542 17.1531 6.2333 17.1821 6.38873C17.2076 6.52382 17.263 6.64547 17.3405 6.74852C17.9371 8.46216 18.8498 10.081 19.7257 11.6617C19.9149 12.0033 20.0625 12.3553 20.16 12.7333C20.1885 12.8437 20.2002 13.0935 20.2253 13.216C20.2682 13.4234 20.353 13.5624 20.4072 13.6334C20.6886 14.0031 21.0354 14.0408 21.3553 13.946C21.4922 13.9057 21.7662 13.8135 21.9329 13.4165C22.3078 12.5246 22.2654 11.5396 22.1568 10.5473C22.1247 10.2537 22.0849 9.96019 22.0606 9.67011C22.8309 10.4356 23.5517 11.2798 24.2293 12.1237C24.3038 12.2163 25.058 13.0597 25.2585 13.1853C25.7598 13.5005 26.1491 13.2636 26.3157 13.1225C26.5699 12.9069 26.7699 12.5367 26.8513 12.0652C26.9561 11.4552 26.8734 10.6157 26.8652 10.278C26.8102 8.00495 26.7279 5.6289 26.2174 3.40956C26.1105 2.9437 25.6455 2.65274 25.1797 2.75968C24.7138 2.86662 24.4229 3.33206 24.5298 3.79749C25.0143 5.90513 25.0814 8.16213 25.1338 10.32C25.1351 10.3698 25.1385 10.4321 25.1428 10.504Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5991 2.83353C28.913 4.35104 29.2273 5.85469 29.4325 7.41506C29.4948 7.88915 29.93 8.22341 30.404 8.16106C30.8777 8.09871 31.212 7.66358 31.1496 7.1895C30.8604 4.98877 30.3599 2.89934 29.9408 0.728488C29.7793 -0.110583 28.9818 0.00676048 28.9329 0.0154196C28.8251 0.0344697 28.2375 0.159593 28.2181 0.847562C28.2168 0.889559 28.2449 1.18655 28.2497 1.30171C28.2601 1.56538 28.2548 1.823 28.2414 2.08711C28.2258 2.39148 28.3692 2.66727 28.5991 2.83353Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8406 11.7826C30.9285 11.515 30.8839 11.2094 30.6951 10.9726C30.3968 10.5989 29.8517 10.5379 29.4781 10.8362C29.133 11.1115 29.0685 11.4471 29.1148 11.8575C29.1685 12.3325 29.598 12.6745 30.073 12.6204C30.5072 12.5715 30.8302 12.2078 30.8406 11.7826Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4946 28.4859C14.4063 28.2988 14.3353 28.1512 14.3184 28.1196C13.5139 26.6151 12.6411 25.1304 11.6907 23.7134C11.4245 23.3164 10.8863 23.2103 10.4893 23.4766C10.0923 23.7428 9.98621 24.281 10.2525 24.678C11.1708 26.047 12.0137 27.4823 12.7913 28.9362C12.8506 29.047 13.2459 30.032 13.5282 30.4428C13.7841 30.8148 14.1054 30.9477 14.2894 30.9749C14.5816 31.0182 15.0388 30.9135 15.4099 30.4182C15.8943 29.7718 16.5225 28.0447 16.626 27.7581C16.8157 27.2307 16.9763 26.6774 17.1252 26.1392C17.4075 25.1183 17.5699 24.0792 17.7149 23.0323C17.7807 22.5587 17.4495 22.1214 16.9759 22.0556C16.5026 21.9902 16.0649 22.3214 15.9995 22.7947C15.8649 23.7658 15.7181 24.7304 15.4562 25.6773C15.3185 26.1739 15.1713 26.6852 14.9964 27.1719C14.9436 27.3178 14.7383 27.9204 14.4946 28.4859Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_1_1410">
        <rect width="31.1729" height="31.1729" fill="white"/>
        </clipPath>
        </defs>
      </svg>

      <div class="grid grid-cols-1 gap-4 [&>*:nth-child(odd)]:rotate-3 [&>*:nth-child(even)]:-rotate-3">
        <div class="border-2 border-black p-5 shadow-[5.73px_5.73px_0px_0px_#BFBFB4]" v-for="review in reviews">
          <div class="font-medium text-[15px]">
            {{ review.text }}
          </div>

          <div class="flex items-center gap-2 mt-4">
            <img :src="review.image" alt="" class="object-cover w-12 h-12 rounded-full">

            <div>
              <h3 class="font-semibold text-[15px]">{{ review.name }}</h3>
              <h4 class="font-medium text-[12px]">{{ review.portfolio }}</h4>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section class="px-[1.5rem] pt-[5rem] pb-2">
      <div class="relative border-2 border-black shadow-[5.73px_5.73px_0px_0px_#BFBFB4] px-4 pb-[3.74rem]">
        <img src="~/assets/images/Vector (3).svg" alt="">

        <h1 class="font-medium text-lg text-center">
          Looking to build the next big thing?
        </h1>

        <div class="flex justify-center items-end">
          <button class="border-4 shadow-lg border-black font-bold mt-[1.5rem] px-[1.8rem] py-[0.6rem] bg-[#BAE6FF] text-base rounded-[3rem]">
            Let's Talk
          </button>

          <!-- <img src="~/assets/images/Frame 13.svg" alt=""> -->
        </div>
      </div>
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
import { skills, projects, reviews } from "~/utils"

useHead({
  title: "Kayode Oladipo | Fullstack Software Developer"
})

function goToPage(link: string) {
  window.open(link)
}

const showNavBar = ref(false)
</script>
