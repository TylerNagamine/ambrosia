import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { UserDto } from '../../models/Ambrosia';

@Component({
    components: {
        UserEditorComponent: require('../usereditor/usereditor.vue'),
        UserDetailComponent: require('../userdetail/userdetail.vue'),
        UserListComponent: require('../userlist/userlist.vue'),
    }
})
export default class UserAdminComponent extends Vue {
    usersList: UserDto[] = [];
    selectedUser: UserDto = {};

    async mounted() {
        await this.getUsers();
    }

    private async getUsers(): Promise<void> {
        const response = await fetch('/api/user');
        const users: UserDto[] = await response.json();

        this.usersList = users;
    }

    private setSelectedUser(user: UserDto): void {
        this.selectedUser = user;
    }
}
