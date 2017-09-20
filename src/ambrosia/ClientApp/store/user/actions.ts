import { ActionContext, ActionTree } from 'vuex';

import { UserAction } from './mutation-types';
import { UserState } from './state';
import { State } from '../state';
import { UserDto } from '../../models/Ambrosia';

async function addUser(context: ActionContext<UserState, State>, user: UserDto): Promise<void> {
    const response = await fetch('api/user', {
        body: JSON.stringify(user),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: 'POST',
    });

    const createdUser: UserDto = await response.json();
    
    context.commit(UserAction.AddUser, createdUser);
}

async function deleteUser(context: ActionContext<UserState, State>, user: UserDto): Promise<void> {
    await fetch(`api/user/${user.id}`, {
        method: 'DELETE',
    });

    context.commit(UserAction.DeleteUser, user);
}

async function getUsers(context: ActionContext<UserState, State>): Promise<void> {
    const response = await fetch('api/user');
    const users: UserDto[] = await response.json();

    context.commit(UserAction.GetUsers, users);
}

async function updateUser(context: ActionContext<UserState, State>, user: UserDto): Promise<void> {
    const response = await fetch('api/user', {
        body: JSON.stringify(user),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: 'PUT',
    });

    const returnedUser: UserDto = await response.json();

    context.commit(UserAction.UpdateUser, returnedUser);
}

export const actions: ActionTree<UserState, State> = {
    addUser,
    deleteUser,
    getUsers,
    updateUser,
};
