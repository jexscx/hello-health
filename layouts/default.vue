<template>
    <div class="grid grid-col-5 grid-flow-col h-screen w-screen gap-4">
        <div class="col-span-1">
            <DesktopMenu />
        </div>
        <div class="col-span-4 shadow-lg grid place-items-center">
            <slot></slot>
        </div>

    </div>
</template>