import { UserDto } from '../../models/Ambrosia';

export interface UserState {
    users: UserDto[];
}

export const initialState: UserState = {
    users: [],
};
