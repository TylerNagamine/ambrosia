<template>
    <div>
        <table v-if="users.length" class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id" @click="handleClick(user)">
                    <td>{{ user.id }}</td>
                    <td>{{ user.userName }}</td>
                    <td>{{ user.emailAddress }}</td>
                    <td>{{ user.role.toString() }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script src="./userlist.ts"></script>
