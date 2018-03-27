import Vue from 'vue';
import { UserAction, UserState } from '../../store/user';
import { UserDto } from '../../models/Ambrosia';

import UserDetail from '../userdetail/userdetail.vue';
import UserEditor from '../usereditor/usereditor.vue';
import UserList from '../userlist/userlist.vue';

export default Vue.extend({
    components: {
        UserDetail,
        UserEditor,
        UserList
    },
    data() {
        return {
            showModal: false,
            selectedUser: {} as UserDto,
        };
    },
    computed: {
        canDelete: function() {
            return true;
        },
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
        deleteUser: async function(user: UserDto) {
            await this.$appStore.dispatch(UserAction.DeleteUser);
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
