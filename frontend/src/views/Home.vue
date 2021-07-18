<template>
  <div>
    <Header />
    <div class="h-screen bg-green-200 bg-opacity-10">
      <div class="p-8">
        <search-box 
          :value="searchValue"
          @update:value="searchValue=$event"
          @submit-form="handleSearchSubmit()"
        />
      </div>
      {{searchValue}}
      <div class="flex flex-wrap">
        <card 
          v-for="card in cards"
          :key="card.id"
          :question="card.sentence"
          :translation="card.translation"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Card from '@/components/Card.vue'
import SearchBox from '@/components/SearchBox.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Card,
    SearchBox
  },
  methods: {
    handleSearchSubmit() {
      console.log("Hello World")
    }
  },
  data() {
    return {
      searchValue: '',
      cards: [
        {
          id: 1,
          sentence: 'Hello!',
          translation: 'Asas!'
        },
        {
          id: 2,
          sentence: 'How are you!',
          translation: 'Asas!'
        }
      ]
    }
  }
}
</script>
