<template>
  <form
    @submit.prevent="$emit('submitForm')"
    class="bg-white flex items-center rounded-lg shadow relative"
  >
    <input
      class="
        rounded-l-full
        w-full
        py-4
        px-6
        text-gray-700
        leading-tight
        focus:outline-none
      "
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      id="search"
      type="text"
      placeholder="Search"
      required
      autocomplete="off"
    />
    <div
      v-if="value"
      class="
        absolute
        top-full
        left-0
        right-0
        bg-white
        rounded-md
        shadow-md
        max-h-40
        overflow-y-scroll
      "
    >
      <div class="px-4 py-2 cursor-pointer" v-for="item in getMatchedValue" :key="item" @click="value=item">
        {{ item }}
      </div>
    </div>

    <div class="p-4">
      <button
        class="
          bg-green-400
          text-white
          rounded-full
          p-2
          hover:bg-green-200
          focus:outline-none
          w-12
          h-12
          flex
          items-center
          justify-center
        "
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-6 h-6"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    data: {
      type: Array,
      required: true,
    },
  },
  computed: {
    getMatchedValue() {
      let matches = [];
      this.data.forEach((element) => {
        if (element.includes(this.value) && element !== this.value) {
          matches.push(element);
        }
      });
      return matches
    },
  },
};
</script>

<style>
</style>