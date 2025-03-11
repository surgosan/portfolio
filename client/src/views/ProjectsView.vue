<script setup>
import projectCard from '@/components/projectCard.vue';
import {ref} from "vue";
import {marked} from "marked";
import {useStore} from "vuex";

const store = useStore();

const projects = [
  {
    title: "Raspberry Pi 5 Web Server",
    imageID: "pi_5_web_server",
    tags: ["Linux Ubuntu Server", "Cloudflare", "nginx", "pm2"],
    description: "My AWS free trial was about to end, and thus, I would have to start paying." +
        " I don't want to pay, so I made my own web app host at home. It hosts the front-end, back-end, and " +
        "database for the portfolio your looking at right now."
  },
  {
    title: "Peaches & Cream Foundation Internship",
    imageID: "pncf",
    tags: ["Internship", "Full Stack Development", "VueJS", "MySQL"],
    description: "I can proudly say I interned at the Peaches & Cream Foundation as a full " +
        "stack web developer intern. I developed 2 web apps in VueJS, NodeJS, & MySQL.",
    link: ["https://supportyourmental.com/#/"]
  },
  {
    title: "ESP32 Automated Water Pump V2",
    imageID: "autoPump_v2",
    tags: ["C", "Circuits", "Micro-Controllers", "Altium Designer", "ESP32"],
    description: "The second iteration of my water pump project where I integrated my buck " +
        "converter project into custom pcb.",
    markdown: "https://raw.githubusercontent.com/surgosan/ESP32_Projects/refs/heads/main/ESP32-WROOM-32/Projects/Automated_Water_Pump_V2/README.md"
  },
  {
    title: "Step Down Voltage Regulator",
    imageID: "buck_converter",
    tags: ["Circuits", "Altium Designer", "PCB Design"],
    description: "To help facilitate future projects, I created a step down voltage regulator to control the DC inputs to modules" +
        " that do not need as much power such as a MCU.",
    markdown: "https://raw.githubusercontent.com/surgosan/ESP32_Projects/refs/heads/main/Assistive-Projects/Step%20Down%20Voltage%20Regulator/README.md"
  },
  {
    title: "ESP32 Automated Water Pump",
    imageID: "esp32AWP",
    tags: ["C", "Micro-Controllers", "ESP32", "Circuits"],
    description: "In order to automate my cats water fountain, I used an ESP32 to have control over its state. I also configured it to turn on" +
      " and off based on what time it is.",
    markdown: "https://raw.githubusercontent.com/surgosan/ESP32_Projects/main/ESP32-WROOM-32/Projects/Automated_Water_Pump/README.md"
  },
  {
    title: "Portfolio for IOS",
    imageID: "portfolio_ios",
    tags: ["Swift", "XCode"],
    description: "Using an iMac Mini and an iPhone 13 Pro, I was able to successfully recreate my portfolio as an IOS application. " +
        "It serves static content and fetches data from my database.",
    markdown: "https://raw.githubusercontent.com/surgosan/Portfolio_IOS/main/README.md"
  },
  {
    title: "ESP32-S3 Force Based Applications",
    imageID: "esp32S3ForceBased",
    tags: ["C", "Micro-Controllers", "ESP32", "Circuits"],
    description: "From a drink coaster than lights up when you place a drink on it, to " +
      "a chair that turns on a computer; There are endless possibilities to what you could do with a micro-controller " +
      "and a force resistor.",
    markdown: "https://raw.githubusercontent.com/surgosan/ESP32_Projects/main/ESP32-S3-WROOM-2/Projects/Force_Based_Applications/README.md"
  },
  {
    title: "ESP32-S3 DC Motors and Joystick",
    imageID: "esp32S3JoystickMotor",
    tags: ["C", "Micro-Controllers", "ESP32", "Circuits"],
    description: "I explore the basics of controlling motors via a joystick and potentiometer. " +
        "This project helped me better understand circuits, I2C connections, and micro-controllers.",
    markdown: "https://raw.githubusercontent.com/surgosan/ESP32_Projects/main/ESP32-S3-WROOM-2/Projects/DC_Motors_Rotary_and_Joystick/README.md"
  },
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
    title: "Original Portfolio for IOS",
    imageID: "swift",
    tags: ["Swift", "XCode"],
    description: "In order to learn mobile development for IOS, I recreated my portfolio as an IOS app using Swift and XCode.",
    markdown: "https://raw.githubusercontent.com/surgosan/portfolio/main/client/src/assets/markdown/oldPortfolio/oldPortfolioIOS.md"
  },
  {
    title: "Original Portfolio",
    imageID: "oldPortfolio",
    tags: ["HTML", "CSS", "JavaScript"],
    description: "This is the original version of this portfolio. This is one of the projects I used to familiarize myself with " +
        "web development. Note that this project is not stable anymore, but available to view.",
    routerLink: "/original-portfolio"
  },
  {
    title: "Bunk-a-Biker Website Demo",
    imageID: "bunk-a-biker",
    tags: ["HTML", "CSS", "JavaScript", "Google APIs"],
    description: "I created a modern version of the Bunk-A-Biker website that helped me learn how to utilize and implement apis. " +
        "I experimented with different designs and maps in order to best display pins and locations.",
    markdown: "https://raw.githubusercontent.com/surgosan/portfolio/main/client/src/assets/markdown/bunkabiker/bunkabiker.md"
  },
  {
    title: "Application Hub",
    imageID: "javaApplicationHub",
    tags: ["Java", "JavaFX"],
    description: "I created a simple desktop application for minor tasks. These include tasks that would require using a calculator, " +
        "but I have the desktop application do it all for me.",
    markdown: "https://raw.githubusercontent.com/surgosan/portfolio/main/client/src/assets/markdown/ApplicationHub/ApplicationHub.md"
  },
  {
    title: "Chess Master SWE Team Project",
    imageID: "chessMaster",
    tags: ["Java", "JavaFX"],
    description: "For our Intro to Software Engineering class, our small team created a desktop application to manage a chess tournament. " +
        "I handled about 90% of the backend for this project. This included the databases and handling of data.",
    markdown: "https://raw.githubusercontent.com/surgosan/portfolio/main/client/src/assets/markdown/chessMaster/chessMaster.md"
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


<!------------------------------------------------- TEMPLATE ------------------------------------------------->
<template>
  <div class="main" id="projects_main">
    <div class="head">
      <div class="return">
        <RouterLink to="/" class="link">Return</RouterLink>
      </div>

      <h1>Projects</h1>
      <p>My projects come in various <span class="colored">languages</span>.</p>
      <p><span class="colored">Click</span> on a project to view more.</p>
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
          :router-link="project.routerLink"
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

.colored {
  color: var(--color-theme);
  text-shadow: 1px 1px var(--color-background-mute);
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
  overflow-x: hidden;
  max-width: 100%;
}
</style>