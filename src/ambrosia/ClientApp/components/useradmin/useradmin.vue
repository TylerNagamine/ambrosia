<template>
    <div>
        <h1>User management</h1>

        <UserListComponent :users="usersList" v-on:clicked="setSelectedUser"></UserListComponent>

        <div v-if="Object.keys(selectedUser).length">
            <UserDetailComponent :user="selectedUser"></UserDetailComponent>
        </div>
    </div>
</template>

<script src="./useradmin.ts"></script>
