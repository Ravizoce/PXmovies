import { ref, onMounted } from "vue";
import { defineStore } from "pinia";

export const useMovieStore = defineStore('useMovieStore', () => {
    //const MainKey = 'b032f78175af43ac7d265e142f89f6cf';
    const MainKey = import.meta.env.VITE_THIRD_PARTY_KEY;;
    const baseurl = "https://api.themoviedb.org/3/";
    const key = '?api_key='+MainKey;
    const secondkey = '&api_key='+MainKey;

    const type = {
        1: "movies",
        2: "tvshow",
    }

    const Popular = ref({});
    const search = ref({});

    const genres = ref({})
    const MovieDetail = ref({});
    const MovieDetailImages = ref({});
    const CriditHolders = ref({});
    const Recomendations = ref({});

    onMounted(async () => {
        try {
            let TdataGetter = await fetch(baseurl + "genre/tv/list" + key);
            let MdataGetter = await fetch(baseurl + "genre/movie/list" + key);
            let TjasonData = await TdataGetter.json();
            let MjasonData = await MdataGetter.json();
            genres.value = { movie: MjasonData, tv: TjasonData };
        } catch (error) {
            console.error("error", error);
        }
    })
    const listsetter = async (type, catagory, page) => {
        try {
            let dataGetter = await fetch(baseurl + type + "/" + catagory + "?page=" + page.toString() + secondkey);
            let jsonData = await dataGetter.json();
            Popular.value = jsonData;
        } catch (error) {
            console.error("error", error);
        }
    }
    const Detailsloader = async (id, type) => {
        try {
            let detailGetter = await fetch(baseurl + type + "/" + id + key);
            let jsonData = await detailGetter.json()
            MovieDetail.value = jsonData;
            Imageloader(id, type);
            Criditloader(id, type);
            RecomendationsLoader(id, type);
        }
        catch (error) {
            console.error("error", error);
        }
    }
    const Imageloader = async (id, type) => {
        try {
            let ImageGetter = await fetch(baseurl + type + "/" + id + "/images" + key);
            let jsonData = await ImageGetter.json()
            MovieDetailImages.value = jsonData;
        }
        catch (error) {
            console.error("error", error);
        }
    }
    const Criditloader = async (id, type) => {
        try {
            let CriditGetter = await fetch(baseurl + type + "/" + id + "/credits" + key);
            let jsonData = await CriditGetter.json()
            let tempStore = await jsonData;
            CriditHolders.value = await tempStore.cast.slice(0, 10);
        }
        catch (error) {
            console.error("error", error);
        }
    }
    const RecomendationsLoader = async (id, type) => {
        try {
            let RecomendationsGetter = await fetch(baseurl + type + '/' + id + '/recommendations' + key);
            let jsonData = await RecomendationsGetter.json();
            Recomendations.value = jsonData;
        }
        catch (error) {
            console.error("error", error);
        }
    }

    const SearchLoader = async (type , query) => {
        try {
            let SearchGetter = await fetch(baseurl + "search/" + type + '?query=' + query  + secondkey);
            let jsonData = await SearchGetter.json();
            search.value = jsonData;
        }
        catch (error) {
            console.error("error", error);
        }
    }
    return {
        Popular,search,genres, MovieDetail, MovieDetailImages, CriditHolders, Recomendations, listsetter, Detailsloader,SearchLoader
    }
})
