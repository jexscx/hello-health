<template>
    <div class="flex flex-col gap-2 mt-4">
        <!-- The only reusable part of a button is how it looks. This is handled by it being a Tailwind component. -->
        <button class="btn-primary" @click="() => log('test')">lol werkt dit?</button>
    </div>
</template>

<script setup lang="ts">
// interface Props {
//     questions: string[];

// }

// defineProps<Props>();
// const isActive = useState('isActive', () => false);
// const active = () => {
//     isActive.value = !isActive.value;
// }

function log(message: string) {
    console.log(message);
}
</script>