<script setup>
import { onMounted } from 'vue';
// import {innner} from "@/assets/icons/loodingPng/inner"
import { BGImageChanger } from '@/assets/Js/getGenres';


onMounted(() => {
    var base_url = window.location.origin;
    BGImageChanger(base_url + '/src/assets/bg.b54fb72f.jpg');
    // emit('pageEmitter', movieStore.Popular.page,)
})
</script>
<template>
    <div class="flex justify-center align-middle items-center h-screen w-full"
        style="background-Image: url(src/assets/bg.b54fb72f.jpg)">
        <div class="flex justify-center align-middle items-center h-16 w-16">
            <img class="absolute object-cover" src="@/assets/icons/loodingPng/inner.png" alt="">
            <img class="absolute object-cover" src="@/assets/icons/loodingPng/outer.png" alt="">
        </div>
    </div>
</template>
<style></style>