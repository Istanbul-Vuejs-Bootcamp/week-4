<template>
  <div id="app" class="container">
    <button @click="shuffle">Shuffle</button>
    <transition-group name="flip-list">
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </transition-group>

    <br> Deboucne example
    <input v-model="search" @input="searchUser">
    {{ search }}
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'App',
  data() {
    return {
      items: [1,2,3,4,5,6,7,8,9],
      search: '',
    }
  },
  methods: {
    shuffle() {
      this.items = _.shuffle(this.items)
    },

   searchUser: _.debounce(function() {
     console.log('search user çağrıldı');
   }, 500),
  },
}
</script>
<style>
  .flip-list-move {
    transition: transform 1s;
  }
</style>

