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

    public async submit(model: UserDto) {
        this.selectedUser = {};

        const returnedUser = await this.submitUser(model);

        const userIndex = this.usersList.findIndex(user => user.id === returnedUser.id);
        
        const usersCopy = [...this.usersList];
        usersCopy[userIndex] = returnedUser;
        this.usersList = usersCopy;
    }

    get userSelected() {
        return Object.keys(this.selectedUser).length;
    }
    
    private async getUsers(): Promise<void> {
        const response = await fetch('/api/user');
        const users: UserDto[] = await response.json();
        
        this.usersList = users;
    }
    
    private setSelectedUser(user: UserDto): void {
        this.selectedUser = user;
    }

    private async submitUser(user: UserDto): Promise<UserDto> {
        const response = await fetch('api/user', {
            body: JSON.stringify(user),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: 'PUT',
        });

        const returnedUser: UserDto = await response.json();

        return returnedUser;
    }
}
