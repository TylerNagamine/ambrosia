<template>
    <div>
        <h1>User management</h1>

        <UserListComponent :users="usersList" v-on:clicked="setSelectedUser"></UserListComponent>

        <div v-if="Object.keys(selectedUser).length">
            <UserDetailComponent :user="selectedUser"></UserDetailComponent>
        </div>

        <UserEditorComponent :initialModel="selectedUser" />
    </div>
</template>

<script src="./useradmin.ts"></script>
