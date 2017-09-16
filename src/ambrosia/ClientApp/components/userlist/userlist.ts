import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { UserDto } from '../../models/Ambrosia';

@Component({
    name: 'user-list',
})
export default class UserListComponent extends Vue {
    @Prop({ default: [] })
    users: UserDto[];

    private handleClick(user: UserDto): void {
        this.$emit('clicked', user);
    }
}
