import Vue from 'vue';
import Vuex from 'vuex';

import { initialState, State } from './state';
import * as UserModule from './user';

Vue.use(Vuex);

const store = new Vuex.Store<State>({
    strict: true,
    state: initialState,
    modules: {
        user: UserModule.default,
    },
});

if (module.hot) {
    module.hot.accept(['./user'], () => {
        const newModules = require<typeof UserModule>('./user').default;

        store.hotUpdate({
            modules: {
                user: newModules,
            },
        })
    });
}

export default store;
