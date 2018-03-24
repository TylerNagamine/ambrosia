import Vue from 'vue';

import { UserDto } from '../../models/Ambrosia';

export default Vue.extend({
    props: ['user'],
    name: 'user-detail',
});
