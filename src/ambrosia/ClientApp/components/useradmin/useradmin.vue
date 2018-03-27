<template>
    <div>
        <h1>User management</h1>

        <button class="btn btn-primary" @click="showModal = true">Add user</button>
        <UserList :users="users" v-on:clicked="setSelectedUser" :allowDelete="canDelete" @delete="deleteUser" />

        <div v-if="userSelected">
            <UserDetail :user="selectedUser"></UserDetail>

            <UserEditor :initialModel="selectedUser" @submit="submit" />
        </div>

        <div v-if="showModal" @close="showModal = false">
            <UserEditor @submit="addUser" :title="'Add User'" />
        </div>
    </div>
</template>

<script src="./useradmin.ts"></script>
