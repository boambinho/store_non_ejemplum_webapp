<script setup>

import { RouterLink } from 'vue-router';

 const brands = [
    {id: 1, image: "/src/assets/img/brands/adidas.png", alt: "Adidas" },
    { id: 2, image: "/src/assets/img/brands/gucci.png", alt:"Gucci"},
    { id: 3, image: "/src/assets/img/brands/lacoste.png", alt:"Lacoste"},
    { id: 5, image: "/src/assets/img/brands/northface.png", alt:"NorthFace"},
    { id: 6, image: "/src/assets/img/brands/Zara.png", alt:"Zara"}
 ]

</script>

<template>

    <div class="uk-light uk-margin uk-width-1-1">
        <div class="uk-grid uk-grid-medium uk-flex-center">
            <div v-for="brand in brands" :key="brand.id" class="uk-width-1-6">
                <div class="uk-card uk-card-default uk-card-body uk-margin-bottom uk-margin-top" style="height: 150px">
                    <!-- <router-link :to>
                        </ router-link> -->
                    <div class="uk-transition-toggle" tableindex="0">
                        <img :src="brand.image" :alt="brand.alt" class="uk-width-1-1" style="object-fit: cover; height: 100%;">
                        <div class="uk-transition-slide uk-overlay uk-overlay-default uk-position-cover">
                            <p class="uk-h4 uk-margin-remove"> {{ brand.alt }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style>

</style>

