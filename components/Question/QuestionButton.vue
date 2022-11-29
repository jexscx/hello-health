<template>
    <div class="flex flex-col gap-2 mt-4">
        <div v-for="question of questions" :key="question">
            <button class="outline outline-1 outline-orange-300 rounded w-full h-12">
                <p class="text-left pl-4">{{ question }}</p>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    questions: string[];
}

defineProps<Props>();
</script>