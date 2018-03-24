import Vue from 'vue';

import { UserDto } from '../../models/Ambrosia';

export default Vue.extend({
    name: 'user-list',
    // props: ['allowDelete'],
    props: {
        allowDelete: {
            default: false,
            type: Boolean,
        },
        users: {
            default: [],
            type: Array,
        },
    },
    methods: {
        deleteUser: function(user: UserDto) {
            if (this.allowDelete) {
                this.$emit('delete', user);
            }
        },
        handleClick: function(user: UserDto) {
            this.$emit('clicked', user);
        }
    },
});
