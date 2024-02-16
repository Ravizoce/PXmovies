<script setup>
import { onMounted } from 'vue';

var idvar = 0;

const Skills = [
    {
        name: "html",
        slug: "html",
        alt: "html logo.img",
        path: "src/assets/icons/icon-html.png",
        active: false,
    },
    {
        name: "css",
        slug: "css",
        alt: "css.img",
        path: "src/assets/icons/icon-css.png",
        active: false,
    },
    {
        name: "java script",
        slug: "java-script",
        alt: "javascript logo.img",
        path: "src/assets/icons/icon-js.png",
        active: false,
    },
    {
        name: "php",
        slug: "php",
        alt: "Php logo.img",
        path: "src/assets/icons/icon-php.png",
        active: false,
    },
    {
        name: "laravel",
        slug: "laravel",
        alt: "laravel logo.img",
        path: "src/assets/icons/icon-laravel.png",
        active: false,
    },
    {
        name: "json",
        slug: "json",
        alt: "jason logo.img",
        path: "src/assets/icons/icon-json.png",
        active: false,
    },
    {
        name: "c",
        slug: "c",
        alt: "c logo.img",
        path: "src/assets/icons/icon-c.png",
        active: false,
    },
    {
        name: "Ajax",
        slug: "ajax",
        alt: "ajax logo.img",
        path: "src/assets/icons/icon-ajax.png",
        active: false,
    },
    {
        name: "jquery",
        slug: "jquery",
        alt: "jquery logo.img",
        path: "src/assets/icons/icon-jquery.png",
        active: false,
    },
    {
        name: "sql",
        slug: "sql",
        alt: "mysql logo.img",
        path: "src/assets/icons/icon-sql.png",
        active: false,
    },
    {
        name: "vue-js",
        slug: "vuejs",
        alt: "vuejs logo.img",
        path: "src/assets/icons/icon-vue.ico",
        active: false,
    },
    {
        name: "quasar",
        slug: "quasar",
        alt: "quasar logo.img",
        path: "src/assets/icons/icon-quasar.png",
        active: false,
    },
    {
        name: "pinia",
        slug: "pinia",
        alt: "pinia logo.img",
        path: "src/assets/icons/icon-pinia.svg",
        active: false,
    },
    {
        name: "git",
        slug: "git",
        alt: "git logo.img",
        path: "src/assets/icons/icon-git.png",
        active: "true",
    },
]
var i = 1;

const div_getter = (id) => {
    return document.getElementById(id);
}
onMounted(() => {
    for (i = 14; i > 1; i--) {
        div_getter("slider-item-" + i).classList.toggle("hidden")
    }
    div_getter("slider-item-" + 1).classList.toggle("translate-x-[-50rem]");
})

const slide = () => {
    div_getter("slider-item-" + i).classList.toggle("hidden");
    div_getter("slider-item-" + i).classList.toggle("translate-x-[-50rem]");
    if (i == 14) {
        i = 0;
    }
    div_getter("slider-item-" + ++i).classList.toggle("hidden");
    div_getter("slider-item-" + i).classList.toggle("translate-x-[-50rem]");

}
</script>
<template>
    <div id="custom-controls-gallery" class="w-full" data-carousal="slide">
        <div class="relatrive border overflow-hidden max-w-full max-h-96">
            <div v-for="skill in Skills" :key="skill.name" :id="'slider-item-' + ++idvar"
                class=" flex relative h-96 justify-center left-[50rem] duration-[10000ms] ease-in-out">
                <img  class="max-w-96 absolute block " :src="skill.path"
                    alt="">
            </div>
        </div>
        <div class="flex justify-center">
            <button type="button"
                class="text-white bg-gradient-to-r mt-3 from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                @click="slide">Red</button>
        </div>
    </div>
</template>