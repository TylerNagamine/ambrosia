import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Mutation, State } from 'vuex-class';

import {
    IndexedAction,
    RecipeFormMutation,
    RecipeFormIngredient,
    RecipeFormState,
} from '../../store/recipeform';

@Component
export default class RecipeFormComponent extends Vue {
    @State('recipeForm')
    formState: RecipeFormState;
    @Mutation(RecipeFormMutation.AddIngredient)
    addIngredient: () => void;
    @Mutation(RecipeFormMutation.AddStep)
    addStep: () => void;
    @Mutation(RecipeFormMutation.EditCookTime)
    editCookTime: (t: number) => void;
    @Mutation(RecipeFormMutation.EditDescription)
    editDescription: (d: string) => void;
    @Mutation(RecipeFormMutation.EditIngredient)
    editIngredient: (o: IndexedAction<RecipeFormIngredient>) => void;
    @Mutation(RecipeFormMutation.EditName)
    editName: (t: string) => void;
    @Mutation(RecipeFormMutation.EditPrepTime)
    editPrepTime: (t: number) => void;
    @Mutation(RecipeFormMutation.EditStep)
    editStep: (t: IndexedAction<string>) => void;
    @Mutation(RecipeFormMutation.RemoveIngredient)
    removeIngredient: (i: number) => void;
    @Mutation(RecipeFormMutation.RemoveStep)
    removeStep: (i: number) => void;

    get description(){ return this.formState.description; };
    set description(value: string) { this.editDescription(value); };

    get recipeName() { return this.formState.name || 'My Recipe' };
    set recipeName(value: string) { this.editName(value) };

    get steps() {
        return this.formState.steps;
    }

    private handleEditStepInput(index: number, e: any) {
        const model: IndexedAction<string> = {
            index: index,
            payload: e.target.value,
        }

        this.editStep(model);
    }
}
