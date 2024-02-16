<script setup>

const defaultEr=()=>{
    localStorage.setItem('ListType' , 'popular');
    localStorage.setItem('ScreenType' , "movie");
}
</script>
<template>
    <nav id="nev_bar" class="md:flex md:flex-row md:justify-around md:items-center w-ful h-fit p-3  sticky top-0 z-10">
        <router-link :to="{name: 'defaultlist' , props:{page:2,screen:'tv', type:'popular'}}" @click="defaultEr()" >
            <div class="site_name flex flex-row items-center">
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
        <div class="search">
            <div
                class="form rounded-xl text-black bg-white pr-2 pl-3 outline-offset-2 outline-blue-500 focus-within:outline focus-within:outline-2 flex flex-row items-center">
                <input type="text" class="p-1 focus:outline-none" placeholder="Search By Title">
                <span class="material-symbols-outlined">
                    search
                </span>
            </div>
        </div>
    </nav>
</template>
<style scoped>
.site_name {
    color: blueviolet;
}
</style>