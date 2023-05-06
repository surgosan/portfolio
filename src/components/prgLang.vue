<script setup>
    import { ref } from 'vue';

    const names = [
        "Java",
        "HTML",
        "CSS",
        "JS",
        "Swift"
    ];

    const innerText = [
        'System.out.println("Hello World!");',
        '<h1> Hello World! </h1>',
        '--text: "Hello World"',
        'console.log("Hello World!");',
        'print("Hello World")'
    ];

    var index = 0;
    const languageName = ref({name: names[0]})
    const languageText = ref({innerText: innerText[0]});

    setInterval(() => {
        if(index >= 4)
        {
            index = 0;
        }
        else
        {
            index++;
        }
        languageName.value.name = names[index];
        languageText.value.innerText = innerText[index];
    }, 5000);

</script>


<template>
    <div class="code-container" id="thisCode">
        <span class="langDisplay" id="langDisplay">{{ languageName.name }}</span>
        <code id="code-text">{{ languageText.innerText }}</code>
    </div>
</template>


<style>
    .code-container {
        position: relative;
        width: 400px;
        aspect-ratio: 5/1;
        border: solid 2px var(--color-heading);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .4s;
    }

    .code-container:hover {
        border: solid 2px var(--color-theme);
    }

    .langDisplay {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 25%;
        height: 45%;
        margin-right: 3%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
</style>