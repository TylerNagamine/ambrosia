import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { UserDto, UserDtoRole } from '../../models/Ambrosia';

@Component({
    name: 'user-editor'
})
export default class UserEditorComponent extends Vue {
    @Prop({ default: {} })
    initialModel: UserDto;

    model: UserDto = {};

    mounted() {
        this.model = {
            role: UserDtoRole.User,
            ...this.initialModel,
        };
    }

    get roleOptions() {
        var options: string[] = [];

        for (const role in UserDtoRole) {
            options.push(role);
        }

        return options;
    }
}