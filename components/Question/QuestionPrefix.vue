<template>
    <div class="flex flex-col">
        <div>
            <h1 class="text-3xl font-bold">Goede vragen om te stellen</h1>
        </div>
        <div class="grid grid-cols-2 items-center">
            <h6 class="text-xl font-bold">Dr. Velden V.d. Linden</h6>
            <p class="text-base text-right tracking-wide">Psychologie</p>
        </div>
        <div class="w-1">
            <!-- <p>Hier staan een paar vragen die je kunt stellen.
                deze vragen zijn er om je op weg te helpen.
                Klik op om de vraag toe te voegen
                aan je vragenlijst.</p> -->
        </div>
        <QuestionButton
            :questions="['Uit welke behandelingen kan ik kiezen?', 'Welke behandeling raadt u aan?', 'Waarom wordt deze behandeling gekozen?', 'Mag ik wat bedenktijd?']">
        </QuestionButton>
    </div>
</template>