<script setup>
import SignIn from '@/components/Dailoge.vue';
import registerform from '../Form/registerform.vue';
</script>
<template>
    <div>
        <SignIn trigger="Sign In">
            <template #Body>
                <registerform />
            </template>
        </SignIn>
    </div>
</template>
<style>
</style>