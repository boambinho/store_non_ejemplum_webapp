<script>

</script>

<template>

    <div class="uk-container uk-margin-top login-container uk-margin-bottom">
        <div class="uk-flex uk-flex-center uk-flex-middle uk-height-viewport">

            <form class="uk-card uk-card-default uk-card-body uk-width-1-3">
                <h3 class="uk-card-title uk-text-center">Login</h3>

                <div class="uk-margin">
                    <label class="uk-form-label" for="username"> Username:</label>
                    <div class="uk-form-controls">
                        <input class="uk-input" id="username" type="text" v-model="username" placeholder="Enter your username">
                    </div>
                </div>

                <div class="uk-margin">
                    <label class="uk-form-label" for="password"> Password:</label>
                    <div class="uk-form-controls">
                        <input class="uk-input" id="password" type="password" v-model="password" placeholder="Enter your password">
                    </div>

                    <div class="uk-margin">
                        <button class="uk-button uk-botton-success uk-width-1-1" @click.prevent="login">LOGIN</button>

                    </div>
                </div>
            </form>


        </div>

    </div>


</template>

<style>

    .login-container{

        background-color: rgba(185, 186, 186, 0.21)
    }

</style>