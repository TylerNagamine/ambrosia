import { UserState } from './user/state';

export interface State {
    user: UserState;
}

export const initialState: State = {
    user: {
        users: [],
    },
},
