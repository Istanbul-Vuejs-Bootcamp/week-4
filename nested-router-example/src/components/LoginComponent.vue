<template>
    <form>
        <div class="form-group">
            <template v-if="loginType === 'admin'">
                <label for="exampleInputEmail1">Username</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Enter username">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </template>
            <template v-else>
                <label for="exampleInputEmail1">E-mail</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Enter e-mail">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </template>

        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
    export default {
        name: "LoginComponent.vue",
        props: {
            loginType: {
                type: String,
                default: 'user'
            }
        }
    }
</script>

<style scoped>

</style>
