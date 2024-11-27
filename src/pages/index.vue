<script lang="ts" setup>
// Components
import Navigation from "@/components/Navigation/index.vue";

// Assets
import "@/css/home.css"

// Metadata
useHead({
    title: 'ImVSC',
    meta: [
        { name: 'description', content: 'My VSC-inspired portfolio.' }
    ],
})
</script>

<template>
    <Navigation />

    <main class="HomeContainer">
        <div class="px-48">
            <Icon name="devicon-plain:vscode" size="300" class="text-[#161616]" />
        </div>
    </main>
</template>
