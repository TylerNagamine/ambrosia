import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';

import { UserAction, UserState } from '../../store/user';
import { UserDto } from '../../models/Ambrosia';

@Component({
    components: {
        UserEditorComponent: require('../usereditor/usereditor.vue'),
        UserDetailComponent: require('../userdetail/userdetail.vue'),
        UserListComponent: require('../userlist/userlist.vue'),
    }
})
export default class UserAdminComponent extends Vue {
    showModal = false;
    selectedUser: UserDto = {};

    @State('user')
    userState: UserState;

    @Action(UserAction.DeleteUser)
    deleteUserAction: (u: UserDto) => Promise<void>;

    @Action(UserAction.GetUsers)
    getUsersAction: () => Promise<void>;

    @Action(UserAction.UpdateUser)
    updateUser: (u: UserDto) => Promise<void>;

    @Action(UserAction.AddUser)
    addUserAction: (u: UserDto) => Promise<void>;

    async mounted() {
        await this.getUsersAction();
    }

    public async addUser(model: UserDto) {
        await this.addUserAction(model);

        this.showModal = false;
    }

    public async submit(model: UserDto) {
        this.selectedUser = {};

        await this.updateUser(model);
    }

    get canDelete() {
        return true;
    }

    get userSelected() {
        return Object.keys(this.selectedUser).length;
    }
    
    private setSelectedUser(user: UserDto): void {
        this.selectedUser = user;
    }
}
