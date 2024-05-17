<script setup>

    import { ref } from 'vue';

    const offers = ([
        { id: 1, image: "/src/assets/img/offers/chaqueta.jpeg"},
        { id: 2, image: "/src/assets/img/offers/poleron1.jpeg"},
        { id: 3, image: "/src/assets/img/offers/poleron2.jpeg"},
    ]);

</script>

<template>

    <div uk-grid>

        <div class ="uk-width-1-1">
            <div class="uk-padding-small">

                <div class="uk-width-1-3 uk-card uk-card-default uk-card-body uk-child-width-expand">
                    {{ offers.image }}
                </div>

            </div>

        </div>

    </div>

</template>