<template>
    <div>
        <a href="#" @click="selectedComponent='globalComponent'">1. Step (1. component)</a> |
        <a href="#" @click="selectedComponent='myComponent2'">2. Step (2. component)</a> |
        <a href="#" @click="selectedComponent='myComponent3'">3. Step (3. component)</a>
        <keep-alive>
         <component :is="selectedComponent" />
        </keep-alive>
    </div>
</template>

<script>
    import myComponent2 from "./components/myComponent2";
    import myComponent3 from "./components/myComponent3";
    export default {
      components: {
        myComponent2, myComponent3
      },
        data() {
            return {
                selectedComponent: null,
            }
        },
    }
</script>
