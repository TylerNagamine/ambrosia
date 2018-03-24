import Vue from 'vue';

import { UserDto, UserDtoRole } from '../../models/Ambrosia';

export default Vue.extend({
    name: 'user-editor',
    data() {
        return {
            model: {} as UserDto,
        };
    },
    computed: {
        roleOptions: function() {
            const options: string[] = [];

            for (const role in UserDtoRole) {
                options.push(role);
            }
    
            return options;
        }  
    },
    props: {
        initialModal: {
            default: {},
            type: Object,
        },
        title: {
            default: '',
            type: String,
        },
    },
    methods: {
        handleClick: function() {
            this.$emit('submit', this.model);
        },
    },
    mounted() {
        // this.handleModelChange(this.initialModel, undefined);
    },
});
