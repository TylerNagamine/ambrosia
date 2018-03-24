import Vue from 'vue';
import { UserAction, UserState } from '../../store/user';
import { UserDto } from '../../models/Ambrosia';

export default Vue.extend({
    data() {
        return {
            showModal: false,
            selectedUser: {} as UserDto,
        };
    },
    computed: {
        users: function() {
            return this.$appStore.state.user.users;
        },
        userSelected: function() {
            return Object.keys(this.selectedUser).length;
        },
    },
    methods: {
        addUser: async function(model: UserDto) {
            await this.$appStore.dispatch(UserAction.AddUser, model);

            this.showModal = false;
        },
        setSelectedUser: function(user: UserDto) {
            this.selectedUser = user;
        },
        submit: async function(model: UserDto) {
            this.selectedUser = {};

            await this.$appStore.dispatch(UserAction.UpdateUser, model);
        },
    },
    async mounted() {
        await this.$appStore.dispatch(UserAction.GetUsers);
    }
});
