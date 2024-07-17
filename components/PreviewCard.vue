<template>
    <div class="xl:w-6/12 bg-white rounded-[16px] p-[40px] flex flex-col gap-14">
        <div class="preview-box mt-4">
            <div class="device-type">
                <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.85188 13.4815H4.96299M0.888916 8.42978V3.86681C0.888916 2.95414 0.888916 2.49746 1.06654 2.14886C1.22277 1.84222 1.47189 1.5931 1.77853 1.43687C2.12713 1.25925 2.5838 1.25925 3.49648 1.25925H11.3187C12.2314 1.25925 12.6871 1.25925 13.0357 1.43687C13.3423 1.5931 13.5923 1.84222 13.7485 2.14886C13.926 2.49712 13.926 2.95324 13.926 3.86414V8.43213C13.926 9.34303 13.926 9.7985 13.7485 10.1468C13.5923 10.4534 13.3423 10.7033 13.0357 10.8596C12.6874 11.037 12.232 11.037 11.3211 11.037H3.49381C2.58291 11.037 2.12678 11.037 1.77853 10.8596C1.47189 10.7033 1.22277 10.4534 1.06654 10.1468C0.888916 9.79816 0.888916 9.34245 0.888916 8.42978Z"
                        stroke="white" stroke-width="1.62963" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <h3>This is the title of your website</h3>
            <p>
                <span class="date">Jul 13, 2024 - </span>This dice roller is a string parser that returns an object containing the component parts of the dice roll. It supports the full Roll20 Dice Specification.
            </p>
        </div>
        <div class="preview-box">
            <div class="device-type">
                <svg width="16" height="22" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.51849 3.49648V12.9483C1.51849 13.861 1.51849 14.3171 1.69611 14.6657C1.85235 14.9723 2.10147 15.2219 2.40811 15.3781C2.75636 15.5556 3.21249 15.5556 4.12338 15.5556H7.06175C7.97265 15.5556 8.42811 15.5556 8.77637 15.3781C9.08301 15.2219 9.33296 14.9723 9.4892 14.6657C9.66664 14.3175 9.66664 13.862 9.66664 12.9511V3.49381C9.66664 2.58291 9.66664 2.12678 9.4892 1.77853C9.33296 1.47189 9.08301 1.22277 8.77637 1.06654C8.42777 0.888916 7.97207 0.888916 7.05939 0.888916H4.12606C3.21338 0.888916 2.7567 0.888916 2.40811 1.06654C2.10147 1.22277 1.85235 1.47189 1.69611 1.77853C1.51849 2.12713 1.51849 2.5838 1.51849 3.49648Z"
                        stroke="white" stroke-width="1.62963" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <h3>This is the title of your website</h3>
            <div class="flex gap-4">
                <p class="w-8/12">
                    <span class="date">Jul 13, 2024 - </span>This dice roller is a string parser that returns an object containing the component parts of the dice roll. It supports the full Roll20 Dice Specification.
                </p>
                <div class="bg-[#4692FE36] w-[80px] h-[80px] rounded">

                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.preview-box {
    border-radius: 16px;
    box-shadow: 0 0 14px rgb(70, 146, 254, 0.25);
    padding: 40px 20px;
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
}

h3 {
    font-size: 15px;
    color: #1A0CAB;
    margin-bottom: 10px;
}

p {
    font-size: 11px;
    line-height: 17px;
    color: #4D5157;
}

.date {
    color: #777777;
}

.device-type {
    background-color: #4692FE;
    width: 40px;
    aspect-ratio: 1;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -20px;
}
</style>