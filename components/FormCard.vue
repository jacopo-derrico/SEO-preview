<template>
    <div class="flex-col">
        <div class="flex-col">
            <div class="mb-2 relative">
                <label for="title" class="text-white">Title</label>
                <span id="title-tip" class="px-1 ms-2 bg-white/50 rounded-xl text-white text-xs">?
                    <div id="titleTooltip" class="tooltips text-black bg-white p-4 rounded-xl absolute bottom-7 left-10">
                        <p>Amet ullamco irure labore dolore elit ex consequat pariatur nostrud pariatur. Ex cupidatat cupidatat magna est tempor ut eu. Proident tempor laboris labore ipsum ipsum et.</p>
                    </div>
                </span>
            </div>
            <input class="border-white text-sm leading-5 w-full py-2 px-3 border-2 text-white rounded-lg shadow-sm focus:outline-none focus:ring focus:border-white focus:ring-blue-500 bg-transparent placeholder:italic placeholder:text-slate-100" name="title" type="text" placeholder="titolo | sito" v-model="previewStore.titlePreview">
        </div>
        <div class="flex-col mt-8">
            <div class="mb-2 relative">
                <label for="description" class="text-white">Description</label>
                <span id="descr-tip" class="px-1 ms-2 bg-white/50 rounded-xl text-white text-xs">?
                    <div id="descrTooltip" class="tooltips text-black bg-white p-4 rounded-xl absolute bottom-7 left-24">
                        <p>Amet ullamco irure labore dolore elit ex consequat pariatur nostrud pariatur. Ex cupidatat cupidatat magna est tempor ut eu. Proident tempor laboris labore ipsum ipsum et.</p>
                    </div>
                </span>
            </div>
            <textarea class="border-white text-sm leading-5 w-full py-2 px-3 border-2 min-h-[10em] text-white rounded-lg shadow-sm focus:outline-none focus:ring focus:border-white focus:ring-blue-500 bg-transparent placeholder:italic placeholder:text-slate-100" name="description" type="text" placeholder="Duis do fugiat non ex. Ad ullamco cillum eu consequat voluptate fugiat labore incididunt dolore dolore in Lorem aliquip cupidatat." v-model="previewStore.descrPreview"></textarea>
        </div>
    </div>
</template>

<script setup>
import { usePreviewStore } from '~/store/preview'

const previewStore = usePreviewStore()

</script>

<style scoped>
    .tooltips {
        display: none;
    }
    .tooltips p {
        font-size: 12px;
        line-height: 1rem;
    }
    #title-tip:hover #titleTooltip {
        display: block;
    }
    #descr-tip:hover #descrTooltip {
        display: block;
    }
</style>