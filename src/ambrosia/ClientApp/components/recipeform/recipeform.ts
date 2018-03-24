import Vue from 'vue';

import {
    IndexedAction,
    RecipeFormMutation,
    RecipeFormIngredient,
    RecipeFormState,
} from '../../store/recipeform';

export default Vue.extend({
    computed: {
        cookTime: {
            get: function(): string {
                return (this.$appStore.state.recipeForm.cookTime || 0).toString();
            },
            set: function(newValue: string): void {
                this.$appStore.commit(RecipeFormMutation.EditCookTime, newValue);
            },
        },
        description: {
            get: function(): string {
                return this.$appStore.state.recipeForm.description;
            },
            set: function(newValue: string): void {
                this.$appStore.commit(RecipeFormMutation.EditDescription, newValue);
            },
        },
        formState: function() {
            return this.$appStore.state;
        },
        prepTime: {
            get: function(): string {
                return (this.$appStore.state.recipeForm.preparationTime || 0).toString();
            },
            set: function(newValue: string): void {
                this.$appStore.commit(RecipeFormMutation.EditPrepTime, newValue);
            },
        },
        recipeDisplayName: {
            get: function(): string {
                return this.$appStore.state.recipeForm.name || 'My Recipe';
            },
            set: function(newValue: string): void { 
                this.$appStore.commit(RecipeFormMutation.EditName, newValue);
            },
        },
        recipeName: {
            get: function(): string {
                return this.$appStore.state.recipeForm.name;
            },
            set: function(newValue: string) {
                this.$appStore.commit(RecipeFormMutation.EditName, newValue);
            },
        },
        steps() {
            return this.$appStore.state.recipeForm.steps;
        },
        totalTime() {
            const { recipeForm } = this.$appStore.state;

            return (recipeForm.cookTime || 0) + (recipeForm.preparationTime || 0);
        },
    },
    methods: {
        handleEditStepInput(index: number, e: any) {
            const model: IndexedAction<string> = {
                index,
                payload: e.target.value,
            };

            this.$appStore.commit(RecipeFormMutation.EditStep, model);
        },
    },
});3
