<template>
    <div class="mx-4 lg:w-9/12 lg:mx-auto max-w-[1260px]">
        <div class="my-14">
            <p :class="!showFullText ? 'line-clamp-3' : 'line-clamp-none' "
                class="text-center text-white font-semibold line-clamp-3 lg:line-clamp-none">
                This tool lets you have a preview of the SEO of your website. Simply fill the form with the title and
                description of your website page to see what it will look like on browser
                You will see coloured bars to help you understand if the length is good or bad. It is more a question of
                pixel length than number of characters, for any in-depth documentation please check <a class="underline"
                    target="_blank"
                    href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide">Google’s website
                    documentation<svg class="inline" xmlns="http://www.w3.org/2000/svg" height="18px"
                        viewBox="0 -960 960 960" width="18px" fill="#fff">
                        <path
                            d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                    </svg>
                </a>.
                Google’s bots may change the title and description arbitrary depending on the search that has been made.
            </p>
            <div class="flex justify-center lg:hidden">
                <button v-if="!showFullText" @click="showFullText = !showFullText"
                    class="mx-auto text-white text-sm">Show more...</button>
                <button v-else @click="showFullText = !showFullText" class="mx-auto text-white text-sm">Show
                    less...</button>
            </div>
            <p class="flex text-white justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-240 240-480l56-56 144 144v-368h80v368l144-144 56 56-240 240Z"/></svg>
                Do you need more informationns about SEO? <a href="#more-info" class="ms-1 underline">Scroll down</a>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-240 240-480l56-56 144 144v-368h80v368l144-144 56 56-240 240Z"/></svg>
            </p>
        </div>
        <div class="glassmorph-card mx-auto xl:w-11/12 xl:flex">
            <FormCard />
            <PreviewCard />
        </div>
        <div id="more-info" class="my-14 lg:flex lg:flex-wrap">
            <h3 class="font-extrabold text-2xl md:text-4xl text-white text-center w-full mb-4">More informations about SEO</h3>
            <div class="lg:w-3/4 lg:pe-4">
                <p class="text-white font-semibold">
                    Search Engine Optimization (SEO) is the practice of increasing the quantity and quality of website traffic by ranking higher in search engine results pages (SERPs) for specific keywords or phrases. At its core, SEO involves understanding how search engines like Google work, what people search for, the intent behind their searches, and the algorithms used to determine relevance and ranking.
                    Google Bots, are automated software programs designed to systematically browse and index web pages for inclusion in Google's search database. These bots play a crucial role in SEO by discovering, crawling, and indexing web content. They come in different forms, including:
                </p>
                <ul class="list-disc ms-8 text-white my-4">
                    <li>
                        Googlebot: The main crawler that indexes web pages.
                    </li>
                    <li>
                        Googlebot Smartphone: Crawls and indexes mobile versions of websites.
                    </li>
                    <li>
                        Googlebot Desktop: Crawls and indexes desktop versions of websites.
                    </li>
                </ul>
                <p class="text-white font-semibold">
                    Understanding how Google Bots work is essential for optimizing your website for search engines. Proper optimization ensures that your content is easily discoverable, crawlable, and indexable by Google Bots, ultimately improving your website's visibility in search results.
                    <br>
                    To effectively work with Google Bots and improve your SEO, consider the following key points:
                </p>
                <ul class="list-disc ms-8 text-white my-4">
                    <li>
                        Ensure your website is crawlable and accessible to Google Bots. 
                    </li>
                    <li>
                        Create high-quality, relevant, and informative content. 
                    </li>
                    <li>
                        Optimize your website's structure and navigation. 
                    </li>
                    <li>
                        Implement proper meta tags and header tags. 
                    </li>
                    <li>
                        Build high-quality backlinks from authoritative sources. 
                    </li>
                    <li>
                        Regularly update your content to reflect current information and trends.
                    </li>
                </ul>
            </div>
            <div class="lg:w-1/4 p-4 glassmorph-card">
                <p class="text-white font-semibold">
                    To dive deeper into SEO best practices, we recommend exploring these comprehensive resources:
                </p>
                <ul class="list-disc ms-8 text-white my-4">
                    <li>
                        <a class="underline" target="_blank" href="https://search.google.com/search-console/about">Google Search Console:<svg class="inline" xmlns="http://www.w3.org/2000/svg" height="18px"
                            viewBox="0 -960 960 960" width="18px" fill="#fff">
                            <path
                                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                        </svg></a>
                    </li>
                    <li>
                        <a class="underline" target="_blank" href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide">Google SEO Starter Guide:<svg class="inline" xmlns="http://www.w3.org/2000/svg" height="18px"
                            viewBox="0 -960 960 960" width="18px" fill="#fff">
                            <path
                                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                        </svg></a>
                    </li>
                    <li>
                        <a class="underline" target="_blank" href="https://developers.google.com/speed/pagespeed/insights">Google PageSpeed Insights:<svg class="inline" xmlns="http://www.w3.org/2000/svg" height="18px"
                            viewBox="0 -960 960 960" width="18px" fill="#fff">
                            <path
                                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                        </svg></a>
                    </li>
                    <li>
                        <a class="underline" target="_blank" href="https://searchengineland.com/title-tag-length-388468">Title tag length 2024:<svg class="inline" xmlns="http://www.w3.org/2000/svg" height="18px"
                            viewBox="0 -960 960 960" width="18px" fill="#fff">
                            <path
                                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                        </svg></a>
                    </li>
                    <li>
                        <a class="underline" target="_blank" href="https://www.searchenginejournal.com/google-title-tag-length/400682/">Google says there are no limits to length:<svg class="inline" xmlns="http://www.w3.org/2000/svg" height="18px"
                            viewBox="0 -960 960 960" width="18px" fill="#fff">
                            <path
                                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                        </svg></a>
                    </li>
                </ul>
            </div>
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

<script setup>
    let showFullText = ref(false);
</script>