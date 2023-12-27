<script setup>

  import Banner from '../components/Banner.vue';
  import HomeBrands from '@/components/HomeBrands.vue';

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

            <!-- Home Historial  -->

        </div>

        <div>
          <!-- SubBarHome -->
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