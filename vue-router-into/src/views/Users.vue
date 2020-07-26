<template>
    <div>
        <h1>Users</h1>
        <ul>
            <li v-for="user in userList">
               <router-link
                       tag="a"
                       :to="{ path: `/users/${user.id}`}"
               >
                   {{ user.name }}
               </router-link>
            </li>
            <br>
        </ul>

        <ul>
            <li v-for="user in userList">
                <router-link
                        tag="a"
                        :to="{
                                name: `userDetail`,
                                params: { id: user.id, userName: user.name, userTitle: user.title }

                             }">
                    {{ user.name }}
                </router-link>
            </li>
            <br>
        </ul>

        <template v-if="selectedUser">
        <h2>Seçilen User</h2>
        <p>{{ selectedUser.name }}</p>
        <p>{{ selectedUser.title }}</p>
        </template>
        <br>
    </div>
</template>

<script>
    export default {
        name: "Users",
        data() {
            return {
                selectedUser: null,
                userList: [
                    { id: 1 , name: "Onur Morcagök", title: 'Software Developer' },
                    { id: 2 , name: "Erhan Arda", title: 'CEO' },
                    { id: 3 , name: "Ömer Talha Çim", title: 'Senior Java Developer' },
                    { id: 4 , name: "Dilara Özden", title: 'CTO' },
                ]
            }
        },
        watch: {
            $route: function (to, from) {
                this.selectedUser = this.userList.filter((user) => user.id == to.params.id)[0];
            }
        }
    }
</script>

<style scoped>

</style>
