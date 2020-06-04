<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="6">
        <v-form
          ref="form"
          v-model="valid"
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="*Name"
            required
          />
          <v-text-field
            v-model="picture"
            label="*Picture url"
            required
          />
          <v-text-field
            v-model="description"
            :counter="100"
            :rules="textRules"
            label="Description"
          />
          <v-text-field
            v-model="instructions"
            :counter="100"
            :rules="textRules"
            label="Instructions"
          />
          <v-text-field
            v-model="flex"
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
            color="error"
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
            name: 'AVion',
            picture: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
            description: 'CECI est un test',
            ingredients: ['lolo', 'sisi', 'maria'],
            instructions: 'Faut prendre lolo, tu jettes sur sisi et tu frappes avec maria',
            flex: 4,
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

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          serviceRecipes.add({
            name: this.name,
            picture: this.picture,
            description: this.description,
            ingredients: this.ingredients,
            instructions: this.instructions,
            flex: this.flex,
          });
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