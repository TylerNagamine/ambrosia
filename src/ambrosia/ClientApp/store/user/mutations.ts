import Vue from 'vue';
import { MutationTree } from 'vuex';

import { UserState } from './state';
import { UserDto } from '../../models/Ambrosia';

function addUser(state: UserState, user: UserDto): void {
    state.users.push(user);
}

function deleteUser(state: UserState, user: UserDto): void {
    const userIndex = state.users.findIndex(u => u.id === user.id);

    state.users.splice(userIndex, 1);
}

function getUsers(state: UserState, users: UserDto[]): void {
    state.users = users;
}

function updateUser(state: UserState, user: UserDto): void {
    const userIndex = state.users.findIndex(u => u.id === user.id);

    Vue.set(state.users, userIndex, user);
}

export const mutations: MutationTree<UserState> = {
    addUser,
    deleteUser,
    getUsers,
    updateUser,
}
