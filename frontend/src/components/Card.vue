<template>
  <div
    class="
      rounded
      bg-white
      shadow-md
      p-6
      flex flex-col
      justify-around
      ml-10
      mt-5
    "
  >
    <div>
      <p class="text-base text-gray-600">{{question}}</p>
    </div>
    <div>
      <p class="text-2xl text-gray-700 font-bold">{{translation}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      required: true,
    },
    translation: {
      required: true
    }
  }
};
</script>

<style>
</style>