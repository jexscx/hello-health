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
            <button @click="changeIcon()" class="outline outline-1 outline-orange-300 rounded w-full h-10">
                <div class="flex flex-row justify-between mx-4 items-center">
                    <h6 class="text-xl font-bold text-orange-300">Voorbereiding</h6>
                    <svg width="24" height="24" fill="none" stroke="#fdba74" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <use href="/feather-sprite.svg#chevron-left" />
                    </svg>
                </div>
            </button>
            <div class="shadow-3xl rounded w-full h-10 flex flex-row justify-between items-center">
                <p class="pl-4 text-base font-bold tracking-wide">Vragen opstellen</p>
                <button class="pr-4">
                    <p class="text-base tracking-wide">Bekijken</p>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
var icon =
    function changeIcon(params) {


    }
</script>