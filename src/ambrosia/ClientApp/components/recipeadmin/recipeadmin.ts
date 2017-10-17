import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    components: {
        RecipeFormComponent: require('../recipeform/recipeform.vue'),
    },
})
export default class RecipeAdminComponent extends Vue {
    async mounted() {
    }
}
