<script setup lang="ts">
// Components
import { Input } from "@/components/ui/input"

// Assets
import "./index.css"

// Nav Items
const NavigationItems = [
    "File",
    "Edit",
    "Selection",
    "View",
    "Go",
    "Run",
    "Terminal",
    "Help"
];
</script>

<template>
    <nav class="OuterContainer h-10">
        <div class="NavContainer my-3 gap-3 px-3 w-[50vw]">
            <img src="/favicon.png" class="w-4 h-4" id="NavIcon" />
            <section class="NavContainer" id="NavItems">
                <button v-for="Item in NavigationItems" :key="Item" class="NavItem hidden xl:flex">
                    {{ Item }}
                </button>
            </section>
        </div>
        <div class="NavContainer !hidden md:!flex justify-center px-3 w-full">
            <Input class="NavInput w-full xl:w-2/3" placeholder="ImVSC" disabled />
        </div>
        <div class="NavContainer justify-end h-10 w-[50vw]">
            <button class="NavButton hover:bg-[#29292c]">
                <Icon name="codicon:chrome-minimize" size="16" />
            </button>

            <button class="NavButton hover:bg-[#29292c]">
                <Icon name="codicon:chrome-restore" size="16" />
            </button>

            <button class="NavButton hover:bg-red-600">
                <Icon name="codicon:chrome-close" size="16" />
            </button>
        </div>
    </nav>
</template>
