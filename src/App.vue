<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Navbar from './components/Navbar.vue';
import FooterSection from './components/FooterSection.vue';



</script>

<template>

  <header>
    <Navbar />
  </header>
  <main class="app-container">
    <body class="app-container">

      <RouterView></RouterView>

    </body>
  </main>
<footer>

  <FooterSection/>

</footer>
  <!-- <RouterView /> -->
</template>

<style>

.app-container{
    margin-left: 10px;
    margin-right: 10px;
    background-color: rgb(233, 227, 227)
}

</style>

