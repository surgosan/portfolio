<script setup>
  import prgLang from '../components/prgLang.vue';
  import hoverColoredText from '../components/hoverColoredText.vue';
  import card from '../components/card.vue';
  import buttonRes from '../components/buttonRes.vue';
  import { RouterLink } from 'vue-router';

  components: {
    prgLang,
    hoverColoredText,
    card,
    buttonRes
  }
  
</script>

<template>
  <header>
    <span id="profile"></span>
    <h1>Sergio Sanchez-Alvares</h1>
    <h2><hoverColoredText innerText="Student"/> | <hoverColoredText innerText="Musician"/> | <hoverColoredText innerText="Programmer"/></h2>
    <prgLang/>
    <hr>
    <h2><hoverColoredText innerText='"If not you, then who?'/></h2>
    <h3>Full Stack Developer</h3>

    <div class="linkContainer">
      <RouterLink class="link" to="/about">About</RouterLink>
      <RouterLink class="link" to="/projects">Projects</RouterLink>
    </div>

    <p>This site was created using Vue.js
      <br>The <span id="colored">color scheme</span> changes depending if your brower is in dark/light mode
    </p>
  </header>

  <main>

    <card id="cardOne" title="Download my Resume" file="Sergio-Sanchez-Alvares.pdf" download/>

    <card id="cardTwo" title= "Check out my Unsplash photos" file="https://unsplash.com/@surgosan"/>

    <h2>Email: surgosan@gmail.com</h2>
    <a href="https://github.com/surgosan" target="_blank">GitHub: @surgosan</a>
    <a href="https://www.facebook.com/profile.php?id=100007142827416" target="_blank">Facebook: Sergio Sanchez</a>
    <a href="https://www.instagram.com/sergo.sanchez/" target="_blank">Instagram: sergo.sanchez</a>
    <p>Last Updated: 2023/05/08</p>
  </main>
</template>

<style scoped>

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
    font-size: 2.5rem;
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

    #colored {
      color: var(--color-theme);
    }

  #profile {
    width: 20%;
    aspect-ratio: 1;
    border: solid 2px var(--color-heading);
    border-radius: 100%;
    background: url(../assets/Photos/Selfie.JPG);
    background-size: cover;
  }

  #cardOne {
    background: url(../assets/Photos/dscTower.JPG);
    background-size: cover;
    background-position: 0 40%;
  }

  #cardTwo {
    background: url(../assets/Photos/mountainView.JPG);
    background-size: cover;
    background-position: 0 40%;
  }
</style>
