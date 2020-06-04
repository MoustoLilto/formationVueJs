<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="6">
        <v-form
          ref="form"
          v-model="valid"
        >
          <v-text-field
            v-model="recipe.name"
            :counter="10"
            :rules="nameRules"
            label="*Name"
            required
          />
          <v-text-field
            v-model="recipe.picture"
            label="*Picture url"
            required
          />
          <v-text-field
            v-model="recipe.description"
            :counter="100"
            :rules="textRules"
            label="Description"
          />
          <v-text-field
            v-model="recipe.instructions"
            :counter="100"
            :rules="textRules"
            label="Instructions"
          />
          <v-text-field
            v-model="recipe.flex"
            label="*Display flex"
            :rules="flexRules"
            required
          />

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Validate
          </v-btn>

          <v-btn
            color="secondary"
            class="mr-4"
            @click="reset"
          >
            Reset Form
          </v-btn>

          <v-btn
            color="warning"
            @click="resetValidation"
          >
            Reset Validation
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import serviceRecipes from '@/services/recipes.js';

  export default {
    name: 'addRecipe',
    data() {
        return {
            recipe: {},
            valid: true,
            textRules: [
                v => (v && v.length <= 100) || 'text must be less than 100 characters',
            ],
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            flexRules: [
                v => !!v || 'Flex is required',
                v => (v && !isNaN(v)) || 'flex must be a Number',
            ],
        };
    },
    mounted() {
        this.recipe = serviceRecipes.getById(this.$route.params.id);
    },
    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          serviceRecipes.modify(this.recipe);
          this.$router.push('/');
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>