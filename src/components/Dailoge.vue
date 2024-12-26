<script setup>
import { ref } from 'vue';
import { X } from 'lucide-vue-next';

const props = defineProps({
    trigger: {
        type: String,
        default: "Click"
    },
    title: {
        type: String,
        default: "Dailogue Heading/Title"
    }
});

const dialoge_trigger = ref(false);

</script>
<template>
    <div>
        <button
            class="uppercase p-2 text-sm hover:scale-105 duration-100 ease-in-out transition-all bg-green-600 text-blue-300 rounded-lg active:animate-bounce-click"
            @click="dialoge_trigger = !dialoge_trigger">
            {{ trigger }}
        </button>
        
    </div >
    <div class="dialgoe_container fixed w-full h-[100vh] top-0 left-0 flex justify-center items-center bg-gray-300/20" v-if="dialoge_trigger">
        <div class="dialoge z-50 bg-white/80 min-w-96 w-fit border-2 border-black rounded-lg" >
            <div class="diloge_header p-2">
                <div class="Heading flex justify-between">
                    <div class="p-1 pl-1">
                        <h1>{{ title }}</h1></br>
                        <h3>
                            <slot></slot>
                        </h3>
                    </div>
                    <div class="p-1 pr-3  ">
                        <button class="border-2 border-black rounded-lg hover:scale-105 duration-100 ease-in-out transition-all" @click="dialoge_trigger = false">
                            <X />
                        </button>
                    </div>
                </div>
                <hr class="border-2 border-red-500 "/>
            </div>
            <div class="diloge_Body p-3">
                <slot name="Body">Content of body</slot>
            </div>
            <div class="dialoge_footer p-3"></div>
        </div>
    </div>
</template>
<style></style>