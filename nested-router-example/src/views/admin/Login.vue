<template>
    <div class="container">
        <LoginComponent loginType="admin" />
    </div>
</template>

<script>
    import LoginComponent from "../../components/LoginComponent";
    export default {
        name: "Login",
        components: { LoginComponent }
    }
</script>

