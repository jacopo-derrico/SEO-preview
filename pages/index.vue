<template>
    <div class="mx-4 lg:w-9/12 lg:mx-auto max-w-[1260px]">
        <div class="my-14">
            <p class="text-center text-white font-semibold">
                This tool lets you have a preview of the SEO of your website. Simply fill the form with the title and description of your website page to see what it will look like on browser
                You will see coloured bars to help you understand if the length is good or bad. It is more a question of pixel length than number of characters, for any in-depth documentation please check <a class="underline" href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide">Google’s website documentation</a>.
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