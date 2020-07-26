<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link tag="a"
                                 to="/"
                                 class="nav-item nav-link">
                                    Home
                    </router-link>
                    <router-link tag="a"
                                 :to="{ path: '/users', hash: 'information' }"
                                 class="nav-item nav-link">
                                    Users
                    </router-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Header.bue"
    }
</script>

<style scoped>

</style>
