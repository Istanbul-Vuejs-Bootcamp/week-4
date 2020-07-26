<template>
    <div class="container">
        <br>
        <h3>Users Area</h3>
        <button class="btn btn-info" @click="goToList">
            List
        </button> |
        <button class="btn btn-info" @click="goToDetail">
            Detail
        </button>
        <router-view></router-view>
        <div style="height: 950px;">

        </div>
        <div id="information">
            asdasd asdasda sd asd asdasdasd asdsad
            asd
            sad

        </div>
    </div>
</template>

<script>
    export default {
        name: "users.vue",
        methods: {
            goToList() {
                this.$router.push({ path: '/users/list' });
            },
            goToDetail() {
                this.$router.push({ path: '/users/detail/1' });
            }
        },
        beforeRouteLeave (to, from, next) {
            const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
            if (answer) {
                next()
            } else {
                next(false)
            }
        }
    }
</script>

<style scoped>

</style>
