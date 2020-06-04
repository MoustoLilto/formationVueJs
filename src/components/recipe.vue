<template>
  <v-card
    class="mx-auto"
    v-show="name"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="picture"
    >
      <v-card-title>{{ name }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0" v-if="description">{{ description }}</v-card-subtitle>

    <v-card-text>
        <div>
            <span :class="ingredients.length > 0 ? 'strong' : 'noDisplay'">Ingrédients: </span> 
            <ul>
                <li v-for="(ingredient, index) in ingredients" :key="index"> {{ ingredient }}</li>
            </ul>
        </div>

        <div v-if="extended">
            <span :style="!instructions ? 'display:none' : ''" class="strong">Instructions: </span>
            <p>
                {{ instructions }}
            </p>
        </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="primary"
        raised
        @click="toogleExtend"
        v-if="!extended"
      >
        Expand
      </v-btn>
      <v-btn
        color="primary"
        outlined
        @click="toogleExtend"
        v-else
      >
        Collapse
      </v-btn>
      <v-spacer/>
      <v-btn class="mx-2" fab dark small color="secondary" @click="deleteRecipe(id)">
        <v-icon dark>mdi-minus</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name: 'recipes',
    props: {
      id: {
        type: Number,
        required: true,
      },
      name: {
          type: String,
          required: false,
      },
      picture: {
          type: String,
          required: true,
      },
      description: {
          type: String,
          required: false,
      },
      ingredients: {
          type: Array,
          default: () => [],
          required: false,
      },
      instructions: {
          type: String,
          required: false,
      },
    },
    data() {
        return {
            extended: false,
        }
    },
    methods: {
        toogleExtend() {
            this.extended = !this.extended;
        },
        deleteRecipe(id) {
          this.$emit('deletedRecipe', id);
        },
    },
}
</script>

<style lang="scss">
    .strong{
        font-weight: bold;
    }
    .noDisplay{
        display: none;
    }
    ul, li {
        margin-left: 5px;
        padding-left: 0;
    }
</style>
