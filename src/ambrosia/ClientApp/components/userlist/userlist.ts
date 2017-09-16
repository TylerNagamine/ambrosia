import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { UserDto } from '../../models/Ambrosia';

@Component({
    el: '#user-list',
    props: ['users']
})
export default class UserListComponent extends Vue {
    users: UserDto[] = [];

    async mounted() {
        const response = await fetch('api/user');

        const users: UserDto[] = await response.json();

        this.users = users;
    }
}
