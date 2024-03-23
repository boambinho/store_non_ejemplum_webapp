<script setup>

    import { ref } from 'vue';

    const categories = ref([
        {id: 1, name: 'Category 1' },
        {id: 2, name: 'Category 2' },
        {id: 3, name: 'Category 3' },
        {id: 4, name: 'Category 4' },
        {id: 5, name: 'Category 5' },
        {id: 6, name: 'Category 6' },
        {id: 7, name: 'Category 7' },
        {id: 8, name: 'Category 8' },
        {id: 9, name: 'Category 9' },
        {id: 10, name: 'Category 10' },
        {id: 11, name: 'Category 11' },
        {id: 12, name: 'Category 12' }
    ])


</script>

<template>
  <div class="uk-container-expand uk-flex uk-flex-center">

        <div class="uk-container uk-width-1-1 uk-margin-bottom">

          <!-- Rectangle container at the top -->
          <div class="uk-grid uk-grid-small uk-grid-collapse uk-flex uk-flex-wrap uk-flex-center">
            <!-- Add content for the rectangle container -->

            <!-- 12 squares representing categories -->
              <div class="uk-width-1-3@s uk-width-1-4@m">
                <div class="uk-card uk-card-default uk-height-1-1 uk-flex uk-flex-center uk-flex-middle">
                  <!-- Add content for category 1 -->
                  Category 1
                </div>
              </div>

            </div>
        </div>
    </div>
</template>

<style>
  .uk-card {
    /* Add any additional styling you need */
    /* For example, you may want to set a max-width to prevent the cards from becoming too wide */
    max-width: 100%; /* Adjust as needed */
  }
</style>
