<template>
    <div class="flex flex-col gap-2 mt-4">
        <div v-for="(question, i) of questions" :key="question">
            <button :id="i.toString()" v-if="isActive" @click="active()"
                class="outline outline-1  bg-orange-300 outline-orange-300 rounded w-full h-12">
                <p class="text-left font-bold text-white pl-4">{{ question }}</p>
            </button>
            <button @click="active()" :id="i.toString()" v-else
                class="outline outline-1 outline-orange-300 rounded w-full h-12">
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
const isActive = useState('isActive', () => false);
const active = () => {
    isActive.value = !isActive.value;
}
</script>