import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            activeLink: '',
        };
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            (<any>vm).activeLink = to.path;
        });
    },
    beforeRouteUpdate (to, from, next) {
        (<any>this).activeLink = to.path;
        next();
    },
});
