<script setup>

  import Banner from '../components/Banner.vue';
  import HomeBrands from '@/components/HomeBrands.vue';
  import HomeCategories from '@/components/HomeCategories.vue';
  import HomeOffers from '@/components/HomeOffers.vue';

</script>

<template>
  <main>
    <body>
      <div>

        <div class="backgroundcolour uk-margin-large-bottom">
          <!-- Banner -->
          <!-- Tabla ofertas -->
          <h1>Ofertas del día</h1>
            <Banner />
        </div>

        <div>
          <h1>Busca según tu marca favorita</h1>
            <!-- Famous brand -->
            <!-- < HomeBrand />  -->
            <HomeBrands />

        </div>
        <div>
          <h1> Destacados </h1>
          <HomeOffers />

        </div>

        <div>
          <!-- Popular Categories. -->
          <h1> Popular Categories</h1>
          <HomeCategories/>


        </div>

        <div>

            <!-- Home Historial  -->
        </div>
        <div>
          <!-- Categories -->
        </div>
        <div>

            <!-- General Description -->

        </div>
      </div>
    </body>
  </main>
</template>

<style>

  .backgroundcolor {

    background-color: rgba(220, 220, 220, 0.968);
  }

</style>