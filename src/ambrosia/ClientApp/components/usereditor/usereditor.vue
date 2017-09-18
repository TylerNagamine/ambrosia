<template>
    <div class="panel panel-default" style="padding: 10px">
        <h1>{{ title }}</h1>

        <div class="form-group">
            <input class="form-control" v-model="model.userName" placeholder="Username">
            <input class="form-control" v-model="model.emailAddress" placeholder="Email address">
            <select class="form-control" v-model="model.role">
                <option v-for="role in roleOptions" :key="role" v-bind:value="role">{{ role }}</option>
            </select>

            <button @click="handleClick">Submit</button>
        </div>
    </div>
</template>

<script src="./usereditor.ts"></script>
