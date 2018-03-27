<template>
    <div>
        <h1>Weather forecast</h1>

        <p>This component demonstrates fetching data from the server.</p>

        <el-table
            v-if="forecasts.length"
            :data="forecasts"
            stripe
        >
            <el-table-column
                prop="dateFormatted"
                label="Date">
            </el-table-column>
            <el-table-column
                prop="temperatureC"
                label="Temp. (C)">
            </el-table-column>
            <el-table-column
                prop="temperatureF"
                label="Temp. (F)">
            </el-table-column>
            <el-table-column
                prop="dateFormatted"
                label="Summary">
            </el-table-column>
            <!-- <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, $index) in forecasts" v-bind:key="$index">
                    <td>{{ item.dateFormatted }}</td>
                    <td>{{ item.temperatureC }}</td>
                    <td>{{ item.temperatureF }}</td>
                    <td>{{ item.summary }}</td>
                </tr>
            </tbody> -->
        </el-table>

        <p v-else><em>Loading...</em></p>
    </div>
</template>

<script src="./fetchdata.ts"></script>
