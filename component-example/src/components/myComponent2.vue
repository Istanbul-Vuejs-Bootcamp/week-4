<template>
    <div>
        <button @click="sayi++">Artir</button><br>
        {{ sayi }}
    </div>
</template>

<script>
    export default {
        name: "myComponent2.vue",
        data() {
            return {
                sayi: 0,
            }
        },
        activated() {
        },
        deactivated() {
        }
    }
</script>

<style scoped>

</style>
