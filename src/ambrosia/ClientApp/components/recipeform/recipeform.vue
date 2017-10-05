<template>
    <div>
        <h1>Edit {{ recipeName }}</h1>

        <div class="form-group">
            <label>Name</label>
            <input class="form-control" v-model="recipeName" placeholder="Your Recipe" />

            <label>Description</label>
            <textarea class="form-control" v-model="description" placeholder="Description" />

            <label>Cook time</label>
            <input class="form-control" v-model="cookTime" placeholder="Cook time" />
        </div>

        <div class="form-group">
            <h2>Steps</h2>
            <template v-for="(step, $index) in steps">
                <label :key="$index">Step {{ $index + 1 }}</label>
                <input 
                    class="form-control"
                    :key="$index"
                    :value="formState.steps[$index]"
                    @input="handleEditStepInput($index, $event)" />
            </template>
            <button class="btn btn-primary" @click="addStep">Add Step</button>
        </div>
    </div>
</template>

<script src="./recipeform.ts"></script>
