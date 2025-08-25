<template>
    <v-alert v-if="feedbackMessage" color="error" class="mb-2">{{ feedbackMessage }}</v-alert>
    <v-form @submit.prevent="login">
        <v-row class="d-flex mb-3">
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">E-mail:</v-label>
                <v-text-field v-model="email" variant="outlined" hide-details color="primary"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Senha:</v-label>
                <v-text-field v-model="password" variant="outlined" type="password"  hide-details color="primary"></v-text-field>
            </v-col>
            <v-col cols="12" class="pt-0">
                <div class="d-flex flex-wrap align-center ml-n2">
                    <div class="ml-sm-auto">
                        <RouterLink to="/"
                            class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">Esqueceu sua senha?</RouterLink>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-btn type="submit" :loading="loading" color="primary" size="large" block   flat>Entrar</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script setup>
import { ref } from 'vue';
const checkbox = ref(true);
import axios from 'axios';

axios.defaults.withXSRFToken = true;
axios.defaults.withCredentials = true;


const email = ref('');
const password = ref('');
const feedbackMessage = ref('');
const loading = ref(false);


function login(){
    loading.value = true;
    feedbackMessage.value = '';
    axios.get('http://localhost:8000/sanctum/csrf-cookie')
        .then(()=>{
            axios.post('http://localhost:8000/api/login',{
                'email': email.value,
                'password': password.value
            })
            .catch(() => {
                feedbackMessage.value = 'Seu e-mail ou senha estão incorretos.'
            })
            .finally(() =>{
                loading.value = false;
            })
        })
}


</script>

