<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  imageID: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
  },
  linkTarget: {
    type: String,
  },
  routerLink: {
    type: String
  }
});

const emit = defineEmits(['openProject']);
</script>

<template>
  <div class="projectCard" @click="emit('openProject')">
<!--------------------------  HEADER  --------------------------->
    <div class="projectHeader">
      <h1>{{ title }}</h1>

<!------------------------- TAGS & LINK ------------------------->
      <div class="tags">
        <div class="tag" v-for="(tag, index) in tags" :key="index">
          {{ tag }}
        </div>

        <a v-if="link" class="projectLink" :href="link" target="_blank">
          <img src="@/assets/link.svg" alt="Link"/>
        </a>

        <router-link v-if="routerLink" :to="routerLink" class="projectLink">
          <img src="@/assets/link.svg" alt="Link"/>
        </router-link>
      </div>

<!------------------------- DESCRIPTION ------------------------->
      <p class="projectDescription">{{ description }}</p>

    </div>

<!---------------------------- IMAGE ---------------------------->
    <div class="projectImage" :id="imageID" ></div>
  </div>
</template>

<style scoped>
h1, p, a, div {
  color: white;
}

.projectCard {
  position: relative;
  background-color: var(--color-background-soft);
  border-radius: 30px;
  aspect-ratio: auto 480/500;
  overflow: hidden;
}

.projectCard:hover > .projectHeader {
  height: 50%;
}

.projectCard:hover > .projectHeader > .projectDescription {
  opacity: 1;
}

.projectHeader {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: linear-gradient(180deg, black, 90%, transparent);
  border-radius: 30px 30px 0 0;
  width: 100%;
  height: 20%;
  padding: 0 10px;
  transition: 1.4s;
}

.projectDescription {
  opacity: 0;
  transition: ease-in 600ms;
}

.projectImage {
  margin-top: 10%;
  height: 90%;
  background-size: cover !important;
  background-position: top !important;
  transition: 500ms;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
}

.tag {
  padding: 0 5px;
  background: var(--color-background-soft);
  border: white solid 1px;
  border-radius: 12px;
  cursor: default;
}

.tag:hover {
  background-image: linear-gradient(168deg, #427CFF, #7E2FFF 98%);
}

.projectLink {
  cursor: pointer;
  height: 1.5rem;
}

.projectLink img {
  height: 100%;
}

#comingSoon {
  background: url(../assets/Photos/comingSoon.png);
}

#swift {
  background: url(../assets/Photos/swiftApp.JPG);
}

#javaApplicationHub {
  background: url(../assets/Photos/applicationHub.png);
}

#bunk-a-biker {
  background: url(../assets/Photos/babHome.png);
}

#oldPortfolio {
  background: url(../assets/Photos/portfolioV1.png)
}

#KSUAUVWebsite {
  background: url(../assets/Photos/ksu_auv_home.png);
}

#chessMaster {
  background: url(../assets/Photos/chessMaster.png);
}

#beSpoked {
  background: url(../assets/Photos/beSpokedHome.png);
}
#esp32S3JoystickMotor {
  background: url(../assets/markdown/ESP32S3_Joystick_Motors/portfolio_snapshot.jpg);
}
#esp32S3ForceBased {
  background: url(../assets/markdown/ESP32S3ForceBased/force_based_snapshot.jpg);
}
</style>