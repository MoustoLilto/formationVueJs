<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="https://dcassetcdn.com/design_img/10150/1680/1680_298517_10150_image.jpg"
          transition="scale-transition"
          width="80"
        />
        RECIPES
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/add" class="mx-2" fab dark small color="secondary">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
