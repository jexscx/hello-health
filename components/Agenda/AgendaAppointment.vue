<template>
    <div>
        <h2 class="text-2xl font-bold">{{ date }}</h2>
    </div>
    <div class="flex flex-row items-center gap-10">
        <div>
            <h5 class="mb-2 text-2xl font-bold">{{ time }}</h5>
        </div>
        <div href="#" class="flex items-center border rounded-lg shadow-md flex-row w-full">
            <div class="bg-rose-300 justify-self-auto h-32 rounded-tl rounded-bl w-5"></div>
            <div class="flex flex-col justify-between p-4">
                <h5 class="mb-2 text-2xl font-bold">{{ name }}</h5>
                <p class="font-normal tracking-wide">{{ department }}</p>
                <p class="font-normal tracking-wide">{{ steps }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    date: string;
    time: string;
    name: string;
    department: string;
    steps: string;
}

defineProps<Props>();
</script>