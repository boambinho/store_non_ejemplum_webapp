<script setup>
import { ref } from 'vue';
// import countries from 'countries-list';

// Country phone number

// const countryOptions = Object.defineProperties(countries).map(([code, country]) => {
//     return '<option value="${code}">${country.name} (+${country.phone})</option>';
// })

const passwordVisible = ref(false);
const confirmPasswordVisible = ref(false);

const password = ref('');
const confirmPassword = ref('');

const passwordsMatch = ref(true);

const togglePasswordVisibility = () => {
    passwordVisible.value = !passwordVisible.value;
};

const toggleConfirmPasswordVisibility = () => {
    confirmPasswordVisible.value = !confirmPasswordVisible.value;
};

const validatePasswords = () => {
    passwordsMatch.value = password.value === confirmPassword.value;
}

const handleSubmit = (event) => {
    validatePasswords();
    if(!passwordsMatch.value) {
        event.preventDefault();
        alert('Las contraseñas no coinciden.');
    }
};

</script>

<template>

    <div class="uk-grid uk-flex uk-flex-center uk-margin-large-top">
        <form class="uk-width-1-2@s uk-width-1-2@m uk-width-1-3@l" @submit="handleSubmit">

            <input class="uk-input uk-margin-small-bottom" type="text" placeholder="Introduzca su nombre de usuario" required>
            <div class="uk-inline uk-margin-small-bottom uk-width-1-1">
                <input class="uk-input" :type="passwordVisible ? 'text' : 'password'" placeholder="Introduzca su contraseña" v-model="password" required>
                    <button type="button" class="uk-form-icon uk-form-icon-flip" @click="togglePasswordVisibility">
                        <span v-if="passwordVisible" uk-icon="icon: eye-slash"></span>
                        <span v-else uk-icon="icon: eye"></span>
                    </button>
            </div>
            <div class="uk-inline uk-margin-small-bottom uk-width-1-1">
                <input class="uk-input" :type="confirmPasswordVisible ? 'text' : 'password'" placeholder="Introduzca nuevamente su contraseña " v-model="confirmPassword" required>
                    <button type="button" class="uk-form-icon uk-form-icon-flip" @click="toggleConfirmPasswordVisibility">
                        <span v-if="confirmPasswordVisible" uk-icon="icon: eye-slash"></span>
                        <span v-else uk-icon="icon: eye"></span>
                    </button>
            </div>
            <input class="uk-input uk-margin-small-bottom" type="email" placeholder="Introduzca su correo electrónico" required>
            <input class="uk-input uk-margin-small-bottom" type="email" placeholder="Confirmar correo elctrónico" required>
            <input class="uk-input" type="tel" placeholder="Introduzca su número de teléfono" required>

            <div>
                <button class="uk-button uk-width-1-1 uk-margin-bottom uk-margin-top" type="submit"> Registrarse </button>
            </div>


        </form>
    </div>
</template>