
<template>
    <div class="main">
        <div class="head">
          <div class="return">
            <RouterLink to="/" class="link" @click="reset()">Return</RouterLink>
          </div>

          <h1>Projects</h1>
          <p>My projects come in various languages.</p>
          <p>Some may come as links to another page, while others come as downloads.</p>
          <p>Hover over to view details.</p>
          <p>*Mobile not supported*</p>
          <p class="important animate__animated animate__heartBeat">CLICK AND DRAG TO SCROLL.</p>
          <div class="cursor-demonstration">
          <svg xmlns="http://www.w3.org/2000/svg" id="cursorSVG" viewBox="0,0,256,256" fill-rule="nonzero">
              <g transform="translate(-20.48,-20.48) scale(1.16,1.16)">
                  <g fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-size="none" style="mix-blend-mode: normal"><g transform="translate(-1.02494,-6.65657) scale(5.12,5.12)">
                      <path id="cursorPath" d="M29.69922,47c-0.12109,0 -0.24219,-0.02344 -0.35937,-0.06641c-0.25,-0.09766 -0.44922,-0.28906 -0.55859,-0.53516l-5.83594,-13.49219l-7.26172,6.82422c-0.28906,0.27344 -0.71484,0.34375 -1.08203,0.1875c-0.36328,-0.15625 -0.60156,-0.51953 -0.60156,-0.91797v-33c0,-0.39844 0.23438,-0.75781 0.60156,-0.91797c0.36328,-0.15625 0.78906,-0.08594 1.08203,0.1875l24,22.39844c0.28906,0.26953 0.39063,0.6875 0.26172,1.05859c-0.12891,0.375 -0.46484,0.63672 -0.85937,0.67188l-10.18359,0.875l6.10547,13.3125c0.10938,0.23828 0.12109,0.51563 0.02734,0.76563c-0.09375,0.25 -0.27734,0.44922 -0.51953,0.55859l-4.40234,2c-0.13281,0.05859 -0.26953,0.08984 -0.41406,0.08984z"></path></g></g></g></svg>
          </div>
        </div>

        <div id="image-track">

          <div class="track-item" id="comingSoon" draggable="false">
            <div class="trackDescription">
            </div>
          </div>

            <div class="track-item" id="swift" draggable="false">
              <div class="trackDescription">
                <div class="chips">
                  <div class="langChip"><p>Swift</p></div>
                  <div class="langChip"><p>XCode</p></div>
                  <a class="langChip" href="SwiftApp.mov" download>Download</a>
                </div>

                <p>This is the IOS app of my old portfolio. This is also my second take at Swift. Note: This is a video instead of a file.</p>
              </div>    
            </div>

            <div class="track-item" id="applicationHUb" draggable="false">
              <div class="trackDescription">
                <div class="chips">
                  <div class="langChip"><p>Java</p></div>
                  <div class="langChip"><p>JavaFX</p></div>
                  <a class="langChip" href="ApplicationHub.zip" download>Download</a>
                </div>

                <p>This is a random app I made to suit some of my personal needs. I also used this as practice.</p>
              </div>    
            </div>

            <div id="bunkabiker" class="track-item" draggable="false">
              <div class="trackDescription">
                <div class="chips">
                  <div class="langChip"><p>Html</p></div>
                  <div class="langChip"><p>CSS</p></div>
                  <div class="langChip"><p>JavaScript</p></div>
                  <a class="langChip" href="BunkaBiker.zip" download>Download</a>
                </div>

                <p>This is the recreation of the BunkaBiker website, a site where motorcyclists can stay at someone's home while they are traveling.</p>
              </div>    
            </div>

            <div id="oldPortfolo" class="track-item" draggable="false">
              <div class="trackDescription">
                <div class="chips">
                  <div class="langChip"><p>Html</p></div>
                  <div class="langChip"><p>CSS</p></div>
                  <div class="langChip"><p>JavaScript</p></div>
                  <RouterLink class="langChip" to="/original-portfolio">Link</RouterLink>
                </div>

                <p>This is the old version of this portfolio. Feel free to compare the two versions.</p>
              </div>    
            </div>

          <div class="track-item" id="ksu_auv" draggable="false">
            <div class="trackDescription">
              <div class="chips">
                <div class="langChip">HTML</div>
                <div class="langChip">CSS</div>
                <div class="langChip">JavaScript</div>
                <a class="langChip" href="https://ksu-auv-team.github.io/ksuauv.github.io/" target="_blank">Link</a>
              </div>

              <p>The Kennesaw State University AUV Team website serves as the front face for potential investors. I worked on the website alone and created it from scratch while advising the team, and official RoboSub regulations.</p>
            </div>
          </div>

            <div class="track-item" id="chessMaster" draggable="false">
              <div class="trackDescription">
                <div class="chips">
                  <div class="langChip"><p>Java</p></div>
                  <div class="langChip"><p>JavaFX</p></div>
                  <a class="langChip" href="SoftwareEngProject-main.zip" download>Download</a>
                </div>

                <p>This is a project I did this year with a group of 5. I handled about 90% of the back-end and about 5% of the front-end for this project.</p>
              </div>    
            </div>

            <div class="track-item" id="beSpoked" draggable="false">
              <div class="trackDescription">
                <div class="chips">
                  <div class="langChip"><p>Vue.js</p></div>
                  <div class="langChip"><p>MySQL</p></div>
                  <div class="langChip"><p>LARGE FILE</p></div>
                  <a class="langChip" target="_blank" href="https://github.com/surgosan/BeSpoked-Bikes-Commision-Tracker">Link</a>
                </div>

                <p>
                  This is a full stack web application that allows the creation and ability to view in a table of a few objects.
                  <br>
                  Client: Vuejs | Backend: MySQL
                </p>
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

    .important {
      color: var(--color-theme);
      animation-delay: 2s;
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

    .cursor-demonstration {
      width: 15rem;
      position: absolute;
      top: 60%;
      right: 10%;
    }

    #cursorSVG {
      position: absolute;
      width: 3rem;
      top: 0;
      right: 0;
      display: none;
    }

    @keyframes cursorDemo {
		  0% {right: 0}
      75% {right: 100%}
      100% {right: 100%}
	}

    #cursorPath {
      fill: transparent;
      stroke: var(--color-theme);
      stroke-width: 2px;
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
        translate: -50% 0;
        transition: 0s;
    }
    #image-track > .track-item {
        width: 80vmin;
        aspect-ratio: 16/9;
        object-fit: cover;
        scale: 1;
        user-select: none;
        text-decoration: none;
        overflow: hidden;
        background-size: cover;
        background-position: 0 0 ;
        border-radius: 1rem;
    }

    .track-item:hover > .trackDescription {
      bottom: 0;
    }

    .trackDescription {
      position: absolute;
      bottom: -40%;
      left: 0;
      width: 100%;
      height: fit-content;
      padding: 0 0 1% 0;
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

    #ksu_auv {
      background: url(../assets/Photos/ksu_auv_home.png);
    }

    #chessMaster {
      background: url(../assets/Photos/chessMaster.png);
    }

    #beSpoked {
      background: url(../assets/Photos/beSpokedHome.png);
    }
</style>

<script setup> 

import { RouterLink } from 'vue-router';
import 'animate.css';

    const windowWidth = window.innerWidth;
    var initialMouseLocation = 0;
    var prevLocationPercentage = -50;
    var currentPercentage = 0;
    var newPercentage = 0;
    var displayPercentage = 0;
    var mousedown = false;
    let movedItems = false;
    let intervalInt = 0;

    setTimeout(() => {
      if(!movedItems)
      {
        const interval = setInterval(() => {
          cursorAnimation();
          intervalInt++;
  
          if(intervalInt > 5)
          {
            clearInterval(interval);
            document.getElementById('cursorSVG').style.display = 'none';
          }
        }, 5000);
      }

    }, 1000);

  const cursorMovement = [
    { right: '0%' },
    { right: '100%' }
  ]

  const cursorFill = [
    { fill: 'transparent' },
    { fill: 'transparent' },
    { fill: 'transparent' },
    { fill: 'transparent' },
    { fill: 'transparent' },
    { fill: 'var(--color-theme)' },
    { fill: 'var(--color-theme)' },
    { fill: 'var(--color-theme)' },
    { fill: 'var(--color-theme)' },
    { fill: 'var(--color-theme)' },
    { fill: 'var(--color-theme)' },
    { fill: 'var(--color-theme)' },
    { fill: 'var(--color-theme)' },
    { fill: 'var(--color-theme)' },
    { fill: 'var(--color-theme)' },
    { fill: 'var(--color-theme)' },
    { fill: 'var(--color-theme)' },
    { fill: 'var(--color-theme)' },
    { fill: 'var(--color-theme)' },
    { fill: 'var(--color-theme)' },
    { fill: 'var(--color-theme)' },
    { fill: 'var(--color-theme)' },
    { fill: 'var(--color-theme)' },
    { fill: 'var(--color-theme)' },
    { fill: 'transparent' },
    { fill: 'transparent' },
  ]

    function cursorAnimation()
    {
      document.getElementById('cursorSVG').style.display = 'initial';
      setTimeout(() => {
        document.getElementById('cursorPath').animate(cursorFill, {
          duration: 2000,
          easing: 'linear',
          fill: 'forwards',
          iterations: 1,
          delay: 250
        })
        document.getElementById('cursorSVG').animate(cursorMovement, {
          duration: 2000,
          easing: 'ease',
          fill: 'forwards' ,
          iterations: 1,
          delay: 500})
        }, 2000)
    }

    const locateMouse = e => e.clientX;

    window.onmousemove = e => {
      if(mousedown)
      {
        movedItems = true;
        var mouseDelta = (initialMouseLocation - locateMouse(e));
        const maxDelta = windowWidth/2;
        currentPercentage = (mouseDelta/maxDelta) * -25; //adjust integer for sensitivity
        newPercentage = prevLocationPercentage + currentPercentage;
        displayPercentage = Math.max(Math.min(newPercentage, 15), -90);

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

    window.onmouseup = () => {
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