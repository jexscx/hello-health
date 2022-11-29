<template>
    <button class="outline outline-1 outline-orange-300 rounded w-full h-12" @click="toggle()">
        <div class="flex flex-row justify-between mx-4 items-center">
            <h6 class="text-xl font-bold text-orange-300">{{ stepName }}</h6>
            <svg width="24" height="24" fill="none" stroke="#fdba74" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <use href=" /feather-sprite.svg#chevron-down" v-if="isOpen" />
                <use href=" /feather-sprite.svg#chevron-left" v-else />
            </svg>
        </div>
    </button>
    <div class="transition-all overflow-hidden" ref="content">
        <div class="flex flex-col gap-4 p-2">
            <div class="shadow-3xl rounded w-full h-12 flex flex-row justify-between items-center"
                v-for="substep of substeps" :key="substep">
                <p class="pl-4 text-base font-bold tracking-wide">{{ substep }}</p>
                <button class="pr-4">
                    <p class="text-base tracking-wide">Bekijken</p>
                </button>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
interface Props {
    stepName: string;
    substeps: string[];
}

const isOpen = useState('isOpen', () => false);
const content = ref<HTMLDivElement | null>(null);

const props = defineProps<Props>();
const toggle = () => {
    isOpen.value = !isOpen.value;
    if (content.value) {
        if (isOpen.value) {
            content.value.style.maxHeight = content.value?.scrollHeight + 'px';
        } else {
            content.value.style.maxHeight = '0px';
        }
    }
}

</script>
