<template>
    <el-row>
        <el-col :span="24" class="nav">
            <h5>Default colors</h5>
            <el-menu
                :default-active="activeLink"
                :router="true"
                class="el-menu-vertical-demo"
            >
                <template v-for="rule in $router.options.routes">
                    <el-menu-item :index="rule.path" :key="rule.path">
                        <i :class="rule.icon"></i>
                        {{ rule.title }}
                    </el-menu-item>
                </template>
                <!-- <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>Navigator One</span>
                </template>
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span>Navigator Two</span>
                </el-menu-item>
                <el-menu-item index="2" disabled>
                    <i class="el-icon-document"></i>
                    <span>Navigator Three</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span>Navigator Four</span>
                </el-menu-item> -->
            </el-menu>
        </el-col>
        <!-- <div class="navbar navbar-inverse">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">VueSpa</a>
            </div>
            <div class="clearfix"></div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="/" :exact="true">
                            <span class="glyphicon glyphicon-home"></span> Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/counter">
                            <span class="glyphicon glyphicon-education"></span> Counter
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/fetchdata">
                            <span class="glyphicon glyphicon-th-list"></span> Fetch data
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/users">
                            <span class="glyphicon glyphicon-user"></span> Users
                        </router-link>
                    </li>
                    <li>
                        <router-link to='/recipes'>
                            <span class='glyphicon glyphicon-menu-hamburger'></span> Recipes
                        </router-link>
                    </li>
                </ul>
            </div>
        </div> -->
    </el-row>
</template>

<script src="./navmenu.ts"></script>

<style src="./navmenu.css" scoped />
