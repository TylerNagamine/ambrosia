import Vue from 'vue';
import { MutationTree } from 'vuex';

import { RecipeFormIngredient, RecipeFormState } from './state';
import { RecipeFormMutation } from './mutation-types';

export interface IndexedAction<T> {
    index: number;
    payload: T;
}

function editName(state: RecipeFormState, name: string): void {
    state.name = name;
}

function editDescription(state: RecipeFormState, description: string): void {
    state.description = description;
}

function editCookTime(state: RecipeFormState, time: number): void {
    state.cookTime = time;
}

function editPrepTime(state: RecipeFormState, time: number): void {
    state.preparationTime = time;
}

function addStep(state: RecipeFormState): void {
    state.steps.push('');
}


function editStep(state: RecipeFormState, action: IndexedAction<string>): void {
    Vue.set(state.steps, action.index, action.payload);
}

function removeStep(state: RecipeFormState, index: number): void {
    state.steps.splice(index, 1);
}

function addIngredient(state: RecipeFormState): void {
    const newModel: RecipeFormIngredient = {
        description: '',
        group: '',
    };

    state.ingredients.push(newModel);
}

function editIngredient(state: RecipeFormState, action: IndexedAction<RecipeFormIngredient>): void {
    Vue.set(state.ingredients, action.index, action.payload);
}

function removeIngredient(state: RecipeFormState, index: number): void {
    state.ingredients.splice(index, 1);
}

export const mutations: MutationTree<RecipeFormState> = {
    [RecipeFormMutation.EditName]: editName,
    [RecipeFormMutation.EditDescription]: editDescription,
    [RecipeFormMutation.EditCookTime]: editCookTime,
    [RecipeFormMutation.EditPrepTime]: editPrepTime,
    [RecipeFormMutation.AddStep]: addStep,
    [RecipeFormMutation.EditStep]: editStep,
    [RecipeFormMutation.RemoveStep]: removeStep,
    [RecipeFormMutation.AddIngredient]: addIngredient,
    [RecipeFormMutation.EditIngredient]: editIngredient,
    [RecipeFormMutation.RemoveIngredient]: removeIngredient,
};
