<template>
    <div class="flex-col xl:w-7/12 p-[40px]">
        <div class="flex-col relative">
            <div class="mb-2">
                <label for="title" class="text-white">Title</label>
                <span id="title-tip" class="px-1 ms-2 bg-white/50 rounded-xl text-white text-xs cursor-help">?
                    <div id="titleTooltip" class="tooltips text-black bg-white p-4 rounded-xl absolute bottom-24 left-10">
                        <p>There is <b>no minimum length</b> for the title, but there is a max. The bar underneath help you understand if you are making the title too long, this is by <b>number of characters</b>, but Google bots may decide to truncate it based on actual px length or based on content.</p>
                    </div>
                </span>
            </div>
            <input ref="title" class="border-white text-sm leading-5 w-full py-2 px-3 border-2 text-white rounded-lg shadow-sm focus:outline-none focus:ring focus:border-white focus:ring-blue-500 bg-transparent placeholder:italic placeholder:text-slate-100" name="title" type="text" placeholder="The title of your website" v-model="previewStore.titlePreview">
            <div class="h-[7px] bg-white/50 mt-3 rounded">
                <div class="h-[7px] rounded" :class="titleBarColor" :style="{ width: previewStore.titlePreview.length > 0 && previewStore.titlePreview.length < 60 ? `calc(${(100 * previewStore.titlePreview.length) / 60}%)` : '100%' }"></div>
            </div>
            <button @click="copyTitle()" class="bg-white/50 rounded p-1 absolute bottom-7 right-2 w-[22px] h-[24px]">
                <svg v-if="previewStore.isTitleCopied" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16" fill="#4692FE"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                <svg v-else width="14" height="15" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.5H7.06439L9.5 2.78338V10.5H0.5V0.5ZM1.5 1.5V9.5H8.5V3.5H6.36667V1.5H1.5ZM7.36667 2.15412L7.73561 2.5H7.36667V2.15412Z" fill="#4692FE"/>
                </svg>
            </button>

        </div>
        <div class="flex-col mt-8 relative">
            <div class="mb-2 relative">
                <label for="description" class="text-white">Description</label>
                <span id="descr-tip" class="px-1 ms-2 bg-white/50 rounded-xl text-white text-xs cursor-help">?
                    <div id="descrTooltip" class="tooltips text-black bg-white p-4 rounded-xl absolute bottom-7 left-24">
                        <p>There is <b>no minimum length</b> for the description as well, but there is a max. The bar underneath help you understand if you are making the description too long, this is calculated by <b>number of characters</b>, but Google bots may decide to truncate it based on actual px length or based on content. Remember to <b>be brief and coherent</b> with the content of your website. Generally, on desktop it will fill 2 lines and in mobile 3, 1 line more if it shows a picture.</p>
                    </div>
                </span>
            </div>
            <textarea class="border-white text-sm leading-5 w-full py-2 px-3 border-2 min-h-[10em] text-white rounded-lg shadow-sm focus:outline-none focus:ring focus:border-white focus:ring-blue-500 bg-transparent placeholder:italic placeholder:text-slate-100" name="description" type="text" placeholder="Duis do fugiat non ex. Ad ullamco cillum eu consequat voluptate fugiat labore incididunt dolore dolore in Lorem aliquip cupidatat." v-model="previewStore.descrPreview"></textarea>
            <div class="h-[7px] bg-white/50 mt-3 rounded">
                <div class="h-[7px] rounded" :class="descrBarColor" :style="{ width: previewStore.descrPreview.length > 0 && previewStore.descrPreview.length < 158 ? `calc(${(100 * previewStore.descrPreview.length) / 158}%)` : '100%' }"></div>
            </div>
            <button @click="copyDescription()" class="bg-white/50 rounded p-1 absolute bottom-9 right-2 w-[22px] h-[24px]">
                <svg v-if="previewStore.isDescrCopied" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16" fill="#4692FE"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                <svg v-else width="14" height="15" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.5H7.06439L9.5 2.78338V10.5H0.5V0.5ZM1.5 1.5V9.5H8.5V3.5H6.36667V1.5H1.5ZM7.36667 2.15412L7.73561 2.5H7.36667V2.15412Z" fill="#4692FE"/>
                </svg>
            </button>
        </div>
        <button @click="copyEmbed()" class=" bg-[#4692FE] p-2 rounded-xl text-white font-medium mt-8">
            <span v-if="previewStore.isEmbedCopied" class="flex gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                Copied!
            </span>
            <span v-else class="flex gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>
                Embed both
            </span>
        </button>
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

// copy title to clipboard
async function copyTitle() {
  try {
    await navigator.clipboard.writeText(previewStore.titlePreview);
    // alert('Copied to clipboard!');
    previewStore.isTitleCopied = true;
    setTimeout(() => {
        previewStore.isTitleCopied = false;
    }, 2000)
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}

// copy description to clipboard
async function copyDescription() {
  try {
    await navigator.clipboard.writeText(previewStore.descrPreview);
    // alert('Copied to clipboard!');
    previewStore.isDescrCopied = true;
    setTimeout(() => {
        previewStore.isDescrCopied = false;
    }, 2000)
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}

// copy embed code to clipboard
async function copyEmbed() {
  try {
    await navigator.clipboard.writeText(`<title>${previewStore.titlePreview}</title>
    <meta name="description" content="${previewStore.descrPreview}">`);
    // alert('Copied to clipboard!');
    previewStore.isEmbedCopied = true;
    setTimeout(() => {
        previewStore.isEmbedCopied = false;
    }, 2000)
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}

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