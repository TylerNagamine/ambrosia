import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

import { UserDto, UserDtoRole } from '../../models/Ambrosia';

@Component({
    name: 'user-editor'
})
export default class UserEditorComponent extends Vue {
    @Prop({ default: () => {} })
    initialModel: UserDto;

    @Prop({ default: 'User Editor' })
    title: string;

    model: UserDto = {};

    mounted() {
        this.handleModelChange(this.initialModel, undefined);
    }

    @Watch('initialModel')
    handleModelChange(newModel: UserDto | undefined, oldModel: UserDto | undefined) {
        this.model = {
            role: UserDtoRole.User,
            ...newModel,
        };
    }

    private handleClick() {
        this.$emit('submit', this.model);
    }

    get roleOptions() {
        var options: string[] = [];

        for (const role in UserDtoRole) {
            options.push(role);
        }

        return options;
    }
}