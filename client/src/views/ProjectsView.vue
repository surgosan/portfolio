
<template>
  <div class="main" id="projects_main">
    <div class="head">
      <div class="return">
        <RouterLink to="/" class="link">Return</RouterLink>
      </div>

      <h1>Projects</h1>
      <p>My projects come in various languages.</p>
    </div>

    <main>
      <projectCard
          class="projectCard"
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :description = "project.description"
          :imageID ="project.imageID"
          :tags="project.tags"
          :link="project.link"
          :linkTarget="project.linkTarget"
      />
    </main>
  </div>
</template>

<script setup>
  import projectCard from '@/components/projectCard.vue';
  const projects = [
    {
      title: "Kennesaw State University AUV Team",
      imageID: "KSUAUVWebsite",
      tags: ["HTML", "CSS", "JavaScript"],
      description: "The Kennesaw State University AUV Team website serves as the front face for potential investors. " +
          "I worked on the website alone and created it from scratch while advising the team, and official RoboSub regulations.",
      link: "https://ksuauv.com/",
    },
    {
      title: "Bespoked Bikes Management Site",
      imageID: "beSpoked",
      tags: ["HTML", "CSS", "JavaScript", "Vue.JS", "MySQL"],
      description: "This full stack application allows for the creation, retrieval and updating of information on a database. " +
          "It also displays data on a table for ease of use"
    },
    {
      title: "Original Portfolio Mobile App",
      imageID: "swift",
      tags: ["Swift"],
      description: "In order to learn mobile development for IOS, I recreated my portfolio as an IOS app using Swift."
    },
    {
      title: "Original Portfolio",
      imageID: "oldPortfolio",
      tags: ["HTML", "CSS", "JavaScript"],
      description: "This is the original version of this portfolio. This is one of the projects I used to familiarize myself with " +
          "web development.",
    },
    {
      title: "Bunk-a-Biker Website Demo",
      imageID: "bunk-a-biker",
      tags: ["HTML", "CSS", "JavaScript", "Google APIs"],
      description: "I created a modern version of the Bunk-A-Biker website that helped me learn how to utilize and implement apis. " +
          "I experimented with different designs and maps in order to best display pins and locations."
    },
    {
      title: "Chess Master SWE Team Project",
      imageID: "chessMaster",
      tags: ["Java", "JavaFX"],
      description: "For our Intro to Software Engineering class, our small team created a desktop application to manage a chess tournament. " +
          "I handled about 90% of the backend for this project. This included the databases and handling of data.",
      link: "https://github.com/konkgg/SoftwareEngProject"
    },
    {
      title: "Application Hub",
      imageID: "javaApplicationHub",
      tags: ["Java", "JavaFX"],
      description: "I created a simple desktop application for minor tasks. These include tasks that would require using a calculator, " +
          "but I have the desktop application do it all for me.",
    }
  ]
</script>

<style scoped>
h1 {
  color: var(--color-heading);
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

.important {
  color: var(--color-theme);
  animation-delay: 2s;
}

.main {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 0;
  gap: 6px;
  overflow-x: hidden;
}
.head {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem;
  gap: 1rem;
}

.return {
  position: absolute;
  top: 25%;
  left: 2%;
}
/* ------------------------------------------------- CARD -------------------------------------------------*/

.projectCard {
  width: calc(32% - 1rem);
  aspect-ratio: 16/9;
  transition: 400ms;
}

.projectCard:hover {
  scale: 1.01;
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.75);
}

/* ----------------------------------------------- DETAILS -----------------------------------------------*/
.chips {
  width: 100%;
  padding: 2%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.langChip {
  color: var(--color-heading);
  text-decoration: none;
  text-align: center;
  background: var(--color-background-soft);
  border: solid 2px var(--color-border);
  border-radius: 13px;
  padding-left: 2%;
  padding-right: 2%;
}

.langChip:hover {
  background: var(--color-border-hover);
}
</style>