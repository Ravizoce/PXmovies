<script setup>

</script>
<template>
    <div>
        <form action="" class="flex items-center flex-col mr-16 ml-16">
            <div class="flex flex-col justify-center items-start mb-2">
                <label class="mr-1 text-sm" for="name">Name</label>
                <input class="border-2 border-black rounded-lg w-64 text-sm p-1" placeholder="Tiger johns" name="name" id="name"
                    type="text">
            </div>
            <div class="flex flex-col justify-center items-start mb-2">
                <label class="mr-1 text-sm" for="email">Email</label>
                <input class="border-2 border-black rounded-lg w-64 text-sm p-1" placeholder="example@gmail.com" name="email"
                    id="email" type="email">
            </div>
            <div class="flex flex-col justify-center items-start mb-2">
                <label class="mr-1 text-sm" for="email">password</label>
                <input class="border-2 border-black rounded-lg w-64 text-sm p-1" placeholder="" name="password"
                    id="password" type="text">
            </div>
            <div class="flex flex-col justify-center items-start mb-2">
                <label class="mr-1 text-sm" for="email">Conform password</label>
                <input class="border-2 border-black rounded-lg w-64 text-sm p-1" placeholder="" name="Conform password"
                    id="Conform password" type="text">
            </div>

            <div class="self-end mt-2">
                <button class="border-2 border-black rounded-lg p-2 text-sm hover:scale-105 duration-100 ease-in-out transition-all">Register</button>
            </div>
        </form>
    </div>
</template>
<style></style>