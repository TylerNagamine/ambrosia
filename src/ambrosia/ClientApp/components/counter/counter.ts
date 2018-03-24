import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            currentcount: 0,
        };
    },
    methods: {
        incrementCounter(): void {
            this.currentcount++;
        },
    },
});
