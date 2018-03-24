<template>
    <div>
        <h1>User management</h1>

        <button class="btn btn-primary" @click="showModal = true">Add user</button>
        <UserListComponent :users="users" v-on:clicked="setSelectedUser" :allowDelete="canDelete" @delete="deleteUserAction" />

        <div v-if="userSelected">
            <UserDetailComponent :user="selectedUser"></UserDetailComponent>

            <UserEditorComponent :initialModel="selectedUser" @submit="submit" />
        </div>

        <div v-if="showModal" @close="showModal = false">
            <UserEditorComponent @submit="addUser" :title="'Add User'" />
        </div>
    </div>
</template>

<script src="./useradmin.ts"></script>
