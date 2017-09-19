import { Module } from 'vuex';

import { actions } from './actions';
import { mutations } from './mutations';
import { initialState, UserState } from './state';
import { State } from '../state';

export const module: Module<UserState, State> = {
    actions: actions,
    mutations: mutations,
    state: initialState,
}
