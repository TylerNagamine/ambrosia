import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { UserDto } from '../../models/Ambrosia';

@Component({
    name: 'user-detail',
})
export default class UserDetailComponent extends Vue {
    @Prop({ default: {} })
    user: UserDto;
}
