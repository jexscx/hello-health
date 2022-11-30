<template>
    <div class="flex flex-col max-w-md">
        <div>
            <h1 class="text-3xl font-bold">Suggestie vragen om te stellen</h1>
        </div>
        <div class="grid grid-cols-2 items-center">
            <h6 class="text-xl font-bold">Dr. Velden V.d. Linden</h6>
            <p class="text-base text-right tracking-wide">Psychologie</p>
        </div>
        <div class="flex flex-col">
            <p>Hier staan een paar vragen die je kunt stellen.</p>
            <p>Deze vragen zijn er om je op weg te helpen.</p>
            <p>Klik op de vraag om deze toe te voegen aan de lijst</p>
        </div>
        <QuestionButton :questions="questions">
        </QuestionButton>
    </div>
</template>

<script setup>
const questions = [
    'Uit welke behandelingen kan ik kiezen?', 'Welke behandeling raadt u aan?', 'Waarom wordt deze behandeling gekozen?', 'Mag ik wat bedenktijd?'

]
</script>