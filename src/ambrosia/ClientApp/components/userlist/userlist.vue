<template>
    <div>
        <table v-if="users.length" class="table table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th v-if="allowDelete"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td @click="handleClick(user)" style="cursor: pointer;">{{ user.id }}</td>
                    <td>{{ user.userName }}</td>
                    <td>{{ user.emailAddress }}</td>
                    <td>{{ user.role.toString() }}</td>
                    <td v-if="allowDelete">
                        <i class="glyphicon glyphicon-remove-circle" @click="deleteUser(user)" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script src="./userlist.ts"></script>
