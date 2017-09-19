import { GetterTree } from 'vuex';

import { UserState } from './state';
import { State } from '../state';
import { UserDto } from '../../models/Ambrosia';

function getUser(state: UserState, id: string): UserDto | undefined {
    return state.users.find(user => user.id === id);
}

function getUsers(state: UserState): UserDto[] {
    return state.users;
}

export const getters: GetterTree<UserState, State> = {
    getUser,
    getUsers,
};
