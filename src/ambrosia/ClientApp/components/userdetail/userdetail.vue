<template>
    <div class="panel panel-default" v-if="Object.keys(user).length">
        <div class="panel-heading">
            {{ user.id }}
        </div>
        <div class="panel-body">
            <div>Username: {{ user.userName }}</div>
            <div>Email: {{ user.emailAddress }}</div>
            <div>Role: {{ user.role.toString() }}</div>
        </div>
    </div>
</template>

<script src="./userdetail.ts"></script>
