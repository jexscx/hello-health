<template>
  <div class="flex flex-col items-center w-full">
    <div class="flex flex-col w-4/5">
      <div>
        <span class="text-purple-900/70"
          >Agenda > Afspraak >
          <span class="text-purple-900">Vragen bedenken</span></span
        >
        <h1 class="text-4xl font-bold text-purple-900 pb-8">Vragen bedenken</h1>
      </div>
      <div class="flex flex-col">
        <span class="text"
          >Hieronder staan een aantal vragen die je kunt stellen.</span
        >

        <span class="text">Je kun ook je eigen vragen toevoegen</span>
      </div>
      <div>
        <CustomInput @add="addQuestion($event)" />
      </div>
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
      <div class="grid pt-8">
        <button class="btn-primary-purple" @click="saveAndContinue()">
          Opslaan
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";

const { params } = useRoute();

onBeforeMount(() => {
  const json = localStorage.getItem(params.slug.toString());
  if (!json) return;
  questions.value = JSON.parse(json) as Question[];
});

function toggleSelected(question: Question) {
  question.isSelected = !question.isSelected;
  console.log(questions);
}

function addQuestion(text: string) {
  questions.value.unshift({
    id: Date.now(),
    text,
    isSelected: true,
  });
}

function saveAndContinue() {
  if (typeof params.slug !== "string") {
    throw Error("Single slug param must be provided");
  }
  localStorage.setItem(params.slug, JSON.stringify(questions.value));
  navigateTo({
    path: `/appointment/${params.slug}`,
  });
}

interface Question {
  id: number;
  text: string;
  isSelected: boolean;
}
const questions: Ref<Question[]> = ref([
  {
    id: 0,
    text: "Uit welke behandelingen kan ik kiezen?",
    isSelected: false,
  },
  { id: 1, text: "Welke behandeling raadt u aan?", isSelected: false },
  {
    id: 2,
    text: "Waarom wordt deze behandeling gekozen?",
    isSelected: false,
  },
  { id: 3, text: "Mag ik wat bedenktijd?", isSelected: false },
]);
</script>
