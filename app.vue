<template>
  <div class="relative">
    <span class="absolute right-0">
      <img src="~/assets/images/Vector.svg" class="w-full" alt="">
    </span>

    <header class="px-[1.5rem] md:w-[70%] md:mx-auto pt-[2.5rem]">
      <div class="border-2 border-black relative p-4 md:p-0 shadow-custom">
        <span class="w-2 h-2 z-1 bg-white border-[2.01px] border-black absolute -top-[5px] -left-[5px]"></span>
        <span class="w-2 h-2 z-1 bg-white border-[2.01px] border-black absolute -top-[5px] -right-[5px]"></span>
        <span class="w-2 h-2 z-1 bg-white border-[2.01px] border-black absolute -bottom-[5px] -left-[5px]"></span>
        <span class="w-2 h-2 z-1 bg-white border-[2.01px] border-black absolute -bottom-[5px] -right-[5px]"></span>

        <div class="flex justify-between md:justify-normal">
          <a href="/" class="md:border-r-black md:border-r-2">
            <div class="flex items-center gap-3 md:p-4">
              <img src="~/assets/images/logo.jpg" alt="" class="w-10">
              <span class="font-bold text-lg">Oluwakayode</span>
            </div>
          </a>

          <div class="hidden md:flex">
            <a href="#about" class="flex items-center md:border-r-black md:border-r-2">
              <span class="p-4 font-bold">About</span>
            </a>
  
            <a href="#portfolio" class="flex items-center md:border-r-black md:border-r-2">
              <span class="p-4 font-bold">Portfolio</span>
            </a>
  
            <a href="#portfolio" class="flex items-center ">
              <span class="p-4 font-bold">Hire Me</span>
            </a>
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


    <section class="pt-[6rem] px-[1.5rem] md:flex md:items-center md:max-w-2xl md:mx-auto">
      <div>
        <img src="~/assets/images/Frame 14.svg" alt="">
        
        <p class="text-[2.265rem] font-bold stroke-black stroke-2">
          I build ✍️ top notch <span class="text-highlight">web apps</span> 
        </p>
  
        <div class="relative">
          <a href="#portfolio" class="inline-block border-4 border-black font-bold mt-[1.5rem] rotate-[0.543deg] px-[1.8rem] py-[1rem] bg-[#BAE6FF] text-base rounded-[3rem]">
            Let's talk!
          </a>
  
          <img src="~/assets/images/Frame 13.svg" class="absolute left-[8.6rem] -bottom-[1rem]" alt="">
        </div>
      </div>

      <div class="pt-[4.26rem]">
        <div class="relative sm:w-[60%] md:w-full">
          <img src="~/assets/images/Size7.png" alt="" class="w-full object-contain">
          <img src="~/assets/images/Arrow_07.png" class="absolute -top-[3.2rem] right-[5rem]" alt="">
          <img src="~/assets/images/Frame 20.svg" class="absolute -top-[1rem] left-[2rem]" alt="">
          <span class="absolute uppercase -top-3 left-[3.6rem] -rotate-[40deg] font-medium">kay</span>

        </div>
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

      <div class="flex justify-center gap-6 sm:gap-10">
        <div class="relative">
          <h1 class="text-[2rem] font-bold">My Portfolio</h1>
          <img class="absolute left-[3.5rem] bottom-[39px] w-[72%]" src="~/assets/images/Underline_05.svg" alt="">
        </div>
        
        <img src="~/assets/images/Frame 18.svg" alt="">
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 mt-[4.5rem]">
        <div @click="goToPage(project.url)" class="relative py-[1.7rem] hover:rotate-3 cursor-pointer transition" v-for="project in projects">
          <!-- <img src="~/assets/images/Border.svg" alt="" class="absolute inset-0 w-full h-full">
          <img src="~/assets/images/Border.svg" alt="" class="absolute -inset-1 opacity-50 w-full h-full"> -->

          <svg id="top-border" class="absolute top-0" viewBox="0 0 570 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.71875 4.90256C34.308 4.90256 60.9965 4.90256 76.7323 4.90256M76.7323 4.90256C92.4681 4.90256 162.335 5.20775 191.918 5.20775M76.7323 4.90256C76.7323 4.90256 110.856 3.9525 130.863 3.9525C150.87 3.9525 191.918 5.20775 191.918 5.20775M565.891 5.20775C534.582 5.20775 549.058 4.90256 517.961 4.90256C500.236 4.90256 478.551 5.4112 447.465 5.20775M275.188 3.9525C296.702 3.98189 409.148 4.95698 447.465 5.20775M275.188 3.9525C252.939 3.9221 221.501 5.20776 191.918 5.20775M275.188 3.9525C275.188 3.9525 329.133 3.9525 359.346 3.9525M447.465 5.20775C447.465 5.20775 389.558 3.9525 359.346 3.9525M191.918 5.20775C210.05 5.20775 252.09 5.20775 275.188 5.20775C298.287 5.20775 340.918 4.37091 359.346 3.9525" stroke="black" stroke-width="6.28125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          
          <svg id="bottom-border" class="absolute bottom-0" viewBox="0 0 570 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.71875 4.90256C34.308 4.90256 60.9965 4.90256 76.7323 4.90256M76.7323 4.90256C92.4681 4.90256 162.335 5.20775 191.918 5.20775M76.7323 4.90256C76.7323 4.90256 110.856 3.9525 130.863 3.9525C150.87 3.9525 191.918 5.20775 191.918 5.20775M565.891 5.20775C534.582 5.20775 549.058 4.90256 517.961 4.90256C500.236 4.90256 478.551 5.4112 447.465 5.20775M275.188 3.9525C296.702 3.98189 409.148 4.95698 447.465 5.20775M275.188 3.9525C252.939 3.9221 221.501 5.20776 191.918 5.20775M275.188 3.9525C275.188 3.9525 329.133 3.9525 359.346 3.9525M447.465 5.20775C447.465 5.20775 389.558 3.9525 359.346 3.9525M191.918 5.20775C210.05 5.20775 252.09 5.20775 275.188 5.20775C298.287 5.20775 340.918 4.37091 359.346 3.9525" stroke="black" stroke-width="6.28125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <svg id="left-border" class="absolute left-0 top-0" viewBox="0 0 10 569" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.2902 3.39062C5.2902 63.1175 5.92662 87.1203 5.92662 150.639M5.92662 150.639C5.92662 214.158 5.82822 329.929 5.2902 407.738C4.75218 485.547 4.33473 561.284 4.33473 561.284C4.33473 572.274 3.1579 559.305 3.24373 553.457C3.35103 546.147 4.38063 338.177 4.38063 320.022C4.38063 301.866 5.2902 209.446 5.92662 150.639Z" stroke="black" stroke-width="6.28125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <svg id="right-border" class="absolute right-0 top-0" viewBox="0 0 10 569" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.2902 3.39062C5.2902 63.1175 5.92662 87.1203 5.92662 150.639M5.92662 150.639C5.92662 214.158 5.82822 329.929 5.2902 407.738C4.75218 485.547 4.33473 561.284 4.33473 561.284C4.33473 572.274 3.1579 559.305 3.24373 553.457C3.35103 546.147 4.38063 338.177 4.38063 320.022C4.38063 301.866 5.2902 209.446 5.92662 150.639Z" stroke="black" stroke-width="6.28125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>



  
          <div class="w-full h-full relative px-[1.8rem]">
            <img :src="project.image" class="w-full border-2 border-black h-[10.8rem] object-center object-cover mx-auto" alt="">
            
            <div class="flex justify-between items-center mt-5">
              <h1 class="font-bold text-base">{{ project.name }}</h1>
              <NuxtLink :to="project.url" class="bg-black p-[0.5rem] shadow-[2.36px_2.36px_0px_#8E8F87]">
                <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.59821 1.37427L8.99524 8.03206M8.59821 1.37427L1.94042 1.7713M8.59821 1.37427L1.294 9.60489" stroke="#FDFDFD" stroke-width="1.41492" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
  
              </NuxtLink>
            </div>
  
            <div class="flex items-center gap-3 mt-2">
              <span v-for="tech in project.technologies" v-html="tech" class="w-5 h-5 border rounded-full pr-[2px]" />
            </div>
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

      <div class="grid grid-cols-1 gap-4 sm:gap-7 md:gap-9 [&>*:nth-child(odd)]:rotate-3 [&>*:nth-child(even)]:-rotate-3">
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

    <section class="px-[1.5rem] pt-[5rem] pb-[5.8rem]">
      <div class="relative border-2 border-black shadow-[5.73px_5.73px_0px_0px_#BFBFB4] px-4 py-[3.74rem]">
        <img src="~/assets/images/Vector (3).svg" alt="" class="absolute -top-10 inset-x-[35%]">

        <h1 class="font-medium text-lg text-center">
          Looking to build the next big thing?
        </h1>

        <div class="flex justify-center items-end">
          <button class="border-4 shadow-[4.73px_4.73px_0px_0px_#BFBFB4] border-black font-bold mt-[1.5rem] px-[1.8rem] py-[0.6rem] bg-[#BAE6FF] text-base rounded-[3rem]">
            Let's Talk
          </button>

        </div>
      </div>
    </section>

    <hr class="border-2 border-black">

    <footer class="py-[2.4rem] space-y-5">
      <div class="flex items-center justify-center gap-3">
        <img src="~/assets/images/logo.jpg" alt="" class="w-10">
        <span class="font-bold text-2xl">Oluwakayode</span>
      </div>

      <div class="text-center">&copy; {{ new Date().getFullYear() }}</div>


      <div class="flex justify-center gap-6">
        <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class="w-6 h-6">
            <g fill="#181616">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/></g>
          </svg>
        </a>

        <a href="">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"/><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/></svg>
        </a>

        <a href="">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#1d9bf0" d="M114.896 37.888c.078 1.129.078 2.257.078 3.396 0 34.7-26.417 74.72-74.72 74.72v-.02A74.343 74.343 0 0 1 0 104.21c2.075.25 4.16.375 6.25.38a52.732 52.732 0 0 0 32.615-11.263A26.294 26.294 0 0 1 14.331 75.09c3.937.76 7.993.603 11.857-.453-12.252-2.475-21.066-13.239-21.066-25.74v-.333a26.094 26.094 0 0 0 11.919 3.287C5.5 44.139 1.945 28.788 8.913 16.787a74.535 74.535 0 0 0 54.122 27.435 26.277 26.277 0 0 1 7.598-25.09c10.577-9.943 27.212-9.433 37.154 1.139a52.696 52.696 0 0 0 16.677-6.376A26.359 26.359 0 0 1 112.92 28.42 52.227 52.227 0 0 0 128 24.285a53.35 53.35 0 0 1-13.104 13.603z"/></svg>
        </a>
        
      </div>
      <div class="text-center text-xs">
        Design by <a class="font-bold text-blue-400" href="https://twitter.com/zainab_nisa_">Zina</a>
      </div>
    </footer>
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

#top-border, #bottom-border {
  width: calc(100% + 20px);
  left: -10px;
  box-shadow: -1px -3px 0 0 #bfbfb4
}

#left-border, #right-border {
  height: calc(100% + 20px);
  top: -10px;
  box-shadow: -1px -3px 0 0 #bfbfb4;
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
