<template>
    <div class="header">
        <router-link to="/"
                     active-class="active"
                     exact
                     tag="a">
            Home Page
        </router-link> |
        <router-link :to="{ name: 'users' }"
                     active-class="active"
                     exact
                     tag="a">
            Users
        </router-link> |
        <router-link :to="{ path: '/admin' }"
                     active-class="active"
                     exact
                     tag="a">
            Admin
        </router-link>

        <br><br>
        javascript ile router yönlendirme<br>
        <a @click="gotoHome"> Go to Home </a> |
        <a @click="gotoUser"> Go to User </a> |
        <a @click="gotoAdmin"> Go to Admin </a>
     </div>
</template>

<script>
    export default {
        name: "Header.vue",
        methods: {
            gotoHome() {
                this.$router.push('/');
            },
            gotoUser() {
                this.$router.push({ name: 'users' });
            },
            gotoAdmin() {
                this.$router.push({ path: '/admin' });
            }
        },
        mounted() {
            console.log(this.$route);
        }
    }
</script>

<style>
    .header {
        height: 85px;
        background-color: lavender;
    }

    a {
        color: lightseagreen;
    }
    .active {
        color: #ff2200;
    }
</style>
