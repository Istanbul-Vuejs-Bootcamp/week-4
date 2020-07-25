<template>
  <div id="app" class="container mt-4">
    <button class="btn btn-primary mb-3" @click="isShow = !isShow">
      Göster / Gizle
    </button>
    <br>
    <transition name="slide" type="transition">
      <div class="alert alert-warning" v-if="isShow">
        Merhaba vue.js
      </div>
    </transition>
  </div>
</template>
<script>

export default {
  name: 'App',
  data() {
    return {
      isShow: false
    }
  },
}
</script>

<style>

  .slide-enter {
  }
  .slide-enter-active {
    animation: slide-in 2s ease-in;
    transition: background-color 2s;
  }

  .slide-leave {
  }

  .slide-leave-active {
    animation: slide-out 2s ease-in;
    transition: background-color 2s;
    background-color: red !important;
  }

  @keyframes slide-in {
    from {
      transform: translateX(50px);
    }
    to {
      transform: translateY(0px);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateX(50px);
    }
  }
</style>
