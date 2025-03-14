<script setup>
  import prgLang from '../components/prgLang.vue';
  import hoverColoredText from '../components/hoverColoredText.vue';
  import card from '../components/card.vue';
  import { RouterLink } from 'vue-router';
  import Connection from '@/server/Connection';
  import { ref, onMounted } from 'vue';
  import 'animate.css';

  const visitCounter = ref(0);


  const getVisitCount = async () => {
    try {
      const response = await Connection.getVisitCount();
      visitCounter.value = response.data.count;
    } catch {
      visitCounter.value = -1;
    }
  }

  function copyEmail() {
    navigator.clipboard.writeText("surgosan@gmail.com");
  }

  onMounted(getVisitCount);
  //onMounted(newVisit);
</script>

<template>
  <div id="home_main_main">
    <header>
      <span id="profile"></span>
      <h1 id="myName">Sergio Sanchez-Alvares</h1>
      <h2><hoverColoredText innerText="Student"/> | <hoverColoredText innerText="Musician"/> | <hoverColoredText innerText="Programmer"/></h2>
      <prgLang class="important animate__animated animate__rubberBand animate__delay-2s"/>
      <hr>
      <h2><hoverColoredText innerText='Firmware Engineer | Full Stack Developer'/></h2>

      <div class="linkContainer">
        <RouterLink class="link" to="/about">About</RouterLink>
        <RouterLink class="link" to="/suggestions">Suggestions</RouterLink>
        <RouterLink class="link" to="/projects">Projects</RouterLink>
      </div>

      <p>This site was created using <span class='colored'>Vue.js</span> and <span class='colored'>MYSQL</span>
        <br>The <span class="colored">color scheme</span> changes depending if your brower is in dark/light mode
      </p>
      <p>This page has been visited <span class="colored">{{ visitCounter }}</span> times since 2023/06/26.</p>
    </header>

    <main id="home_main">

      <card id="cardOne" title="Download my Resume" file="Sergio Sanchez-Alvares.pdf" download/>

      <card id="cardTwo" title= "Check out my Unsplash photos" file="https://unsplash.com/@surgosan"/>

      <h2 id="email_text" @click="copyEmail">Email: surgosan@gmail.com</h2>

      <div id="home_socials">
        <a href="https://github.com/surgosan" target="_blank">
          <img src="@/assets/github_white_svg.svg" alt="Github">
        </a>
        <a href="https://www.facebook.com/profile.php?id=100007142827416" target="_blank">
          <img src="@/assets/facebook_svg.svg" alt="Facebook">
        </a>
        <a href="https://www.instagram.com/sergo.sanchez/" target="_blank">
          <img src="@/assets/instagram_svg.svg" alt="Instagram">
        </a>
        <a href="https://www.linkedin.com/in/sergio-sanchez-alvares-36a97614a/" target="_blank">
          <img src="@/assets/linkedin_svg.svg" alt="LinkedIn">
        </a>
      </div>
      <p>Last Updated: 2025/03/11</p>
    </main>
  </div>

</template>

<style scoped>

  #home_main_main {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: fit-content;
    max-height: fit-content;
  }

  header, main {
    position: relative;
    width: 50%;
    display: flex;
    align-items: center; 
    justify-content: center;
    flex-direction: column;
    font-weight: normal;
    text-align: center;
    gap: 1.2em;
  }

  main > a {
    color: var(--color-text);
  }
  .linkContainer {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center; 
    justify-content: center;
    flex-direction: row;
    text-align: center;
    gap: 1.5em;
  }


  h1 {
    font-size: 2.2rem;
  }

  h1:hover {
    text-shadow: 0 5px 10px var(--color-theme);
    transition: .4s;
  }

  hr {
    width: 60%;
  }

  a.link {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 135px;
      aspect-ratio: 3/1;
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

    .colored {
      color: var(--color-theme);
      text-shadow: 1px 1px var(--color-background-mute);
    }

  #profile {
    width: 20%;
    aspect-ratio: 1;
    border: solid 2px var(--color-heading);
    border-radius: 100%;
    background: url(../assets/Photos/main.JPG) center;
    background-size: cover;
  }

  #cardOne {
    background: url(../assets/Photos/dscTower.JPG) 0 40%;
    background-size: cover;
  }

  #cardTwo {
    background: url(../assets/Photos/mountainView.JPG) 0 50%;
    background-size: cover;
  }

  #email_text { cursor: pointer; }

  #home_socials {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
  }

  #home_socials img { transition: 400ms }

  #home_socials img:hover {
    scale: 1.1;
  }

</style>
