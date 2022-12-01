<template>
    <div class="grid grid-cols-[1fr_4fr] h-full w-full gap-4">
        <DesktopMenu />
        <div class="shadow-lg grid place-items-center">
            <slot></slot>
        </div>

    </div>
</template>