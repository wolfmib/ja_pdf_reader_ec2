<template>
  <div id="app">
    <v-app>
      <v-main>
        <router-link to="/one">Component One</router-link>
        <router-link to="/two">Component Two</router-link>
        <!-- Your router-view will render the matched component here -->
             hihi
        <router-view> gg </router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>


export default {
  name: 'App',
};

</script>

