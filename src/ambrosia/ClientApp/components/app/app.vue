<template>
    <div id='app-root'>
        <el-row>
            <el-col :span="4" class="container">
                <nav-menu />
            </el-col>
            <el-col :span="20" class="container">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script src="./app.ts"></script>

<style scoped>
.container {
    padding-top: 0;
}
</style>

