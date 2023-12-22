<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Banner from './components/Banner.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';


</script>

<template>

  <header>
    <Banner />
    <Navbar />
  </header>

  <body>

    <RouterView></RouterView>

  </body>

<footer>

    <Footer />
</footer>
  <!-- <RouterView /> -->
</template>

