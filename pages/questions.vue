<template>
  <div class="flex flex-col max-w-md">
    <div>
      <h1 class="text-3xl font-bold">Suggestie vragen om te stellen</h1>
    </div>
    <div class="grid grid-cols-2 items-center">
      <p class="text-base text-left font-bold tracking-wide">
        Dr. Velden V.d. Linden
      </p>
      <p class="text-base text-right tracking-wide">Psychologie</p>
    </div>
    <div class="flex flex-col">
      <p>Hier staan een paar vragen die je kunt stellen.</p>
      <p>Deze vragen zijn er om je op weg te helpen.</p>
      <p>Klik op de vraag om deze toe te voegen aan de lijst</p>
    </div>
    <div class="flex flex-col gap-4 py-4">
      <QuestionItem
        v-for="question in questions"
        :key="question.id"
        :selected="question.isSelected"
        @click="() => toggleSelected(question)"
        >{{ question.content }}</QuestionItem
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";

function toggleSelected(question: Question) {
  question.isSelected = !question.isSelected;
  console.log(questions);
}

interface Question {
  id: number;
  content: string;
  isSelected: boolean;
}
const questions: Ref<Question[]> = ref([
  {
    id: 0,
    content: "Uit welke behandelingen kan ik kiezen?",
    isSelected: false,
  },
  { id: 1, content: "Welke behandeling raadt u aan?", isSelected: false },
  {
    id: 2,
    content: "Waarom wordt deze behandeling gekozen?",
    isSelected: false,
  },
  { id: 3, content: "Mag ik wat bedenktijd?", isSelected: false },
]);
</script>