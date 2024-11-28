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

// Nav Links
const NavigationLinks = [
    { href: 'https://github.com/qvgk', icon: 'simple-icons:github' },
    { href: 'https://discord.com/users/390410425293864962', icon: 'simple-icons:discord' },
    { href: 'https://bsky.app/profile/qvgk.org', icon: 'simple-icons:bluesky' },
]
</script>

<template>
    <nav class="OuterContainer h-10">
        <!-- Global Start Nav -->
        <div class="NavContainer my-3 gap-3 px-3 w-[50vw]">
            <img src="/favicon.png" class="w-4 h-4" id="NavIcon" />
            <section class="NavContainer" id="NavItems">
                <button v-for="Item in NavigationItems" :key="Item" class="NavItem hidden xl:flex">
                    {{ Item }}
                </button>
            </section>
        </div>

        <!-- PC Middle Nav -->
        <div class="NavContainer md:!flex justify-center gap-3 px-3 w-full">
            <div class="NavButtons hidden md:!flex justify-end text-[#5f5f5f] text-[20px] w-[140px]">
                <Icon name="material-symbols:arrow-left-alt-rounded" />
                <Icon name="material-symbols:arrow-right-alt-rounded" />
            </div>
            <Input class="NavInput w-full !hidden md:!flex xl:w-2/3" placeholder="ImVSC" disabled />
            <div class="NavLinks hidden md:flex gap-2 text-[20px] w-[140px] ">
                <template v-for="(link, index) in NavigationLinks" :key="index">
                    <NuxtLink class="Centre-Row text-[#5f5f5f] hover:text-[#cccccc] transition-all" :href="link.href"
                        target="_blank">
                        <Icon :name="link.icon" />
                    </NuxtLink>
                </template>
            </div>
        </div>

        <!-- PC End Nav -->
        <div class="Centre-Row justify-end !hidden md:!flex h-10 w-[50vw]">
            <template
                v-for="(icon, index) in ['codicon:chrome-minimize', 'codicon:chrome-restore', 'codicon:chrome-close']"
                :key="index">
                <button class="NavButton hover:bg-[#29292c]" :class="{ 'hover:bg-red-600': index === 2 }">
                    <Icon :name="icon" size="16" />
                </button>
            </template>
        </div>

        <!-- Mobile End Nav -->
        <div class="flex md:hidden text-[#5f5f5f] text-[20px] gap-4 px-3">
            <template v-for="(link, index) in NavigationLinks" :key="index">
                <NuxtLink class="Centre-Row" :href="link.href" target="_blank">
                    <Icon :name="link.icon" />
                </NuxtLink>
            </template>
        </div>
    </nav>
</template>
