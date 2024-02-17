<script setup>
import { search, SearchUpdater } from '@/assets/Js/getGenres';
import { ref, watch } from 'vue';
import { useMovieStore } from '@/stores/movieapi';

const movies = useMovieStore();

const defaultEr = () => {
    localStorage.setItem('ListType', 'popular');
    localStorage.setItem('ScreenType', "movie");
}
var searchfocus = ref(false);
var ScreenType = ref('movie')
watch((search), (newsearch) => {
    movies.SearchLoader(ScreenType.value, newsearch);
    // console.log(search.value);
})

watch(ScreenType, (newScreenType) => {
    // console.log("ehh");
    movies.SearchLoader(newScreenType, search.value);
})


const options = [
    {
        name: 'movie',
        type: 'movie'
    },
    {
        name: 'tv-show',
        type: 'tv'
    }
]
</script>
<template>
    <nav id="nev_bar" class="md:flex md:flex-row md:justify-between md:items-center w-ful h-fit p-3  sticky top-0 z-10">
        <router-link :to="{ name: 'defaultlist', props: { page: 2, screen: 'tv', type: 'popular' } }" @click="defaultEr()"
            class="md:ml-10 p-2">
            <div class="site_name flex flex-row items-center ">
                <div class="logo flex justify-center p-1 ">
                    <span class="material-symbols-outlined ">
                        live_tv
                    </span>
                </div>
                <div class="Title uppercase text-[30px]">
                    <strong>px</strong>movies
                </div>

            </div>
        </router-link>
        <div class="md:mr-32 w-[65vh]">
            <div class="relative ">
                <div class="transition-all outline duration-1000 ease-in-out h-auto rounded-lg bg-gray-800 opacity-100 outline-1 outline-offset-2 outline-slate-100 absolute right-0 top-[-25px] focus-within:h-fit"
                    @focusin="searchfocus = true" @focusout="searchfocus = false">
                    <div class="pr-2 pl-3 flex flex-row items-center rounded-lg bg-black">
                        <input type="text" class="p-1 text-[23px] w-full focus:outline-none bg-transparent" v-model="search"
                            placeholder="Search By Title">
                        <span class="material-symbols-outlined">
                            search
                        </span>
                    </div>
                    <div class="opacitytransision mt-[1px] flex flex-col justify-center items-center"
                        :class="{ 'opacity-0 translate-y-[-110px]': ((!searchfocus) && search == '') }"
                        v-if="(searchfocus || search != '')">
                        <div class="text-[13px] flex flex-row text-white underline uppercase self-start">
                            <div class="mr-1 ml-1 p-[3px] rounded-md cursor-pointer w-fit bg-black"
                                v-for="option in options" @click="ScreenType = option.type" :class="{'bg-green-600':(ScreenType == option.type)}">{{ option.name }}</div>
                        </div>
                        <div class="scroll-bar pb-1 pl-[2px] h-fit max-h-[70vh] w-[65vh]"
                            :class="{ 'h-0 hidden': (search == '') }">
                            <div v-for="movie in movies.search.results" class="bg-black rounded-md">
                                <RouterLink :to="{ name: 'about', params: { screen: ScreenType, id: movie.id } }"
                                    class="hover:bg-black hover:rounded-md m-1 p-1 flex flex-row items-center"
                                    @click="SearchUpdater('')">
                                    <div class="head h-30 w-20 basis-[20%] m-1">
                                        <img class="rounded-md h-30 w-20 border border-gray-300 text-[15px]"
                                            :src="'https://image.tmdb.org/t/p/w300/' + movie.poster_path"
                                            :alt="movie.title ? movie.title : movie.name" draggable="false">
                                    </div>
                                    <div class="body  text-pretty basis-[80%] flex flex-col  m-1  justify-start">
                                        <div class="title text-[18px] flex justify-start text-left" v-if="movie.title">
                                            {{ movie.title }}
                                        </div>
                                        <div class="title text-[18px] flex justify-start text-left" v-if="movie.name">
                                            {{ movie.name }}
                                        </div>
                                        <div class="description flex text-[13px] mt-3">
                                            <div class="rating flex items-center ">
                                                <span class="material-symbols-outlined text-[20px] mb-1 mr-1">
                                                    star
                                                </span>{{ movie.vote_average }}
                                            </div>
                                            <div class="ml-10 flex items-center">
                                                <span class="material-symbols-outlined text-[20px] mr-1">
                                                    radio_button_unchecked
                                                </span>
                                                {{ movie.release_date }}
                                            </div>
                                        </div>
                                    </div>
                                </RouterLink>
                            </div>
                        </div>
                        <div class="mt-[2px] rounded-lg bg-slate-800 w-full text-black">
                            <strong>Minimun 3 characters required</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<style scoped>
.site_name {
    color: blueviolet;
}

.scroll-bar {
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 2px;
    }

    &::-webkit-scrollbar-track {
        /* background-color: none; */
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #007bff;
        border-radius: 5px;
    }
}

.opacitytransision {
    transition: opacity 700ms ease-in-out;
}
</style>