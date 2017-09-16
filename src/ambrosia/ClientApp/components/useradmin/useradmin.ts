import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { UserDto } from '../../models/Ambrosia';

@Component({
    components: {
        UserListComponent: require('../userlist/userlist.vue'),
        UserDetailComponent: require('../userdetail/userdetail.vue'),
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
