<script setup>

    import { ref } from 'vue';

    const offers = ref([
        { id: 1 , src: ""},
        { id: 2, },
        { id: 3, },
    ]);

</script>

<template>

    <div uk-grid>

        <div class ="uk-width-1-1">
            <div class="uk-padding-small">

                <div class="uk-width-1-3 uk-card uk-card-default uk-card-body uk-child-width-expand">
                    {{ offers.offer }}
                </div>

            </div>

        </div>

    </div>

</template>