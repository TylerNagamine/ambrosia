<template>
    <div>
        <h1>User management</h1>

        <el-button type="primary" @click="showModal = true">Add user</el-button>
        <UserList :users="users" v-on:clicked="setSelectedUser" :allowDelete="canDelete" @delete="deleteUser" />

        <el-col :span="12" v-if="userSelected">
            <UserDetail :user="selectedUser"></UserDetail>

            <UserEditor :initialModel="selectedUser" @submit="submit" />
        </el-col>

        <el-col v-if="showModal" @close="showModal = false" :span="12">
            <UserEditor @submit="addUser" :title="'Add User'" />
        </el-col>
    </div>
</template>

<script src="./useradmin.ts"></script>
