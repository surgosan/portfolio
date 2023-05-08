
<template>
    <div class="main">
        <div class="head">
          <div class="return">
            <RouterLink to="/" class="link" @click="reset()">Return</RouterLink>
          </div>

          <h1>Projects</h1>
          <p>My projects come in various languages.</p>
          <p>Some may come as links to another page, while others come as downloads.</p>
          <p>Click and drag to scroll through my projects.</p>
          <p>Hover over to view details.</p>
          <p>*Mobile not supported*</p>
        </div>

        <div id="image-track">
            <div class="track-item" id="comingSoon" draggable="false">
              <div class="trackDescription">
                <p>Coming Soon</p>
              </div>
            </div>
            <div class="track-item" id="comingSoon" draggable="false">
              <div class="trackDescription">
                <p>Coming Soon</p>
              </div>    
            </div>

            <div class="track-item" id="swift" draggable="false" download>
              <div class="trackDescription">
                <div class="chips">
                  <div class="langChip"><p>Swift</p></div>
                  <div class="langChip">XCode</div>
                  <a class="langChip" href="SwiftApp.mov" download>Download</a>
                </div>

                <p>This is the IOS app of my old portfolio. This is also my second take at Swift. Note: This is a video instead of a file.</p>
              </div>    
            </div>

            <div class="track-item" id="applicationHUb" draggable="false" download>
              <div class="trackDescription">
                <div class="chips">
                  <div class="langChip"><p>Java</p></div>
                  <div class="langChip">JavaFX</div>
                  <a class="langChip" href="ApplicationHub.zip" download>Download</a>
                </div>

                <p>This is a random app I made to suit some of my personal needs. I also used this as practice.</p>
              </div>    
            </div>

            <div id="bunkabiker" target="_blank" class="track-item" draggable="false" download>
              <div class="trackDescription">
                <div class="chips">
                  <div class="langChip"><p>Html</p></div>
                  <a class="langChip" href="BunkaBiker.zip" download>Download</a>
                </div>

                <p>This is the recreation of the BunkaBiker website, a site where motorcyclists can stay at someone's home while they are traveling.</p>
              </div>    
            </div>

            <div id="oldPortfolo" class="track-item" draggable="false">
              <div class="trackDescription">
                <div class="chips">
                  <div class="langChip"><p>Html</p></div>
                  <RouterLink class="langChip" to="/original-portfolio">Link</RouterLink>
                </div>

                <p>This is the old version of this portfolio. Feel free to compare the two versions.</p>
              </div>    
            </div>

            <div class="track-item" id="chessMaster" draggable="false">
              <div class="trackDescription">
                <div class="chips">
                  <div class="langChip"><p>Java</p></div>
                  <div class="langChip">JavaFX</div>
                  <a class="langChip" href="SoftwareEngProject-main.zip" download>Download</a>
                </div>

                <p>This is a project I did this year with a group of 5. I handled about 90% of the back-end and about 5% of the front-end for this project.</p>
              </div>    
            </div>

            <div class="track-item" id="comingSoon" draggable="false">
              <div class="trackDescription">
                <p>Coming Soon</p>
              </div>    
            </div>

            <div class="track-item" id="comingSoon" draggable="false">
              <div class="trackDescription">
                <p>Coming Soon</p>
              </div>    
            </div>

        </div>
    </div>
</template>


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
    .main {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100vh;
        padding: 0;
        gap: 6px;
        overflow: hidden;
    }

    .head {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .return {
      position: absolute;
      top: 25%;
      left: 2%;
    }


    #image-track {
        width: max-content;
        flex-grow: .9;
        display: flex;
        flex-direction: row;
        gap: 4vmin;
        align-items: center;
        justify-content: center;
        translate: -25% 0;
        transition: 0s;
    }
    #image-track > .track-item {
        width: 46vmin;
        height: 56vmin;
        object-fit: cover;
        scale: 1;
        user-select: none;
        text-decoration: none;
        overflow: hidden;
        background-size: cover;
        background-position: 50% 50%;
    }

    .track-item:hover > .trackDescription {
      bottom: 0;
    }

    .trackDescription {
      position: absolute;
      bottom: -40%;
      left: 0%;
      width: 100%;
      height: fit-content;
      padding: 3%;
      padding-bottom: 5%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: var(--color-background-soft);
      text-decoration: none;
      transition: .4s;
    }

    .trackDescription > p {
      color: var(--color-heading);
      text-decoration: none;
      text-align: center;
    }

    .chips {
      width: 100%;
      padding: 2%;
      display: flex;
      align-items: center;
      justify-content: space-around;
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

    #comingSoon {
      background: url(../assets/Photos/comingSoon.png);
    }

    #swift {
      background: url(../assets/Photos/swiftApp.JPG);
    }

    #applicationHUb {
      background: url(../assets/Photos/applicationHub.png);
    }

    #bunkabiker {
      background: url(../assets/Photos/babHome.png);
    }

    #oldPortfolo {
      background: url(../assets/Photos/portfolioV1.png)
    }

    #chessMaster {
      background: url(../assets/Photos/chessMaster.png);
    }
</style>

<script setup> 

import { RouterLink } from 'vue-router';

    const windowWidth = window.innerWidth;
    var initialMouseLocation = 0;
    var prevLocationPercentage = -25;
    var currentPercentage = -25;
    var newPercentage = 0;
    var displayPercentage = 0;
    var mousedown = false;

    const locateMouse = e => e.clientX;

    window.onmousemove = e => {
      if(mousedown)
      {
        var mouseDelta = (initialMouseLocation - locateMouse(e));
        const maxDelta = windowWidth/2;
        currentPercentage = (mouseDelta/maxDelta)* -50;
        newPercentage = prevLocationPercentage + currentPercentage;
        displayPercentage = Math.max(Math.min(newPercentage, 20), -70);

        document.getElementById("image-track").animate ({
          translate: displayPercentage + "% 0"
          }, {duration: 1200, fill: 'forwards'});

        for(const image of document.getElementById("image-track").getElementsByClassName("track-item"))
        {
          image.animate ({
            backgroundPosition: (displayPercentage + 75) + '% 0%'
          }, {duration: 1200, fill: 'forwards'});
        }
      }
    }

    window.onmousedown = e => {
      mousedown = true;
      initialMouseLocation = locateMouse(e);
    }

    window.onmouseup = e => {
      mousedown = false;
      prevLocationPercentage = newPercentage;
    }

    function reset() {
      initialMouseLocation = 0;
      prevLocationPercentage = -25;
      currentPercentage = -25;
      newPercentage = 0;
      displayPercentage = 0;
      mousedown = false;
    }
</script>