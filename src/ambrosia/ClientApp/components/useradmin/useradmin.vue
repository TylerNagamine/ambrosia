<template>
    <div>
        <h1>User management</h1>

        <UserListComponent :users="usersList" v-on:clicked="setSelectedUser"></UserListComponent>

        <div v-if="userSelected">
            <UserDetailComponent :user="selectedUser"></UserDetailComponent>

            <UserEditorComponent :initialModel="selectedUser" @submit="submit" />
        </div>
    </div>
</template>

<script src="./useradmin.ts"></script>
