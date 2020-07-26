<template>
    <div>
        HERE
        <template v-if="selectedUser">
            <h2>Seçilen User</h2>
            <p>{{ selectedUser.name }}</p>
            <p>{{ selectedUser.title }}</p>
        </template>
    </div>
</template>

<script>
    export default {
        name: "UserDetail",
        data() {
            return {
                selectedUser: null
            }
        },
        created() {
            this.selectedUser = {
                name: this.$route.params.userName,
                title: this.$route.params.userTitle,
            }
        }
    }
</script>

