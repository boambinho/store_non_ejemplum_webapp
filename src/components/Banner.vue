<script setup>

    const images = [
        { src: "/src/assets/img/pantalon1.jpeg" },
        { src: "/src/assets/img/pantalon2.jpeg" },
        { src: "/src/assets/img/polera1.jpeg" },
        { src: "/src/assets/img/polera2.jpeg" },
        { src: "/src/assets/img/poleron1.jpeg" },
        { src: "/src/assets/img/poleron2.jpeg" },
    ];

</script>

<template>

    <div class="uk-position-relative uk-visible-toggle uk-light uk-slider-container" tabindex="-1" uk-slider="center: true">

        <ul class ="uk-slider-items uk-width-1-5">
            <li v-for="(image, index) in images" :key="index">
                <div class="slider-item">
                <img :src="image.src" :alt="'img' + index" width="400" height="600">
                </div>
                <div>
                </div>
            </li>
        </ul>

        <a class="uk-position-center-left uk-position-small" href ="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small" href ="#" uk-slidenav-next uk-slider-item="next"></a>
    </div>

</template>

<style scoped>

</style>