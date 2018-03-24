import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import { initialState, State } from './state';
import * as RecipeFormModule from './recipeform';
import * as UserModule from './user';

Vue.use(Vuex);

const store = new Vuex.Store<State>({
    strict: true,
    state: initialState,
    modules: {
        recipeForm: RecipeFormModule.default,
        user: UserModule.default,
    },
});

if (module.hot) {
    module.hot.accept(['./recipeform', './user'], () => {
        const newRecipeFormModule = require<typeof RecipeFormModule>('./recipeform').default;
        const newUserModule = require<typeof UserModule>('./user').default;

        store.hotUpdate({
            modules: {
                recipeForm: newRecipeFormModule,
                user: newUserModule,
            },
        })
    });
}

declare module "vue/types/vue" {
    interface Vue {
      $appStore: Store<State>;
    }
  }

Object.defineProperty(Vue.prototype, '$appStore', {
    get: function(): Store<any> {
        return (<Vue>this).$store;
    },
});

export default store;
