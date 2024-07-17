<template>
    <div class="mx-4 lg:w-9/12 lg:mx-auto">
        <div class="my-14">
            <p class="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel vehicula sapien. Suspendisse ante dolor, imperdiet a odio mattis, faucibus venenatis nulla. Mauris porttitor massa sit amet nisi laoreet, et sollicitudin mi feugiat. Nunc a ante condimentum felis sagittis vulputate a fermentum lorem. Pellentesque mattis sem quisl.
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
</style>