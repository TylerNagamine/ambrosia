import { ActionContext, ActionTree } from 'vuex';

import { UserAction } from './mutation-types';
import { UserState } from './state';
import { State } from '../state';
import { UserDto } from '../../models/Ambrosia';

async function getUsers(context: ActionContext<UserState, State>): Promise<void> {
    const response = await fetch('api/users');
    const users: UserDto[] = await response.json();

    context.commit(UserAction.GetUsers, users);
}

export const actions: ActionTree<UserState, State> = {
    getUsers,
};
