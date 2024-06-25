<script setup>
import projectCard from '@/components/projectCard.vue';
import {ref} from "vue";
import {marked} from "marked";
import {useStore} from "vuex";

const store = useStore();

const projects = [
  {
    title: "Kennesaw State University AUV Team",
    imageID: "KSUAUVWebsite",
    tags: ["HTML", "CSS", "JavaScript"],
    description: "The Kennesaw State University AUV Team website serves as the front face for potential investors. " +
        "I worked on the website alone and created it from scratch while advising the team, and official RoboSub regulations.",
    link: "https://ksuauv.com/",
    markdown: "https://raw.githubusercontent.com/ksu-auv-team/ksuauv.github.io/main/README.md"
  },
  {
    title: "Bespoked Bikes Management Site",
    imageID: "beSpoked",
    tags: ["HTML", "CSS", "JavaScript", "Vue.JS", "MySQL"],
    description: "This full stack application allows for the creation, retrieval and updating of information on a database. " +
        "It also displays data on a table for ease of use",
    markdown: "https://raw.githubusercontent.com/surgosan/BeSpoked-Bikes-Commision-Tracker/main/README.md"
  },
  {
    title: "Original Portfolio Mobile App",
    imageID: "swift",
    tags: ["Swift"],
    description: "In order to learn mobile development for IOS, I recreated my portfolio as an IOS app using Swift.",
    markdown: "https://raw.githubusercontent.com/surgosan/portfolio/main/client/src/assets/markdown/oldPortfolioIOS.md"
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
    title: "Application Hub",
    imageID: "javaApplicationHub",
    tags: ["Java", "JavaFX"],
    description: "I created a simple desktop application for minor tasks. These include tasks that would require using a calculator, " +
        "but I have the desktop application do it all for me.",
  },
  {
    title: "Chess Master SWE Team Project",
    imageID: "chessMaster",
    tags: ["Java", "JavaFX"],
    description: "For our Intro to Software Engineering class, our small team created a desktop application to manage a chess tournament. " +
        "I handled about 90% of the backend for this project. This included the databases and handling of data.",
  }
]

//------------------------------------------------------ DIALOG CONTROLS ------------------------------------------------------
const expandProject = ref(false);
const projectContent = ref("");
const closeDialog = () => {
  expandProject.value = false;
  projectContent.value = "";
}
const openDialog = async(markdownPath) => {
  if(markdownPath) {
    try {
      const response = await fetch(markdownPath);
      const markdown = await response.text();
      const baseUrl = markdownPath.replace(/\/[^\/]*$/, '/'); // Get base URL
      const adjustedMarkdown = adjustImagePaths(markdown, baseUrl);
      projectContent.value = marked(adjustedMarkdown);
      expandProject.value = true;
    } catch(error) {
      console.error('Error loading markdown file: ', error);
      closeDialog();

      // Create notification to notify user that site could not load project.
      const notification = {
        id: new Date().getTime(), // Unique identifier for the notification
        message: "Could not retrieve project details.",
      };
      store.commit('addNotification', notification);
      setTimeout(() => {
        store.commit('removeOldestNotification');
      }, 10000)
    }
  } else {
    const notification = {
      id: new Date().getTime(), // Unique identifier for the notification
      message: "This project does not have a detailed overview.",
    };
    store.commit('addNotification', notification);
    setTimeout(() => {
      store.commit('removeOldestNotification');
    }, 10000)
  }
}
const adjustImagePaths = (markdown, baseUrl) => {
  const imageReferenceRegex = /!\[([^\]]*)]\[([^\]]+)]/g; // Matches ![alt text][reference]
  const imageDefinitionRegex = /\[([^\]]+)]:\s*([^()\s]+)/g; // Matches [reference]: path

  // Replace image references with updated paths
  return markdown.replace(imageReferenceRegex, (match, alt, ref) => {
    const imageDefinitionMatch = markdown.match(imageDefinitionRegex);
    if (!imageDefinitionMatch) {
      console.warn(`Image reference [${ref}] found but no corresponding definition.`);
      return match;
    }

    const [, imagePath] = imageDefinitionMatch.find(m => m.startsWith(`[${ref}]:`)).split(/\s+/);
    const newSrc = new URL(imagePath, baseUrl).href;
    return `![${alt}](${newSrc})`;
  });
};
</script>


<template>
  <div class="main" id="projects_main">
    <div class="head">
      <div class="return">
        <RouterLink to="/" class="link">Return</RouterLink>
      </div>

      <h1>Projects</h1>
      <p>My projects come in various languages.</p>
      <p>Click on a project to view more.</p>
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
          @openProject = "openDialog(project.markdown)"
      />
    </main>
  </div>
<!------------------------------------------------------- DIALOG ------------------------------------------------------->
  <div id="project_dialog_wrapper" v-if="expandProject" @click.self="closeDialog">
    <div v-html="projectContent" id="project_dialog"></div>
  </div>
</template>

<style scoped>
img {
  max-width: 100%;
}

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
  border: solid 1px var(--color-theme);
  background-color: var(--color-background-soft);
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
  margin: 3rem 0;
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

/* -------------------------------------------- Project Dialog --------------------------------------------*/
#project_dialog_wrapper {
  background: var(--vt-c-text-light-2);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100dvw;
  height: 100dvh;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

#project_dialog {
  background: var(--color-background);
  width: 60%;
  height: 100%;
  padding: 1rem 2rem;
  overflow-y: scroll;
  max-width: 100%;
}
</style>