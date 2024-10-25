<template>
    <div class="mx-4 lg:w-9/12 lg:mx-auto max-w-[1260px]">
        <div class="my-14">
            <p class="text-center text-white font-semibold">
                This tool lets you have a preview of the SEO of your website. Simply fill the form with the title and description of your website page to see what it will look like on browser
                You will see coloured bars to help you understand if the length is good or bad. It is more a question of pixel length than number of characters, for any in-depth documentation please check <a class="underline" target="_blank" href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide">Google’s website documentation<svg class="inline" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#fff"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
                </a>.
                Google’s bots may change the title and description arbitrary depending on the search that has been made.
            </p>
        </div>
        <div class="glassmorph-card mx-auto xl:w-11/12 xl:flex">
            <FormCard />
            <PreviewCard />
        </div>
    </div>
</template>

<style scoped>
    .glassmorph-card {
        background: rgba(255, 255, 255, 0.24);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(8.9px);
        -webkit-backdrop-filter: blur(8.9px);
        border: 1px solid rgba(255, 255, 255, 0.6);
    }

    p {
        filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.2));
    }
</style>