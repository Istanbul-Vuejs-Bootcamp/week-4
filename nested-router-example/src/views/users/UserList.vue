<template>
    <ul class="list-group">
        <li class="list-group-item"
            v-for="(user, index) in userList"
            :key="index"
        >
            <router-link :to="`/user-detail/${user.id}`">
                {{ user.fullName }} - {{ user.title }}
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "UserList.vue",
        data() {
            return {
                userList: [
                    { id: 1, fullName: 'John Doe', title: 'CEO' },
                    { id: 1, fullName: 'Mustafa Demir', title: 'Frontend Developer' },
                    { id: 1, fullName: 'Micheal Jordan', title: 'Player' }
                ]
            }
        },
    }
</script>
