<template>
<div class="p-8 ">
  <div class="bg-white flex items-center rounded-lg shadow">
    <input class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search">
    
    <div class="p-4">
      <button class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
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
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
