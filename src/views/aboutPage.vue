<script setup>
  import descriptionCard from '../components/descriptionCard.vue';
  import { RouterLink } from 'vue-router';

  components: {
    descriptionCard
  }
</script>

<template>
    <div class="main">
        <RouterLink to="/" class="link">Return</RouterLink>

        <div class="row-items">
            <h1 class="section-header">A little about me</h1>
        <div class="flex-spacer"></div>
            <descriptionCard class="infoCardRight" msg="My name is Sergio Sanchez-Alvares. I live in Georgia, USA where I attend Dalton State College.
                I will attend Kennesaw State University this August. I enjoy programming, music, photography, and motorcycles."/>
        </div>

        <div class="row-items">
            <descriptionCard class="infoCard" msg="I am a musician and perform on the weekends. I ride a motorcycle, so I like to take trips and 
            off-roading. I also like photography and go out to take photos sometimes. I also really enjoy programming. I never get tired and sometimes just
            program for fun."/>
            <div class="flex-spacer"></div>
            <h1 class="section-header">Hobbies</h1>
        </div>

        <div class="row-items">
            <h1 class="section-header">Work Ethic</h1>
        <div class="flex-spacer"></div>
            <descriptionCard class="infoCardRight" msg="I am well organized and like to work hard and smart. I enjoy problem solving and am independent, 
                but I am always willing to work with others as well." />
        </div>

        <div class="row-items">
            <descriptionCard class="infoCard" msg="I use a few different tools and languages. As for languages, I am confident in Java (front/back end), 
            HTML, CSS, JavaScript, and Markdown. I also know Swift (front/back end). However, I am still learning Swift. As for tools, I am familiar with Vue.js for website
            development and JavaFX for Java front-end. I also use Github, BitBucket, VSCode and Jgrasp. I also use SQL and MySQL. I am familiar with all of these tools."/>
        <div class="flex-spacer"></div>
            <h1 class="section-header">Programming Skills</h1>
        </div>

        <div class="row-items">
            <div class="background-decoration"></div>
            <h1 class="section-header">Experience</h1>
        <div class="flex-spacer"></div>
            <descriptionCard class="infoCardRight" msg="I currently have no relevant work experience but hope to get an internship this Summer of 2023. 
            I have however worked on some projects. I have recreated an existing website, I created my portfolio and this is actually the second version. View the
            original as well as my other projects in the project page."/>
        </div>

        <div class="row-items">
            <descriptionCard class="infoCard" msg="My future plans consist of graduating from Kennesaw State University, deepening my knowledge in 
            programming and music, and also to travel to Japan."/>
            <div class="flex-spacer"></div>
            <h1 class="section-header">Future</h1>
        </div>
    </div>
</template>

<style scoped>
    .infoCard {
        width: 35%;
        padding-left: 5%;
    }

    .infoCardRight {
        width: 35%;
        padding-right: 5%;
    }
    a.link {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 135px;
        aspect-ratio: 3/1;
        margin-top: 2%;
        margin-left: 2%;
        border: solid 1px var(--color-heading);
        border-radius: 5px;
        background-color: var(--color-background-mute);
        color: var(--color-heading);
        text-decoration: none;
        transition: .4s;
    }

    a.link:hover {
        border: solid 1.5px var(--color-theme);
        background-color: var(--color-background-soft);
    }
    .section-header {
        position: relative;
        color: var(--color-heading);
        position: relative;
        margin-left: 15%;
        margin-right: 15%;
    }

    .section-header::before {
        position: absolute;
        bottom: 0;
        content: "";
        width: 0%;
        height: 1px;
        border: solid 1px transparent;
        transition: .4s;
        animation-fill-mode: forwards;
        animation-duration: 1s;
        animation-delay: .5s;
    }

    .main {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        padding: 0;
        overflow-y: scroll;
    }

    .flex-spacer {
        flex-grow: 1;
    }

    .row-items {
        width: 100%;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .row-items::before, .row-items::after {
        content: "";
        position: absolute;
        top: 25%;
        left: 50%;
        width: 1px;
        height: 50%;
        border: solid 1px var(--color-text);
        rotate: 0deg;
        transition: .8s;
    }

    .row-items:hover::before {
        rotate: 90deg;
    }

    .row-items:hover::after {
        rotate: -180deg;
    }

    .row-items:hover > .section-header::before {
        animation-name: expandUnderline;
    }

    .background-decoration {
        position: absolute;
        top: -50%;
        left: 15%;
        content: "";
        width: 20%;
        aspect-ratio: 1;
        background-color: var(--color-theme-2);
        z-index: -1;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }

    @keyframes expandUnderline {
        0% {width: 100%; border: solid 1px transparent;}
        100% {width: 100%; border: solid 1px var(--color-heading);}
    }
</style>