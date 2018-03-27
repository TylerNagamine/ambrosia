<template>
    <div>
        <el-table
            v-if="users.length"
            :data="users"
            stripe
        >
            <el-table-column
                prop="id"
                label="Date">
            </el-table-column>
            <el-table-column
                prop="userName"
                label="Temp. (C)">
            </el-table-column>
            <el-table-column
                prop="emailAddress"
                label="Temp. (F)">
            </el-table-column>
            <el-table-column
                prop="role"
                label="Summary">
            </el-table-column>
        </el-table>
    </div>
</template>

<script src="./userlist.ts"></script>
