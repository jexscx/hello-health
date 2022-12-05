<template>
  <div class="flex flex-col max-w-md">
    <div>
      <h1 class="h1">Vragen stellen</h1>
    </div>
    <div class="grid grid-cols-2 items-center">
      <span class="text-bold"> Dr. Velden V.d. Linden </span>
      <span class="text text-right">Psychologie</span>
    </div>
    <div class="w-full border-3px ring-1 my-4 ring-slate-400"></div>
    <div class="flex flex-col">
      <span class="text"
        >Hier staan een aantal vragen die je kunt stellen.</span
      >
      <span class="text"
        >Als je ze wilt stellen, klik je op de vraag, en word de vraag
        gemarkeerd.</span
      >
      <span class="text">Je kun ook je eigen vragen toevoegen</span>
    </div>
    <div>
      <CustomInput @add="addQuestion($event)" />
    </div>
    <div class="flex flex-col gap-4 py-4">
      <QuestionItem
        v-for="question in questions"
        :key="question.id"
        :selected="question.isSelected"
        @click="() => toggleSelected(question)"
        >{{ question.text }}</QuestionItem
      >
    </div>
    <div class="grid">
      <button
        class="btn-primary bg-sky-900 outline-sky-900 w-1/4 justify-self-end"
        @click="saveAndContinue()"
      >
        Ga verder
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { Appointment } from "~~/utils/models";

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
