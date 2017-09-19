import { MutationTree } from 'vuex';

import { UserState } from './state';
import { UserDto } from '../../models/Ambrosia';

function getUsers(state: UserState, users: UserDto[]): void {
    state.users = users;
}

function updateUser(state: UserState, user: UserDto): void {
    const userIndex = state.users.findIndex(u => u.id === user.id);

    state.users[userIndex] = user;
}

export const mutations: MutationTree<UserState> = {
    getUsers,
    updateUser,
}
