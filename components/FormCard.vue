<template>
    <div class="flex-col">
        <div class="flex-col relative">
            <div class="mb-2">
                <label for="title" class="text-white">Title</label>
                <span id="title-tip" class="px-1 ms-2 bg-white/50 rounded-xl text-white text-xs">?
                    <div id="titleTooltip" class="tooltips text-black bg-white p-4 rounded-xl absolute bottom-7 left-10">
                        <p>Amet ullamco irure labore dolore elit ex consequat pariatur nostrud pariatur. Ex cupidatat cupidatat magna est tempor ut eu. Proident tempor laboris labore ipsum ipsum et.</p>
                    </div>
                </span>
            </div>
            <input ref="title" class="border-white text-sm leading-5 w-full py-2 px-3 border-2 text-white rounded-lg shadow-sm focus:outline-none focus:ring focus:border-white focus:ring-blue-500 bg-transparent placeholder:italic placeholder:text-slate-100" name="title" type="text" placeholder="titolo | sito" v-model="previewStore.titlePreview">
            <div class="h-[7px] bg-white/50 mt-3 rounded">
                <div class="h-[7px] rounded" :class="titleBarColor" :style="{ width: previewStore.titlePreview.length > 0 && previewStore.titlePreview.length < 60 ? `calc(${(100 * previewStore.titlePreview.length) / 60}%)` : '100%' }"></div>
            </div>
            <button class="bg-white/50 rounded p-1 absolute bottom-7 right-2">
                <svg width="14" height="15" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.5H7.06439L9.5 2.78338V10.5H0.5V0.5ZM1.5 1.5V9.5H8.5V3.5H6.36667V1.5H1.5ZM7.36667 2.15412L7.73561 2.5H7.36667V2.15412Z" fill="#4692FE"/>
                </svg>
            </button>
        </div>
        <div class="flex-col mt-8 relative">
            <div class="mb-2 relative">
                <label for="description" class="text-white">Description</label>
                <span id="descr-tip" class="px-1 ms-2 bg-white/50 rounded-xl text-white text-xs">?
                    <div id="descrTooltip" class="tooltips text-black bg-white p-4 rounded-xl absolute bottom-7 left-24">
                        <p>Amet ullamco irure labore dolore elit ex consequat pariatur nostrud pariatur. Ex cupidatat cupidatat magna est tempor ut eu. Proident tempor laboris labore ipsum ipsum et.</p>
                    </div>
                </span>
            </div>
            <textarea class="border-white text-sm leading-5 w-full py-2 px-3 border-2 min-h-[10em] text-white rounded-lg shadow-sm focus:outline-none focus:ring focus:border-white focus:ring-blue-500 bg-transparent placeholder:italic placeholder:text-slate-100" name="description" type="text" placeholder="Duis do fugiat non ex. Ad ullamco cillum eu consequat voluptate fugiat labore incididunt dolore dolore in Lorem aliquip cupidatat." v-model="previewStore.descrPreview"></textarea>
            <div class="h-[7px] bg-white/50 mt-3 rounded">
                <div class="h-[7px] rounded" :class="descrBarColor" :style="{ width: previewStore.descrPreview.length > 0 && previewStore.descrPreview.length < 158 ? `calc(${(100 * previewStore.descrPreview.length) / 158}%)` : '100%' }"></div>
            </div>
            <button class="bg-white/50 rounded p-1 absolute bottom-7 right-2">
                <svg width="14" height="15" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.5H7.06439L9.5 2.78338V10.5H0.5V0.5ZM1.5 1.5V9.5H8.5V3.5H6.36667V1.5H1.5ZM7.36667 2.15412L7.73561 2.5H7.36667V2.15412Z" fill="#4692FE"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import { usePreviewStore } from '~/store/preview';

const previewStore = usePreviewStore();

// visual feedback bar for title
const titleBarColor = computed(() => {
    const classes = [];
    // console.log(previewStore.titlePreview.length)
    if (previewStore.titlePreview.length > 0 && previewStore.titlePreview.length <= 55) {
        classes.push('bg-green-500');
    } else if (previewStore.titlePreview.length > 55 && previewStore.titlePreview.length < 60){
        classes.push('bg-yellow-500');
    } else if (previewStore.titlePreview.length >= 60){
        classes.push('bg-red-500');
    }

    return classes;
});

// bar for description
const descrBarColor = computed(() => {
    const descrClasses = [];
    console.log(previewStore.descrPreview.length)
    if (previewStore.descrPreview.length > 0 && previewStore.descrPreview.length <= 120) {
        descrClasses.push('bg-green-500');
    } else if (previewStore.descrPreview.length > 120 && previewStore.descrPreview.length < 158){
        descrClasses.push('bg-yellow-500');
    } else if (previewStore.descrPreview.length >= 158){
        descrClasses.push('bg-red-500');
    }

    return descrClasses;
});

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