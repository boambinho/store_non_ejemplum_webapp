<script setup>

  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';

    const categories = ref([
        {id: 1, name: 'Ropa deportiva' },
        {id: 2, name: 'Pantalones' },
        {id: 3, name: 'Polerones' },
        {id: 4, name: 'Ropa interior' },
        {id: 5, name: 'Calzado' },
        {id: 6, name: 'Accesorios' },
        {id: 7, name: 'Gafas' },
        {id: 8, name: 'Ropa Formal' },
        {id: 9, name: 'Pijamas' },
        {id: 10, name: 'Camisas' },
        {id: 11, name: 'Verano' },
        {id: 12, name: 'Invierno' }
    ])


</script>

<template>

  <div class="uk-container-expand uk-flex uk-flex-center uk-padding">

        <div class="uk-container uk-width-1-1 uk-margin-bottom">

          <!-- Rectangle container at the top -->
          <div class="uk-grid uk-grid-small uk-grid-collapse uk-flex uk-flex-wrap uk-flex-center uk-background-secondary uk-padding-small uk-height-match">
            <!-- Add content for the rectangle container -->

            <!-- 12 squares representing categories -->
              <div class="uk-width-1-3@s uk-width-1-2@m uk-flex uk-flex-wrap uk-flex-center">

                <a class="uk-card uk-card-default uk-flex uk-flex-wrap uk-padding-small" v-for="category in categories" :key="category.id">
                  {{  category.name }}
                </a>

              </div>

            </div>
        </div>
    </div>
</template>

<style>


</style>
