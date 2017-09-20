import { ActionContext, ActionTree } from 'vuex';
import Axios from 'axios';

import { UserAction } from './mutation-types';
import { UserState } from './state';
import { State } from '../state';
import { UserDto } from '../../models/Ambrosia';

async function addUser(context: ActionContext<UserState, State>, user: UserDto): Promise<void> {
    const response = await Axios.post('/api/user', user);

    const createdUser: UserDto = response.data;
    
    context.commit(UserAction.AddUser, createdUser);
}

async function deleteUser(context: ActionContext<UserState, State>, user: UserDto): Promise<void> {
    await Axios.delete(`api/user/${user.id}`);

    context.commit(UserAction.DeleteUser, user);
}

async function getUsers(context: ActionContext<UserState, State>): Promise<void> {
    const response = await Axios.get('api/user');
    const users: UserDto[] = response.data;

    context.commit(UserAction.GetUsers, users);
}

async function updateUser(context: ActionContext<UserState, State>, user: UserDto): Promise<void> {
    const response = await Axios.put('api/user', user);

    const returnedUser: UserDto = response.data;

    context.commit(UserAction.UpdateUser, returnedUser);
}

export const actions: ActionTree<UserState, State> = {
    addUser,
    deleteUser,
    getUsers,
    updateUser,
};
