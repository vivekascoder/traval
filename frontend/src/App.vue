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
<div class="h-screen bg-green-200 bg-opacity-10">
<div class="p-8" >
  <div class="bg-white flex items-center rounded-lg shadow">
    <input class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search">
    
    <div class="p-4">
      <button class="bg-green-400 text-white rounded-full p-2 hover:bg-green-200 focus:outline-none w-12 h-12 flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </button>
      </div>
    </div>
  </div>
<div class="flex flex-wrap">
  <!-- card 1 -->
  <div class="rounded bg-white shadow-md p-6 flex flex-col justify-around ml-10 mt-5">
    <div>
      <p class="text-base text-gray-600">Hello!</p>
    </div>
    <div>
      <p class="text-2xl text-gray-700 font-bold">Ciao👋🏾!</p>
    </div>
  </div>
  <!-- card 2 -->
   <div class="rounded bg-white shadow-md p-6 flex flex-col justify-around ml-10 mt-5">
    <div>
      <p class="text-base text-gray-600">How are you?</p>
    </div>
    <div>
      <p class="text-2xl text-gray-700 font-bold">Come stai?</p>
    </div>
  </div>
  <!-- card 3 -->
  <div class="rounded bg-white shadow-md p-6 flex flex-col justify-around ml-10 mt-5">
    <div>
      <p class="text-base text-gray-600">Excuse me</p>
    </div>
    <div>
      <p class="text-2xl text-gray-700 font-bold">Scusami</p>
    </div>
  </div>
  <!-- card 4 -->
  <div class="rounded bg-white shadow-md p-6 flex flex-col justify-around ml-10 mt-5">
    <div>
      <p class="text-base text-gray-600">Where's the restaurant?</p>
    </div>
    <div>
      <p class="text-2xl text-gray-700 font-bold">Dov'è il ristorante🍜?</p>
    </div>
  </div>
    <!-- card 5 -->
  <div class="rounded bg-white shadow-md p-6 flex flex-col justify-around ml-10 mt-5">
    <div>
      <p class="text-base text-gray-600">Where's the restroom?</p>
    </div>
    <div>
      <p class="text-2xl text-gray-700 font-bold">Dov'è il bagno 🚻?</p>
    </div>
  </div>


    <!-- card 6 -->
  <div class="rounded bg-white shadow-md p-6 flex flex-col justify-around ml-10 mt-5">
    <div>
      <p class="text-base text-gray-600">Where are you from?</p>
    </div>
    <div>
      <p class="text-2xl text-gray-700 font-bold">Di dove sei?</p>
    </div>
  </div>
        <!-- card 7 -->
  <div class="rounded bg-white shadow-md p-6 flex flex-col justify-around ml-10 mt-5">
    <div>
      <p class="text-base text-gray-600">What's your name?</p>
    </div>
    <div>
      <p class="text-2xl text-gray-700 font-bold">Come ti chiami?</p>
    </div>
  </div>
      <!-- card 8 -->
  <div class="rounded bg-white shadow-md p-6 flex flex-col justify-around ml-10 mt-5">
    <div>
      <p class="text-base text-gray-600">What's your name?</p>
    </div>
    <div>
      <p class="text-2xl text-gray-700 font-bold">Come ti chiami?</p>
    </div>
  </div>
        <!-- card 9 -->
  <div class="rounded bg-white shadow-md p-6 flex flex-col justify-around ml-10 mt-5">
    <div>
      <p class="text-base text-gray-600">How much is this?</p>
    </div>
    <div>
      <p class="text-2xl text-gray-700 font-bold">Quanto costa questo💰?</p>
    </div>
  </div>
   <!-- card 10 -->
  <div class="rounded bg-white shadow-md p-6 flex flex-col justify-around ml-10 mt-5">
    <div>
      <p class="text-base text-gray-600">Hi, my name is...</p>
    </div>
    <div>
      <p class="text-2xl text-gray-700 font-bold">Ciao, mi chiamo...</p>
    </div>
  </div>
  <!-- card 11 -->
  <div class="rounded bg-white shadow-md p-6 flex flex-col justify-around ml-10 mt-5">
    <div>
      <p class="text-base text-gray-600">Goodbye</p>
    </div>
    <div>
      <p class="text-2xl text-gray-700 font-bold">Arrivederci</p>
    </div>
  </div>
</div>
</div>
</template>

<style>
#app {

}
</style>
