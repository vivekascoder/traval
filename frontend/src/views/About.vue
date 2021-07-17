<template>
<header class="border-b md:flex md:items-center md:justify-between p-5 pb-3 shadow md:pb-4">
  
  <!-- Logo text or image -->
  <div class="flex items-center justify-between mb-4 md:mb-0">
    <h1 class="leading-none text-2xl text-grey-darkest">
      <a class="no-underline text-grey-darkest hover:text-grey-800 ml-10" href="#">
         <router-link to="/">
        Traval
         </router-link>
      </a>
    </h1>

    <a class="text-black hover:text-orange md:hidden" href="#">
      <i class="fa fa-2x fa-bars"></i>
    </a>
  </div>

  <nav>
    <ul class="md:flex md:items-center">
      <li class="md:ml-4">
        <a class="block py-2 text-grey-darkest hover:text-black ml-10" href="#">
           <router-link to="/">
          Home
           </router-link>
        </a>
      </li>
      <li class="md:ml-4">
        <a class="blockpy-2 text-grey-darkest hover:text-black ml-10 mr-10" href="#">
           <router-link to="/about">
          About
           </router-link>
        </a>
      </li>
     
    </ul>
  </nav>
  <!-- END Global navigation -->

</header>
<div class="h-screen bg-green-100 bg-opacity-10">
  <p style="padding:20px;">Built by <a href="https://blog.divcorn.com/" class="text-green-400">Vivek</a>, <a href="https://github.com/kaushik-rishi" class="text-green-400">Kaushik</a>, and <a href="https://gabrielemuratori.tech/" class="text-green-400"> Gabriele </a> for the 2021 Bon Voyage Hackathon.</p>
</div>
</template>
