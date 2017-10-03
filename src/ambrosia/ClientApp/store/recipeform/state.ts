export interface RecipeFormIngredient {
    description: string;
    group: string;
}

export interface RecipeFormState {
    name: string;
    cookTime?: number | undefined;
    description: string;
    ingredients: RecipeFormIngredient[];
    preparationTime?: number | undefined;
    steps: string[];
}

export const initialState: RecipeFormState = {
    name: '',
    cookTime: undefined,
    description: '',
    ingredients: [{
        description: '',
        group: '',
    }],
    preparationTime: undefined,
    steps: [''],
};
