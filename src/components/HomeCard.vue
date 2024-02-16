<script setup>
import { useMovieStore } from '@/stores/movieapi';
import { onMounted, ref, watch } from 'vue';
import { BGImageChanger } from '@/assets/Js/getGenres';
const movieStore = useMovieStore();
const emit = defineEmits(['pageEmitter']);
const prop = defineProps({
    page: {
        type: null,
        default: 1
    },
    screen: {
        type: null,
        default: 'movie'
    },
    type: {
        type: null,
        default: 'popular'
    }
});

onMounted(() => {
    // movieStore.listsetter(prop.screen, prop.type, prop.page);
    BGImageChanger('src/assets/bg.b54fb72f.jpg');
    emit('pageEmitter', movieStore.Popular.page,)
})

watch(
    () => movieStore.Popular.page,
    (newpage) => {
        emit('pageEmitter', newpage)
    }
)

// const getGenreName = (id) => {
//     const genres = prop.screen === 'movie' ? movieStore.genres.movie : movieStore.genres.tv;
//     const gen =  genres.genres.find((genre) => genre.id == id);
//     return gen.name;
// }
</script>
<template>
    <div class="flex flex-row flex-wrap w-[77%] mb-6">
        <div v-for="movie in movieStore.Popular.results"
            class="p-3 flex flex-wrap w-[22%] m-3 bg-black rounded-xl hover:bg-black hover:translate-y-[-5px] duration-100 ease-in-out">
            <RouterLink
                :to="{ name: 'about', params: { screen: prop.screen, type: prop.type, id: movie.id }, props: { screen: prop.screen, id: movie.id } }"
                class="hover:bg-black">
                <div class="poster_image mb-1 ">
                    <img class="rounded-md" :src="'https://image.tmdb.org/t/p/w300/' + movie.poster_path" alt="one"
                        draggable="false">
                </div>
                <div class="body">
                    <div class="title_wrapper flex items-center mr-1 justify-around">
                        <div class="title" v-if="movie.original_title">
                            {{ movie.original_title }}
                        </div>
                        <div class="title" v-if="movie.name">
                            {{ movie.name }}
                        </div>
                        <div class="reating p-2">
                            <span class="rounded-3xl bg-slate-900 p-1 text-[13px]">
                                {{ movie.vote_average }}
                            </span>
                        </div>
                    </div>
                    <!-- <div class="catagories flex flex-wrap">
                        <div class="m-2 flex justify-center text-[13px] p-1 rounded-xl bg-orange-900"
                            v-for="genre_id in movie.genre_ids">
                            {{ getGenreName(genre_id) }}
                        </div>
                    </div> -->
                </div>
            </RouterLink>
        </div>
    </div>
</template>