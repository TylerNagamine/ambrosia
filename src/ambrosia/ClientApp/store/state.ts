import { Store } from 'vuex';

import { UserState } from './user/state';
import { initialState as RecipeFormIntiialState, RecipeFormState } from './recipeform/state';

export interface State {
    recipeForm: RecipeFormState;
    user: UserState;
}

export const initialState: State = {
    recipeForm: {
        ...RecipeFormIntiialState,
    },
    user: {
        users: [],
    },
};
