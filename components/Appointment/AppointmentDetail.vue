<!-- to do: 
    - Text variabel maken
    - dropdown toggle
    - css status kleur
    - Dynamische content inladen -->

<template>
    <div class="flex flex-col space-y-3">
        <div>
            <h1 class="text-3xl font-bold">Afspraak details</h1>
        </div>
        <div class="grid grid-cols-2 items-end space-y-1 max-w-md">
            <h6 class="text-xl font-bold">Dr. Velden V.d. Linden</h6>
            <p class="text-base text-right tracking-wide">Psychologie</p>
            <div class="flex space-x-3">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <use href="/feather-sprite.svg#calendar" />
                </svg>
                <p class="text-base text-left tracking-wide">30 - 10 - 2022</p>
            </div>
            <p class="text-base text-right tracking-wide">0/3 stappen voltooid</p>
        </div>
        <div class="progressblock h-5 rounded relative shadow-md">
            <span class="progressbar meter block h-full rounded bg-orange-300 w-1/3"></span>
        </div>

        <div class="flex flex-col gap-y-2">
            <AppointmentStep step-name="Voorbereiding" :substeps="['Test', 'Test 2']" />
        </div>
    </div>
</template>

<script setup>
</script>