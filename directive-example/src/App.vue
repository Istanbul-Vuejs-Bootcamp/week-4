<template>
    <div class="container">
        <p v-color="'red'">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        <p v-color:background.textBlue="'gray'">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <br>
        <hr />
        <br />
        <p v-color2.delay="'red'">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p v-color2:background.delay="'blue'">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
    </div>
</template>

<script>
    import Vue from "vue";

    export default {
      directives: {
          'color2': {
              bind(el, bind, vnode ) {
                  if(bind.modifiers.delay) {
                      if( bind.arg === 'background') {
                          setTimeout(() => {
                              el.style.background = bind.value;
                          }, 2000);
                      }
                      else {
                          setTimeout(() => {
                              el.style.color = bind.value;
                          }, 2000);

                      }
                  } else {
                      if( bind.arg === 'background') {
                          el.style.background = bind.value;
                      }
                      else {
                          el.style.color = bind.value;
                      }
                  }
              },
          },
      },
      data() {
        return {
        }
      }
    }
</script>
<style>
    .container {
        width: 500px;
        margin: auto;
    }
</style>

