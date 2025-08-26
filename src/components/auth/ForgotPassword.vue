<template>
    <ForgotPasswordForm
    v-if="state === 'forgotPassword'"
    @after-request="state = 'resetPassword'"    
    />
    <ResetPasswordForm
    v-if="state === 'resetPassword'"
    @after-reset="state = 'reset'"    
    />
    <template v-if="state === 'reset'">
        <v-alert 
            color="success" 
            class="mb-2"    
            >
            Senha alterada com sucesso!
        </v-alert>
        <v-btn type="submit" color="primary" size="large" block flat :to="{name:'login'}">Entrar</v-btn>
    </template>
</template>

<script setup>
import {ref} from 'vue';

const state = ref('forgotPassword');
</script>