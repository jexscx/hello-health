<template>
  <div class="pt-10 flex flex-col gap-8">
    <QuestionItem
      v-for="question in questions"
      :key="question.id"
      :selected="question.isSelected"
      @click="() => toggleSelected(question)"
    >
      <span class="max-w-full text-lg break-words">{{
        question.text
      }}</span></QuestionItem
    >
  </div>
</template>

<script setup lang="ts">
import { Question } from "~~/utils/models";

const { params } = useRoute();

const questions = ref<Question[]>();

onBeforeMount(() => {
  // Retrieve local storage, filter out unselected questions, deselect all questions
  const json = localStorage.getItem(params.slug.toString());
  if (!json) return;
  questions.value = JSON.parse(json) as Question[];
  questions.value = questions.value.filter((question) => question.isSelected);
  questions.value.forEach((question) => (question.isSelected = false));
});

function toggleSelected(question: Question) {
  question.isSelected = !question.isSelected;
}
</script>
