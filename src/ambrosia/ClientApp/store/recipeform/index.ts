import { Module } from 'vuex';

import { mutations } from './mutations';
import { initialState, RecipeFormState } from './state';
import { State } from '../state';

export * from './state';
export { IndexedAction } from './mutations';
export { RecipeFormMutation } from './mutation-types';
export { RecipeFormState };

export default <Module<RecipeFormState, State>> {
    mutations: mutations,
    state: initialState,
}
