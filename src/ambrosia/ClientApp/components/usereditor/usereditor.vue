<template>
    <el-col class="container" :span="24">
        <h1>{{ title }}</h1>

        <form>
            <el-input class="form-control" v-model="model.userName" placeholder="Username"></el-input>
            <el-input class="form-control" v-model="model.emailAddress" placeholder="Email address"></el-input>
            <el-select
                class="role-selector form-control"
                placeholder="Select a role..."
                v-model="model.role"
            >
                <el-option
                    v-for="role in roleOptions"
                    :key="role"
                    :label="role"
                    :value="role"
                >
                    {{ role }}
                </el-option>
            </el-select>

            <el-button type="primary" @click="handleClick">Submit</el-button>
        </form>
    </el-col>
</template>

<script src="./usereditor.ts"></script>

<style scoped>
.role-selector {
    display: block;
    width: 100%;
}

.form-control {
    margin-bottom: 10px;
}
</style>

