<template>
    <main>
        <span class="spanTransition" id="transition"></span>

        <div class="contact" id="contactClass">
            <div id="clickProtection"></div>

            <div class="contactContent">
                <h1>Connections Connections</h1>
                <p>I am interested in freelancing <span class="bubbleSpan1">oppurtunities</span> big or small. If you would like to work
                    <span class="bubbleSpan2">together</span>, then let me know and we can <span class="bubbleSpan1">discuss</span>. Feel free to 
                    <span class="bubbleSpan2">contact</span> me for any reason however!
                </p>
                
                <p>You may <span class="bubbleSpan1">contact</span> me via the <span class="bubbleSpan2">form</span> below, or you can use my
                    <span class="bubbleSpan1">email</span> or <span class="bubbleSpan2">social media</span>.</p>
                <br>
                <div id="formBox">
                    <form id="contactForm" onsubmit="sendMessage()">
                        <input type="text" id="formName" placeholder="Full Name" required>
                        <input type="text" id="subject" placeholder="Subject" required>
                        <input type="text" id="email" placeholder="Email Adress" required>
                        <input type="submit">
                        <textarea placeholder="Message" id="newMessage" required></textarea>
                    </form>
                </div>
            </div>

            <div class="map">
                <div id="contactInfo">
                    <p>Sergio Sanchez-Alvares</p>
                    <p>Georgia, USA</p>
                    <p><span class="bubbleSpan1">surgosan@gmail.com</span></p>
                </div>
            </div>


            <span class="returnHome" id="contactReturn" @click="homeTransition()">
                <span class="returnLetter">R</span>
                <span class="returnLetter">E</span>
                <span class="returnLetter">T</span>
                <span class="returnLetter">U</span>
                <span class="returnLetter">R</span>
                <span class="returnLetter">N</span>
            </span>
        </div>

        <div class="projects" id="projectClass">
            <div class="projectText">
                <p>
                    My presence in the <span class="bubbleSpan1">computer science</span> industry is quite new. However, this is not my only 
                    <span class="bubbleSpan2">project</span>. There is another <span class="bubbleSpan1">website</span> that I worked on
                    prior to creating my <span class="bubbleSpan2">portfolio</span>. Clicking it will open a new <span class="bubbleSpan1">page</span> 
                    as a preview to the site. I will also continue to add <span class="bubbleSpan1">projects</span> here in the form of
                    <span class="bubbleSpan2">websites</span> and downloadable <span class="bubbleSpan2">files</span>. Hover over the 
                    <span class="bubbleSpan1">projects</span> to pause the <span class="bubbleSpan2">animation</span>.
                </p>
            </div>

            <div class="projectBox" id="project1" @mouseover="pauseCardCouresel()" @mouseout="startCardCouresel()">
                <span class="projectInfo" id="projectInfo1">
                    <p>Coming Soon</p>
                </span>
            </div>

            <div class="projectBox" id="project2" @mouseover="pauseCardCouresel()" @mouseout="startCardCouresel()">
                <span class="projectInfo" id="projectInfo2">
                    <p>Coming Soon</p>
                </span>
            </div>
            
            <div class="projectBox" id="project3" @mouseover="pauseCardCouresel()" @mouseout="startCardCouresel()">
                <span class="projectInfo" id="projectInfo3">
                    <p>Coming Soon</p>
                </span>
            </div>

            <a class="projectBox" id="project4" @mouseover="pauseCardCouresel()" @mouseout="startCardCouresel()">
                <span class="projectInfo" id="projectInfo4">
                    <p>In order to <span class="bubbleSpan2">demonstrate</span> my skills in <span class="bubbleSpan1">Swift</span>, I have created a 
                            <span class="bubbleSpan2">replica</span> of this site for <span class="bubbleSpan1">IOS</span>. Unfortunately, I cannot give you
                            the <span class="bubbleSpan2">code</span> and hope you have a <span class="bubbleSpan1">Mac</span> to run it on, so I have attached a 
                            <span class="bubbleSpan2">downloadable</span> <span class="bubbleSpan1">video</span> to showcase my app.
                    </p>
                </span>
            </a>

            <a class="projectBox" id="project5" @mouseover="pauseCardCouresel()" @mouseout="startCardCouresel()">
                <span class="projectInfo" id="projectInfo5">
                    <p><span class="bubbleSpan1">BunkaBiker</span> put simply, is like AirBnB for <span class="bubbleSpan2">motoryclists</span>. 
                        People offer a part of their home for <span class="bubbleSpan1">riders</span> traveling around. 
                        You can find <span class="bubbleSpan1">BunkaBiker</span> all over the world and the best thing is that it is 
                        always <span class="bubbleSpan2">free</span>!</p>
                </span>
            </a>

            <span class="returnHome" id="projectReturn" @click="homeTransition()">
                <span class="returnLetter">R</span>
                <span class="returnLetter">E</span>
                <span class="returnLetter">T</span>
                <span class="returnLetter">U</span>
                <span class="returnLetter">R</span>
                <span class="returnLetter">N</span>
            </span>
        </div>

        <div class="about" id="aboutClass">

            <div id="clickProtection"></div>

            <div class="aboutBubble" id="programmingBefore" @click="openBubble('programmingBefore', 'programmingPopUp')"></div>
            <div class="aboutPagePopUp" id="programmingPopUp" @click="closeBubble('programmingBefore', 'programmingPopUp', '55%', '10%')">
                <span class="prgBubbleBubble" id="javaBubble"></span>
                <span class="prgBubbleBubble" id="htmlBubble"></span>
                <span class="prgBubbleBubble" id="cssBubble"></span>
                <span class="prgBubbleBubble" id="jsBubble"></span>
                <span class="prgBubbleBubble" id="swiftBubble"></span>
                <span class="affinitySpan" id="javaAffinity"><img class="affinityBarLogo" id="javaLogo" src="../assets/Photos/javaLogo.png" alt="Java Logo"></span>
                <span class="affinitySpan" id="htmlAffinity"><img class="affinityBarLogo" id="htmlLogo" src="../assets/Photos/bigHtmlLogo.png" alt="Html Logo"></span>
                <span class="affinitySpan" id="cssAffinity"><img class="affinityBarLogo" id="cssLogo" src="../assets/Photos/bigCssLogo.png" alt="CSS Logo"></span>
                <span class="affinitySpan" id="jslAffinity"><img class="affinityBarLogo" id="jsLogo" src="../assets/Photos/bigJsLogo.png" alt="JS Logo"></span>
                <span class="affinitySpan" id="swiftAffinity"><img class="affinityBarLogo" id="swiftLogo" src="../assets/Photos/bigSwiftLogo.png" alt="Swift Logo"></span>
                <div class="bubbleText">
                    <p>I began <span class="bubbleSpan1">programming</span> in the fall of 2021. <br>I started off with <span class="bubbleSpan2">Java</span> 
                        and have gotten comfortable with it. 
                        <br>I would say this is my main <span class="bubbleSpan1">programming</span> language since I have the most time with it. I have also 
                        pursued <span class="bubbleSpan2">HTML</span>, <span class="bubbleSpan2">CSS</span>, and <span class="bubbleSpan2">Javascript</span> 
                        on my own and I like to believe I have gotten quite far. I investigated 
                        this trio in spring of 2022, but I only looked over it then. I began to learn it in fall of 2022 through application as well as 
                        trial and error. My last <span class="bubbleSpan1">programming</span> language is <span class="bubbleSpan2">Swift</span>. 
                        It is still quite early, but I can do just about 
                        any backend work that I have needed to experiment with. I will begin focusing on the front end 
                        side of <span class="bubbleSpan2">swift</span> very soon inorder to create applications for websites I build.
                    </p>
                    <p id="returnToAbout">Click <span class="bubbleSpan2">anywhere</span> to go <span class="bubbleSpan1">back</span></p>
                </div>
            </div>

            <div class="aboutBubble" id="musicBefore" @click="openBubble('musicBefore', 'musicPopUp')"></div>
            <div class="aboutPagePopUp" id="musicPopUp" @click="closeBubble('musicBefore', 'musicPopUp', '1%', '27%')">
                <div class="bubbleText" id="musicCenterText">
                    <p>
                        <span class="bubbleSpan1">Music</span> is a major part of my <span class="bubbleSpan2">life</span> and has been for over a decade now. 
                        Starting with <span class="bubbleSpan1">drums</span>, I learned how to keep a tempo and play with others. When I picked up 
                        <span class="bubbleSpan1">bass guitar</span> I learned <span class="bubbleSpan2">notes</span> and <span class="bubbleSpan2">keys</span>.
                        I play in a <span class="bubbleSpan1">band</span> and have a gig <span class="bubbleSpan2">every Saturday</span> unless in cases of 
                        extreme circumstances for <span class="bubbleSpan1">event</span> cancels or simply because we want to spend the holiday at home. I
                        consider <span class="bubbleSpan1">music</span> as my main source of income since I know it will almost always be there if I need it.
                        However, I dont rely on it for an income and I am proud of that because I then do <span class="bubbleSpan1">music</span> simply because I want to.
                    </p>
                    <p id="returnToAbout">Click <span class="bubbleSpan2">anywhere</span> to go <span class="bubbleSpan1">back</span></p>
                </div>
                <div class="musicTxtBox" id="bassBox">
                    <p>
                        I began to learn <span class="bubbleSpan1">bass</span> since I was 12. This means I am nearing one decade of playing this 
                        <span class="bubbleSpan2">instrument</span>. I also play this <span class="bubbleSpan2">instrument</span> in the church
                        choir. I began playing in the church choir in 2016. I have the most experience with the <span class="bubbleSpan1">bass</span> 
                        and have recieve many compliments on my not only my <span class="bubbleSpan2">technique</span>, but also my 
                        unique <span class="bubbleSpan2">style</span>.
                    </p>
                </div>

                <div class="musicTxtBox" id="bajoquintoBox">
                    <p>
                        The <span class="bubbleSpan1">bajoquinto</span> is a hispanic instrument that translates directly to 
                        <span class="bubbleSpan1">"fifth bass."</span> I is played similiar to a regular <span class="bubbleSpan2">guitar</span>, but it
                        is tuned like a <span class="bubbleSpan2">bass guitar</span>. This gives it the ability to play lines from <span class="bubbleSpan2">bass</span> 
                        and the <span class="bubbleSpan2">guitar</span>. I started learning in 2021 and my experience with 
                        <span class="bubbleSpan2">bass</span> has helped pick up this <span class="bubbleSpan1">instrument</span> quickly.
                    </p>
                </div>

                <div class="musicTxtBox" id="tubaBox">
                    <p>
                        I started playing <span class="bubbleSpan1">tuba</span> in 8th grade and I continued throughout highschool in concert and marching 
                        <span class="bubbleSpan2">band</span>. I began to play it in <span class="bubbleSpan1">gigs</span> in 2018
                        and have done so since. It is a popular <span class="bubbleSpan1">instrument</span> when it comes to hispanic 
                        <span class="bubbleSpan2">events</span> which gives people a reason to seek us out when they
                        are planning <span class="bubbleSpan2">events</span>.
                    </p>
                </div>
                
                <div class="musicTxtBox" id="directorBox">
                    <p>
                        I am the <span class="bubbleSpan1">lighting director</span> for our <span class="bubbleSpan2">band</span> which means I control all the 
                        <span class="bubbleSpan1">lights</span> with pre-madescenes on my computer. I also control a large <span class="bubbleSpan1">led panel</span>
                        wall that we hang for certain <span class="bubbleSpan2">events</span>. However, I am somewhat limited when it comes to 
                        controlling and creating new <span class="bubbleSpan2">scenes</span> or looks since I also
                        have to <span class="bubbleSpan1">perform</span> while these are running. I make up for it by creating scenes and looks beforehand. 
                        This way I can press a button and that <span class="bubbleSpan2">scene</span> will come to <span class="bubbleSpan1">life</span>.
                    </p>
                </div>
            </div>

            <div class="aboutBubble" id="photographyBefore" @click="openBubble('photographyBefore', 'photographyPopUp')"></div>
            <div class="aboutPagePopUp" id="photographyPopUp" @click="closeBubble('photographyBefore', 'photographyPopUp', '57.5%', '76%')">
                <div class="bubbleText" id="photoBubbleText">
                    <p>
                        For me, <span class="bubbleSpan1">photography</span> is a side hobby I enduldge in every once in a while. I own a 
                        <span class="bubbleSpan1">Canon 70D</span> that comes with two <span class="bubbleSpan2">lenses</span>. I enjoy the 
                        <span class="bubbleSpan2">quality</span> of <span class="bubbleSpan1">photos</span> this <span class="bubbleSpan1">camera</span>
                        offers. I usually take <span class="bubbleSpan2">photos</span> for fun and to post, but I have found use for these
                        <span class="bubbleSpan2">photos</span> and <span class="bubbleSpan2">skills</span> in website creation. It is fun to 
                        create a website and implement <span class="bubbleSpan1">photos</span> that I <span class="bubbleSpan2">captured</span>.
                    </p>
                    <p id="returnToAbout">Click <span class="bubbleSpan2">anywhere</span> to go <span class="bubbleSpan1">back</span></p>
                </div>
                <div id="photographyGallery">
                    <span class="galleryItem" id="galleryOne"></span>
                    <span class="galleryItem" id="galleryTwo"></span>
                    <span class="galleryItem" id="galleryThree"></span>
                    <span class="galleryItem" id="galleryFour"></span>
                    <span class="galleryItem" id="galleryFive"></span>
                </div>
            </div>

            <div class="aboutBubble" id="educationBefore" @click="openBubble('educationBefore', 'educationPopUp')"></div>
            <div class="aboutPagePopUp" id="educationPopUp" @click="closeBubble('educationBefore', 'educationPopUp', '5%', '10%')">
                <div class="bubbleText" id="educationBubbleText">
                    <p>
                        At first, I wasnt sure what <span class="bubbleSpan2">career</span> I wanted to follow. It wasn't until spring of 2022 that 
                        I took a <span class="bubbleSpan1">computer science</span> course as an <span class="bubbleSpan2">elective</span> and found
                        the field fun. My major for <span class="bubbleSpan1">Dalton State College</span> is physics, but my Spring of 2023
                        <span class="bubbleSpan1">grudation</span> states <span class="bubbleSpan2">computer science</span>. Unfortunately, I cannot
                        finish the <span class="bubbleSpan2">computer science</span> pathway at <span class="bubbleSpan1">Dalton State College</span>.
                        That is why I <span class="bubbleSpan1">graduate</span> in Spring of 2023. The rest of my <span class="bubbleSpan2">degree</span>
                        is found at <span class="bubbleSpan1">Kennesaw State University</span>. I am looking forward to experiencing the 
                        <span class="bubbleSpan2">college life</span> in Kennesaw, as well as having many expierences in the 
                        <span class="bubbleSpan1">computer science</span> field. 
                    </p>
                    <p id="returnToAbout">Click <span class="bubbleSpan2">anywhere</span> to go <span class="bubbleSpan1">back</span></p>
                </div>
            </div>

            <div class="aboutBubble" id="motorcycleBefore" @click="openBubble('motorcycleBefore', 'motorcyclePopUp')"></div>
            <div class="aboutPagePopUp" id="motorcyclePopUp" @mousemove="imageSplice(event)" @click="closeBubble('motorcycleBefore', 'motorcyclePopUp', '1%', '76%')" 
                style="background: url(../assets/Photos/motorcycleOne.JPG); background-size: 100%;">
                <span class="imageSplice" id="motorcycleSplice"></span>
                <div id="motorcycleTwo"></div>
                <div class="bubbleTextCover"></div>
                <div class="bubbleText" id="motorcycleBubbleText">
                    <p>
                        My first <span class="bubbleSpan1">motorycle</span> was a <span class="bubbleSpan1">Honda Ruckus Scooter</span> in 2017. It had a 
                        <span class="bubbleSpan2">50cc engine</span> which meant I could ride this little <span class="bubbleSpan2">bike</span> everywhere
                        but the interstate without a title, registration, insurance, license plate, or even a license! This <span class="bubbleSpan2">bike</span>
                        went up to 40 miles an hour which still got me places. I could safely learn how to ride on the <span class="bubbleSpan1">Ruckus</span> which 
                        allowed me, two years later, to safely transition into a <span class="bubbleSpan1">2018 Honda CBR300R</span>, a small sport bike. This was a
                        fun, small and agile <span class="bubbleSpan1">motorcycle</span> that could travel up to 90 miles an hour. It only cost 
                        <span class="bubbleSpan1">$5</span> to fill up from empty and lasted about 2 weeks. I owned this <span class="bubbleSpan2">bike</span> for 
                        1 year and then purchased my dream bike: <span class="bubbleSpan1">The 2021 Honda Africa Twin</span>. This large 
                        <span class="bubbleSpan2">adventure motorcycle</span> can do it all. From <span class="bubbleSpan2">long distance saddle-time</span>
                        to <span class="bubbleSpan2">off-road air-time</span>. Only at the cost of a devastating <span class="bubbleSpan2">$2</span> extra to my 
                        fill up cost. I enjoy riding these <span class="bubbleSpan1">motorcycles</span> and always try to 
                        <span class="bubbleSpan2">ride</span> safely so that I may <span class="bubbleSpan2">ride</span> again tomorrow.
                    </p>
                    <p id="returnToAbout">Click <span class="bubbleSpan2">anywhere</span> to go <span class="bubbleSpan1">back</span></p>
                </div>
            </div>

            <div class="centerText">
                <a id="aboutGithub" class="centerTextLinks" href="https://github.com/surgosan" target="_blank" rel="noopener noreferrer"></a>
                <a id="aboutInstagram" class="centerTextLinks" href="https://www.instagram.com/sergo.sanchez/" target="_blank" rel="noopener noreferrer"></a>
                <a id="aboutFacebook" class="centerTextLinks" href="https://www.facebook.com/profile.php?id=100007142827416" target="_blank" rel="noopener noreferrer"></a>
                <span id="aboutEmail" class="centerTextLinks" href="" @click="aboutToEmail()"></span>
                <h1>Sergio Sanchez-Alvares</h1>
                <div class="aboutTxtBox" id="aboutTxtBox1">    
                    <p>My name is <span class="aboutMainTextSpan">Sergio Sanchez-Alvares</span>. I live in Georgia, USA 
                        where I attend <span class="aboutMainTextSpan2">Dalton State College</span>. I enjoy 
                        <span class="aboutMainTextSpan">programming</span>, music, photography, and motorcycles. 
                    </p>
                </div>
                <div class="aboutTxtBox" id="aboutTxtBox2">
                    <p>
                        I am well <span class="aboutMainTextSpan">organized</span> and like to work hard and smart. 
                        I enjoy <span class="aboutMainTextSpan2">problem solving</span> and am <span class="aboutMainTextSpan">independent</span>, 
                        but I am always willing to work with others as well. 
                    </p>
                </div>
                <div class="aboutTxtBox" id="aboutTxtBox3">
                    <p>
                        My <span class="aboutMainTextSpan">future plans</span> consist of attending <span class="aboutMainTextSpan2">Kennesaw State University</span>, 
                        deepening my knowledge in <span class="aboutMainTextSpan">programming</span> and music, and also to <span class="aboutMainTextSpan2">travel</span> 
                        to Japan.
                    </p>
                </div>
            </div>
            <span class="returnHome" @click="homeTransition()">
                <span class="returnLetter">R</span>
                <span class="returnLetter">E</span>
                <span class="returnLetter">T</span>
                <span class="returnLetter">U</span>
                <span class="returnLetter">R</span>
                <span class="returnLetter">N</span>
            </span>
        </div>

        <div class="home" id="homeClass">
            <button id="homeButton"><img id="homeButtonPic" src="../assets/Photos/mainLogo.png" alt="Home"></button>
            <div class="navbar">
                <button class="navItem" id="aboutButton" @click="pageTransition('aboutClass')" >About Me</button>
                <button class="navItem" id="projectButton" @click="pageTransition('projectClass')">Projects</button>
                <button class="navItem" id="contactButton" @click="pageTransition('contactClass')">Contact Me</button>
                <button class="navItem" id="startButton" @click="startAnimation()">Start Animation</button>
                <button class="navItem" id="stopButton" @click="stopAnimation()">Stop Animation</button>
            </div>
            <br><br><br><br>
            <h1>Hello,</h1>
            <h1>My Name is <span id="name">Sergio</span>.</h1>
            <h2>Student | Programmer | Musician</h2>
            <RouterLink id="returnHome" to="/" class="link">Return</RouterLink>
            <img  id="selfie">
            <h1 id="fullName">
                <span class="quoteWord">"</span>
                <span class="quoteWord">If </span>
                <span class="quoteWord">Not</span>
                <span class="quoteWord">You</span>
                <span class="quoteWord">,</span>
                <br><br>
                <span class="quoteWord">Then </span>
                <span class="quoteWord">Who</span>
                <span class="quoteWord">?</span>
                <span class="quoteWord">"</span>
            </h1>
            <h2 id="tiredMessage">A bubble is tired.</h2>
            <h2 id="alertMessage">You have alerted a bubble!</h2>

                <a href="https://unsplash.com/@surgosan"
                target="_blank" rel="noopener noreferrer"><div id="homeCard1"><br>Check out my<br> <span id="bluePulseWord">Unsplash</span> 
                        <br>Photos!<span class="cardPhoto"></span></div></a>
                <a href="Sergio-Sanchez-Alvares.pdf" download
                        target="_blank" rel="noopener noreferrer"><div id="homeCard2"><br>Download<br>my<br> 
                            <span id="bluePulseWord">resume!</span>!<span class="cardPhoto" id="cardPic2"></span></div></a>

                <span class="bubble" id="aboutPageBubble" @mouseover="alertBubbles('aboutPageBubble', 'about!','tired1')" @click="pageTransition('aboutClass')">
                    About Me
                    <span class="scare" id="about!">!!</span>
                    <span class="tired" id="tired1">...</span>
                </span>

                <span class="bubble" id="projectPageBubble" @mouseover="alertBubbles('projectPageBubble', 'project!','tired2')" @click="pageTransition('projectClass')">
                    Projects
                    <span class="scare" id="project!">!!</span>
                    <span class="tired" id="tired2">...</span>
                </span>
            
                <span class="bubble" id="contactPageBubble" @mouseover="alertBubbles('contactPageBubble', 'contact!','tired3')" @click="pageTransition('contactClass')">
                    Contact Me
                    <span class="scare" id="contact!">!!</span>
                    <span class="tired" id="tired3">...</span>
                </span>
            </div>
            
            <div id="opener">
                <img id="openLogo" src="../assets/Photos/mainLogo.png" alt="Home">
            </div>
        
    </main>
</template>

<style scoped>
#returnHome {
    position: absolute;
    top: 10%;
    left: 20%;
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

#returnHome:hover {
    border: solid 1.5px var(--color-theme);
    background-color: var(--color-background-soft);
}

main {
    display: inline;
    width: 100%;
    height: 100%;
}
*{
    background-color: #1d1d1d;
    font-family: Georgia;
    color: rgb(246, 234, 221);
    overflow: hidden;
}
p{
    background-color: transparent;
}
input:-webkit-autofill,
input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
}
input[data-autocompleted] {
    background-color: transparent !important;
}
.home{
    height: 35%;
    font-size: 22px;
    text-align: right;
    position: relative;
    line-height: .9;
    padding: .5%;
    border: solid 2px white;
    border-radius: 15px;
    background: rgb(57,54,48);
    z-index: 0;
}
.home h1{
    background-color: transparent;
}
.home h2{
    background-color: transparent;
}
#homeButton{
    color: transparent;
    position: absolute;
    scale: 1.1;
    top: 3%;
    right: 1%;
    border: none;
    background-color: transparent;
}
#homeButtonPic{
    background-color: transparent;
    transition: 1s;
}
#homeButtonPic:hover{
    transform: rotate(1.03turn);
}
.navbar{
    width: 30%;
    height: 25%;
    position: absolute;
    top: 1%;
    right: 7%;
    background: transparent;
    display: flex;
    align-items: center;
    padding: 1%;
    
}
.navItem{
    cursor: pointer;
    width: fit-content;
    height: 75%;
    padding: 1%;
    margin-left: 3%;
    bottom: 0;
    border: solid 2px white;
    border-radius: 15px;
    color: white;
    background-color: rgb(20, 39, 85);
    font-size: 16px;
    font-weight: bold;
    transition: .5s;
}
.navItem:hover{
    background-color: #1d1d1d;
    transform: translate(0, -5%) scale(1);
}
#stopButton{
    position: absolute;
    top: 5%;
    right: 2%;
    width: fit-content;
}
#startButton{
    transform: translate(0, 0%) scale(0);
}
#stopButton:hover{
    transform: translate(0%, 0%);
    background: #1d1d1d;
}
#startButton:hover{
    transform: translate(0%, 0%);
    background: #1d1d1d;
}
#aboutButton , #projectButton, #contactButton{
    transform: scale(0);
}
#name{
    color: rgb(158, 116, 98);
    background-color: transparent;
}
#name:hover{
    animation: colorpulsetext 2s infinite alternate ease-in-out;    
}
@keyframes colorpulsetext {
    100%   { color: rgb(246, 234, 221); }
    0%  { color: rgb(158, 116, 98); }
}
#selfie{
    position: fixed;
    width: 10%;
    top: 5%;
    left: 2%;
    border-radius: 100%;
    background: url(../assets/Photos/Selfie.JPG);
    background-size: cover;
    transition: 2s;
    aspect-ratio: 1;
    animation: selfieBorder 3s infinite linear;
}
#selfie:hover{
    content:url(../assets/Photos/Bee.JPG);
    background-size: cover;
}
@keyframes selfieBorder{
    0% {border: solid 3px rgb(20, 39, 85);}
    50% {border: solid 3px rgb(246, 234, 221);}
    100% {border: solid 3px rgb(20, 39, 85);}
}
#fullName{
    position: fixed;
    bottom: 15%;
    left: 70%;
    right: 5%;
    text-align: center;
    font-size: 250%;
    font-weight: bold;
}
.quoteWord{
    background: rgb(211,211,211);
    -webkit-background-clip: text;
            background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: 1s;
}
.quoteWord:hover{
    background: linear-gradient(30deg, rgb(20, 39, 85), rgb(158, 116, 98));
    -webkit-background-clip: text;
            background-clip: text;
    -webkit-text-fill-color: transparent;
}
#homeCard1{
    font-size: 30px;
    font-weight: bold;
    line-height: 1.5;
    width: 30%;
    margin-left: .5%;
    aspect-ratio: 5/3;
    background-color: rgb(57,54,48);
    padding: 1%;
    position: fixed;
    bottom: 7%;
    left: 0;
    border: solid 2px white;
    border-radius: 15px;
    text-align: left;
    transition: .5s;
    overflow: hidden;
    z-index: -1;
}
#homeCard1:hover{
    transform: translate(0%, -2%);
    background: linear-gradient(rgb(20, 39, 85), rgb(158, 116, 98));
}
#bluePulseWord{
    background-color: transparent;
    color: rgb(158, 116, 98);
}
#bluePulseWord:hover{
    animation: colorpulsetext 1s infinite alternate; 
}
.cardPhoto{
    width: 60%;
    height: 300%;
    right: -25%;
    bottom: -20%;
    position: absolute;
    transform: rotate(15deg);
    border: solid 2px white;
    overflow: hidden;
}
.cardPhoto::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    right: 35%;
    bottom: -5%;
    background-image: url(../assets/Photos/unsplash.JPG);
    background-size: 200%;
    background-position: 0% 22%;
    transform: rotate(-15deg);
    transition: .5s;
}
#homeCard1:hover > .cardPhoto::before{
    transform: translate(2%, 2%) rotate(-15deg);
}
#homeCard2{
    font-size: 30px;
    font-weight: bold;
    line-height: 1.5;
    width: 30%;
    margin-left: .5%;
    aspect-ratio: 5/3;
    background-color: rgb(57,54,48);
    padding: 1%;
    position: fixed;
    bottom: 7%;
    left: 34%;
    border: solid 2px white;
    border-radius: 15px;
    text-align: left;
    transition: .5s;
    overflow: hidden;
    z-index: -1;
}
#homeCard2:hover{
    transform: translate(0%, -2%);
    background: linear-gradient(rgb(20, 39, 85), rgb(158, 116, 98));
}
#cardPic2::before{
    background-image: url(../assets/Photos/dscTower.JPG);
    background-size: 250%;
    background-position: 60% -20%;
}
#homeCard2:hover > .cardPhoto::before{
    transform: translate(2%, 2%) rotate(-15deg);
}
#alertMessage{
    scale: .01;
    position: fixed;
    right: 1%;
    bottom: 0;
    animation: alertMesAnim 2s infinite linear;
    transition: 1s;
    background-color: transparent;
}
#tiredMessage{
    scale: .01;
    position: fixed;
    right: 1%;
    bottom: 5%;
    animation: tiredMesAnim 8s infinite linear;
    background-color: transparent;
    translate: 0 0%;
    transition: 1s;
}
@keyframes tiredMesAnim {
    0%   { color: rgb(100,149,237); }
    50%  { color: rgb(65,105,225); }
    100%   { color: rgb(100,149,237); }
}
@keyframes alertMesAnim {
    0%   { color: rgb(155,17,30); }
    50%  { color: rgb(65,105,225); }
    100%   { color: rgb(155,17,30); }
}
.bubble{
    overflow: visible;
    cursor: pointer;
    font-weight: bold;
    width: fit-content;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    position: fixed;
    left: 0;
    color: white;
    background-color: rgb(20, 39, 85);
    padding: 0.5%;
    border: solid 2px white;
    border-radius: 100px;
    transition: .5s;
}
.bubble:hover{
    background-color: rgb(158, 116, 98);
}
.scare{
    display: none;
    font-size: 35px;
    position: absolute;
    color: rgb(65,105,225);
    text-shadow: white 0px 0 10px;
    background-color: transparent;
    top: 0;
    right: 0;
    -webkit-animation: scarepulsetext .5s infinite alternate;
    animation: scarepulsetext .5s infinite alternate;   
}
.tired{
    display: none;
    font-size: 35px;
    position: absolute;
    color: rgb(65,105,225);
    text-shadow: white 0px 0 10px;
    background-color: transparent;
    top: 0;
    right: 0;
    animation: tired 3s infinite ease-in-out;   
}
@keyframes tired {
    0% { color: white;}
    50% { color: black;}
    100% { color: white;}
}
@-webkit-keyframes scarepulsetext {
    0%   { color: rgb(155,17,30); }
    100%  { color: rgb(65,105,225); }
}
@keyframes scarepulsetext {
    100%   { color: rgb(155,17,30); }
    0%  { color: rgb(65,105,225); }
}
#aboutPageBubble{
    background-image: url();
    background-size: cover;
    animation: bubbleMover1 25s infinite ease-in-out ;
}
#projectPageBubble{
    animation: bubbleMover2 25s infinite ease-in-out;
}
#contactPageBubble{
    animation: bubbleMover3 25s infinite ease-in-out; 
}
@keyframes bubbleMover1{
    0%      {top: 75%; left: 15%;}
    20%   {top: 5%; left: 40%;}
    40%     {top: 75%; left: 85%;}
    60%   {top: 40%; left: 5%;}
    80%     {top: 40%; left: 90%;}
    100%   {top: 75%; left: 15%;}
}
@keyframes bubbleMover2{
    0%   {top: 5%; left: 40%;}
    20%     {top: 75%; left: 85%;}
    40%   {top: 40%; left: 5%;}
    60%     {top: 40%; left: 90%;}
    80%   {top: 75%; left: 15%;}
    100%      {top: 5%; left: 40%;}
}
@keyframes bubbleMover3{
    0%     {top: 40%; left: 90%;}
    20%   {top: 75%; left: 15%;}
    40%      {top: 5%; left: 40%;}
    60%   {top: 75%; left: 85%;}
    80%     {top: 40%; left: 5%;}
    100%   {top: 40%; left: 90%;}
}


.about{
    overflow: none;
    position: fixed;
    width: 101.5%;
    height: 100.5vh;
    background: linear-gradient(30deg, rgb(158, 116, 98),rgb(20, 39, 85));
    transform: translate(-1%, -1%);
    display: initial;
    left: -150%;
    z-index: +10;
}   
.returnHome{
    cursor: pointer;
    position: absolute;
    background: linear-gradient(90deg, transparent, white);
    top: 0;
    right: 0;
    width: 3%;
    height: 100vh;
    writing-mode: vertical-lr;
    text-align: center;
}
.returnHome:hover > *{
    font-size: 35px;
}
.returnLetter{
    background: transparent;
    font-size: 30px;
    font-weight: bold;
    margin-top: 5%;
    margin-bottom: 5%;
    transition: .5s;
}
.returnLetter:hover{
    animation: scarepulsetext 2s infinite ease alternate-reverse;
}
#clickProtection{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: transparent;
    z-index: -10;
}
.aboutBubble{
    cursor: pointer;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 110%;
    font-weight: bold;
    color: rgb(155,17,30);
    left: 10%;
    top: 25%;
    width: 10%;
    aspect-ratio: 1;
    border: solid 2px white;
    border-radius: 100%;
    transition: 1s;
    z-index: +1;
}
.aboutBubble:hover{
    transform: scale(1.05);
}
.aboutBubble p{
    transition: .5s;
}
.aboutPagePopUp{
    opacity: 0%;
    z-index: -1;
    overflow: hidden;
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 20px;
    height: 100vh;
    padding: 2%;
    background: linear-gradient(-30deg, rgb(20, 39, 85), rgb(158, 116, 98));
    border-radius: 0%;
    transition: 1s;
}
.aboutPagePopUp p{
    color: rgb(246, 234, 221);
}
#programmingBefore{
    left: 55%;
    top: 10%;
    background: url(../assets/Photos/keyboard.JPG);
    background-size: 150%;
    background-position: 40%;
    animation: bubbleNotification 10s infinite linear -8s;
}
#musicBefore{
    left: 1%;
    top: 27%;
    background: url(../assets/Photos/Epiphone.JPG);
    background-size: cover;
    background-position: 40%;
    animation: bubbleNotification 10s infinite linear -6s;
}
#photographyBefore{
    left: 84%;
    top: 76%;
    background: url(../assets/Photos/carmenBranch.JPG);
    background-size: 150%;
    background-position: 50% ;
    animation: bubbleNotification 10s infinite linear -4s;
}
#educationBefore{
    left: 5%;
    top: 10%;
    background: url(../assets/Photos/education.JPG);
    background-size: cover;
    background-position: 30% 50%;
    animation: bubbleNotification 10s infinite linear -2s;
}
#motorcycleBefore{
    left: 1%;
    top: 76%;
    background: url(../assets/Photos/senshiRR.JPG);
    background-size: cover;
    background-position: 40%;
    animation: bubbleNotification 10s infinite linear;
}
@keyframes bubbleNotification {
    0% {translate:  0 -10%;}
    2% {translate: 0 0%;}
    4% {translate: 0 -6%;}
    6% {translate: 0 0%;}
    8% {translate: 0 -4%;}
    10% {translate: 0 0%;}
    20% {translate: 0 0%;}
    40% {translate: 0 0%;}
    60% {translate: 0 0%;}
    80% {translate: 0 0%;}
    100% {translate: 0 0%;}
}
#programmingPopUp{
    overflow: hidden;
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 20px;
    height: 100.5vh;
    padding: 2%;
    background: linear-gradient(150deg, rgb(20, 39, 85), rgb(158, 116, 98));
    border-radius: 0%;
    transition: 1s;
}
.prgBubbleBubble{
    position: absolute;
    left: -80%;
    width: 50%;
    aspect-ratio: 1;
    padding: 1%;
    border: solid 3px white;
    border-radius: 100%;
}
#returnToAbout{
    text-align: right;
}
#javaBubble{
    background: url(../assets/Photos/bigJavaLogo.png);
    background-color: rgb(100,149,237);
    background-repeat: no-repeat;
    background-size: 95%;
}
#htmlBubble{
    width: 25%;
    top: 0%;
    background: url(../assets/Photos/bigHtmlLogo.png);
    background-color: white;
    background-repeat: no-repeat;
    background-size: 95%;
}
#cssBubble{
    width: 25%;
    top: 40%;
    background: url(../assets/Photos/bigCssLogo.png);
    background-color: white;
    background-repeat: no-repeat;
    background-size: 95%;
}
#jsBubble{
    width: 15%;
    top: 4%;
    background: url(../assets/Photos/bigJsLogo.png);
    background-color: rgb(243, 219, 28);
    background-repeat: no-repeat;
    background-size: 95%;
}
#swiftBubble{
    width: 15%;
    top: 55%;
    background: url(../assets/Photos/bigSwiftLogo.png);
    background-color: rgb(239, 95, 44);
    background-repeat: no-repeat;
    background-size: 95%;
}
@keyframes backgroundBubbleX{
    0% {left: -60%;}
    100% { left: 150%;}
}
@keyframes backgroundBubbleX2{
    100% {left: 150%;}
    0% {left: -60%;}
}
.affinitySpan{
    overflow: visible;
    position: absolute;
    bottom: 0;
    width: 5%;
    height: 90%;
    transition: 4s;
}
.affinityBarLogo{
    position: absolute;
    top:-15%;
    left: -36%;
    width: 150%;
    background: white;
    border-radius: 100%;
    aspect-ratio: 1;
    padding: 10%;
}
#javaAffinity{
    left: 10%;
    height: 0;
    background: linear-gradient(0deg, rgb(20,100,188), rgb(244, 68, 52));
}
#javaLogo{
    background: linear-gradient(180deg, rgb(20,100,188), rgb(244, 68, 52));
}
#htmlAffinity{
    left: 25%;
    height: 0;
    background: linear-gradient(0deg, white, black);
}
#htmlLogo{
    background: linear-gradient(180deg, white, black);
}
#cssAffinity{
    left: 45%;
    height: 0;
    background: linear-gradient(180deg, white, black);
}
#cssLogo{
    background: linear-gradient(0deg, white, black);
}
#jslAffinity{
    left: 65%;
    height: 0;
    background: linear-gradient(0deg, rgb(243, 219, 28), white);
}
#jsLogo{
    background: linear-gradient(180deg, rgb(243, 219, 28), white);
}
#swiftAffinity{
    left: 80%;
    height: 0;
    background: linear-gradient(180deg, rgb(239, 95, 44), rgb(249, 158, 49));
}
#swiftLogo{
    background: linear-gradient(0deg, rgb(239, 95, 44), rgb(249, 158, 49));
}
.bubbleText{
    background: rgb(57,54,48);
    position: absolute;
    text-align: center;
    top: 30%;
    left: 20%;
    right: 25%;
    padding: 1%;
    border: solid 2px white;
    border-radius: 10px;
}
.bubbleText:hover{
    z-index: +1;
}
.bubbleSpan1, .bubbleSpan2{
    background-color: transparent;
    font-weight: bold;
}
.bubbleSpan1{
    animation: aboutMainTextSpan 6s infinite ease-in-out;
}
.bubbleSpan2{
    animation: aboutMainTextSpan2 6s infinite ease-in-out 3s;
}
#programmingPopUp p{
    background-color: transparent;
    vertical-align: middle;
    line-height: 1.5;
    transition: unset;
}
#musicCenterText:hover > .musicTxtBox{
    scale: 0.95;
}
#musicPopUp{
    z-index: 0;
}
.musicTxtBox{
    position: absolute;
    width: 25%;
    aspect-ratio: 1.75/1;
    border: solid 2px white;
    border-radius: 10px;
    padding: 1%;
    transition: .5s;
    text-shadow: #1d1d1d 0px 0px 10px;
    display: flex;
    align-items: center;
    line-height: 1.25;
}
#bassBox{
    right: 20%;
    top: 10%;
    background: url(../assets/Photos/bass.JPG);
    background-color: #1d1d1d;
    background-size: cover;
    background-position: 10%;
}
#bajoquintoBox{
    right: 10%;
    bottom: 12%;
    background: url(../assets/Photos/bajoQuinto.JPG);
    background-color: #1d1d1d;
    background-size: cover;
    background-position: 10%;
}
#tubaBox{
    left: 5%;
    top: 4%;
    background: url(../assets/Photos/tuba.JPG);
    background-color: #1d1d1d;
    background-size: cover;
    background-position: 10%;
}
#directorBox{
    left: 15%;
    bottom: 10%;
    background: url(../assets/Photos/director.JPG);
    background-color: #1d1d1d;
    background-size: cover;
    background-position: 0%;
    font-size: 90%;
}
#photographyGallery{
    position: absolute;
    left: 0;
    bottom: -5%;
    width: 100%;
    height: 70%;
    border: solid 2px white;
    z-index: -1;
}
#photographyGallery:hover ~ .galleryItem{
    animation-play-state: paused;
}
.galleryItem{
    position: absolute;
    top: 8%;
    left: -50%;
    width: 45%;
    aspect-ratio: 2/1;
    background-color: white;
    border: solid 2px white;
    border-radius: 10px;
}
#galleryOne{
    background: url(../assets/Photos/galleryOne.JPG);
    background-size: cover;
    background-position: 0 100%;
}
#galleryTwo{
    background: url(../assets/Photos/galleryTwo.JPG);
    background-size: cover;
    background-position: 0 100%;
}
#galleryThree{
    background: url(../assets/Photos/galleryThree.JPG);
    background-size: cover;
    background-position: 0;
}
#galleryFour{
    background: url(../assets/Photos/galleryFour.JPG);
    background-size: cover;
    background-position: 0;
}
#galleryFive{
    background: url(../assets/Photos/galleryFive.JPG);
    background-size: cover;
    background-position: 0;
}
@keyframes gallery{
    0% {left: -45%;}
    100% {left: 150%;}
}
#photoBubbleText{
    position: absolute;
    top: 5%;
}
#educationPopUp{
    background: url(../assets/Photos/dscTower.JPG);
    background-size: cover;
    background-position: 0% 30%;
}
#educationBubbleText{
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 45%;
    height: 100vh;
    top: -1%;
    left: -100%;
    padding-right: 20%;
    padding-left: 5%;
    transition: 1.5s;
    clip-path: polygon(0 0, 95% 0, 60% 100%, 0% 100%);
}
#motorcyclePopUp{
    display: initial;
    background: #1d1d1d;
}
.bubbleTextCover{
    position: absolute;
    left: 0;
    top: 25%;
    width: 101%;
    height: 60%;
    background-color: transparent;
    z-index: +6;
}
#motorcycleBubbleText{
    z-index: +5;
    transition: .5s;
}
.bubbleTextCover:hover + #motorcycleBubbleText{
    opacity: 10%;
}
#motorcycleTwo{
    position: absolute;
    left: 0;
    top: 0;
    width: 101%;
    height: 101vh;
    background: url(../assets/Photos/motorcycleTwo.JPG);
    background-size: cover;
    background-position: 0;
    background-color: #1d1d1d;
    z-index: +1;
    clip-path: none;
    
}
.imageSplice{
    position: absolute;
    top: 0;
    width: 5px;
    height: 100vh;
    background-color: white;
    z-index: +2;
}
.centerText{
    position: absolute;
    text-align: center;
    width: 80%;
    height: 55%;
    left: 8%;
    top: 27.5%;
    background-color: rgb(57,54,48);
    padding: 1%;
    border: solid 2px white;
    border-radius: 20px;
}
.centerTextLinks{
    position: absolute;
    width: 4%;
    aspect-ratio: 1;
    left: 5%;
    top: 5%;
    background: url(../assets/Photos/gitHubLogo.png);
    background-size: cover;
    border: solid 2px white;
    border-radius: 100%;
    background-color: white;
    transition: .5s;
}
.centerTextLinks:hover{
    transform: translate(0, -5%);
    animation: aboutSocialsHover 1s linear;
    animation-iteration-count: 1;
}
@keyframes aboutSocialsHover{
    0% {transform: translate(0, 0%) rotate(20deg);}
    20% {transform: translate(0, -5%) rotate(-20deg);}
    40% {transform: translate(0, -5%) rotate(20deg);}
    60% {transform: translate(0, -5%) rotate(-20deg);}
    80% {transform: translate(0, -5%) rotate(20deg);}
    100%{transform: translate(0, -5%) rotate(0deg);}
}
#aboutInstagram{
    left: 20%;
    background: url(../assets/Photos/instaLogo.png);
    background-size: cover;
}
#aboutFacebook{
    left: 75%;
    background: url(../assets/Photos/facebookLogo.png);
    background-size: cover;
}
#aboutEmail{
    cursor: pointer;
    left: 90%;
    background: url(../assets/Photos/emailLogo.png);
    background-size: cover;
}
.centerText h1{
    background-color: transparent;
    color: rgb(246, 234, 221);
    font-size: 40px;
    text-decoration: solid underline rgb(20, 39, 85);
}
.aboutTxtBox{
    position: absolute;
    width: 28%;
    height: 65%;
    bottom: 3.5%;
    padding: 1%;
    display: flex;
    align-items: center;
    border: solid 2px rgb(111, 111, 111);
    border-radius: 10px;
    transition: .5s;
}
.aboutTxtBox:hover{
    border: solid 2px white;
    background: linear-gradient(150deg, rgb(20, 39, 85), rgb(158, 116, 98));
}
#aboutTxtBox1{
    left: 2%;
}
#aboutTxtBox2{
    left: 35%;
}
#aboutTxtBox3{
    right: 2%;
}
.aboutTxtBox p{
    background-color: transparent;
    color: white;
    font-size: 19px;
    line-height: 2.5;
}
.aboutMainTextSpan{
    font-weight: bold;
    color: rgb(246, 234, 221);
    background-color: transparent;
    border: solid 2px transparent;
    animation: aboutMainTextSpan 6s infinite ease-in-out;
}
@keyframes aboutMainTextSpan{
    0% {color: rgb(246, 234, 221)}
    50% {color: rgb(158, 116, 98)}
    100% {color: rgb(246, 234, 221)}
}
.aboutMainTextSpan2{
    font-weight: bold;
    color: rgb(246, 234, 221);
    background-color: transparent;
    border: solid 2px transparent;
    animation: aboutMainTextSpan2 6s infinite ease-in-out 3s;
}
@keyframes aboutMainTextSpan2{
    0% {color: rgb(246, 234, 221)}
    50% {color: rgb(100,149,237)}
    100% {color: rgb(246, 234, 221)}
}


.projects{
    overflow: none;
    position: fixed;
    left: -150%;
    top: 0;
    width: 101%;
    height: 101vh;
    background: linear-gradient(30deg, rgb(20, 39, 85), rgb(158, 116, 98));
    transform: translate(-1%, -1%);
    scale: 1;
    display: initial;
    z-index: +10;
}   
.returnHome{
    cursor: pointer;
    position: absolute;
    background: linear-gradient(90deg, transparent, white);
    top: 0;
    right: 0;
    width: 3%;
    height: 100vh;
    writing-mode: vertical-lr;
    text-align: center;
}
.returnHome:hover > *{
    font-size: 35px;
}
.returnLetter{
    background: transparent;
    font-size: 30px;
    font-weight: bold;
    margin-top: 5%;
    margin-bottom: 5%;
    transition: .5s;
}
.returnLetter:hover{
    animation: scarepulsetext 2s infinite ease alternate-reverse;
}
#projectReturn{
    left: 1%;
    top: 1%;
    transform: rotate(180deg);
}
.projectText{
    position: absolute;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 80%;
    aspect-ratio: 6/1;
    left: 10%;
    top: 10%;
    background-color: rgb(57,54,48);
    border: solid 2px white;
    border-radius: 20px;
}
.projectText p{
    padding: 1%;
    font-size: 25px;
    line-height: 1.5;
}
.projectBox{
    position: absolute;
    left: 30%;
    top: 50%;
    width: 40%;
    aspect-ratio: 2/1;
    border: solid 2px white;
    border-radius: 10px;
    transition: .5s;
}
.projectBox:hover > .projectInfo{
    left: 0;
}
.projectInfo{
    position: absolute;
    left: -75%;
    top: 0;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: left;
    padding-left: 5%;
    width: 65%;
    height: 100%;
    background-color: rgb(57,54,48);
    transition: .5s;
    clip-path: polygon(0 0, 100% 0, 40% 100%, 0% 100%);
}
.projectInfo p{
    width: 50%;
    left: 0;
}
#project1{
    cursor: no-drop;
    transform: rotate(2deg);
    background: url(../assets/Photos/comingSoon.png);
    background-size: cover;
    background-position: 40%;
    animation: projectCouresel 25s infinite linear -25s;
}
#project2{
    cursor: no-drop;
    transform: rotate(-2deg);
    background: url(../assets/Photos/comingSoon.png);
    background-size: cover;
    background-position: 40%;
    animation: projectCouresel 25s infinite linear -18.75s;
}
#project3{
    cursor: no-drop;
    transform: rotate(4deg);
    background: url(../assets/Photos/comingSoon.png);
    background-size: cover;
    background-position: 40%;
    animation: projectCouresel 25s infinite linear -12.5s;
}
#project4{
    cursor: pointer;
    transform: rotate(-4deg);
    background: url(../assets/Photos/swiftApp.JPG);
    background-size: cover;
    background-position: 40%;
    animation: projectCouresel 25s infinite linear -6.25s;
}
#project5{
    cursor: pointer;
    background: url(../assets/Photos/babHome.png);
    background-size: cover;
    background-position: 40%;
    animation: projectCouresel 25s infinite linear;
}
.projectBox:hover {
    scale: 1.15;
}
@keyframes projectCouresel{
    0% {transform: scale(1.1) rotate(0) translate(0); z-index: +5;}
    21% {transform: scale(1.1) rotate(0) translate(0); z-index: +5;}

    23% {transform: scale(1) rotate(0) translate(55%); z-index: +5;}
    23.5% {transform: scale(1) rotate(0) translate(55%); z-index: -4;}

    25% {transform: scale(1) rotate(6deg) translate(0); z-index: -4;} 
    46% {transform: scale(1) rotate(6deg) translate(0); z-index: -4;}

    47% {transform: scale(1) rotate(6deg) translate(-55%); z-index: -4;}

    50% {transform: scale(1) rotate(-8deg) translate(0); z-index: -3;}
    71% {transform: scale(1) rotate(-9deg) translate(0); z-index: -3;}

    73% {transform: scale(1) rotate(-8deg) translate(-55%); z-index: -3;}

    75% {transform: scale(1) rotate(4deg) translate(0); z-index: -2;}
    96% {transform: scale(1) rotate(4deg) translate(0); z-index: -2;}

    98% {transform: scale(1) rotate(4deg) translate(-55%); z-index: -2;}

    100% {transform: scale(1.1) rotate(0deg) translate(0); z-index: +5;}
}


.contact{
    overflow: none;
    position: fixed;
    left: -150%;
    top: 0;
    width: 101%;
    height: 101vh;
    background: linear-gradient(30deg, rgb(20, 39, 85), rgb(158, 116, 98));
    transform: translate(-1%);
    display: initial;
    z-index: +10;
}
#contactReturn{
    position: absolute;
    width: 100%;
    height: 5%;
    writing-mode: horizontal-tb;
    left: 0;
    top: 94%;
    background: linear-gradient(transparent, white);
}
#contactReturn .returnLetter{
    margin-left: 5%;
    margin-right: 5%;
}
.contactContent{
    position: absolute;
    left: 1%;
    top: 0;
    width: 60%;
    height: 100vh;
    padding: 1%;
    text-align: center;
}
.contactContent h1{
    color: rgb(246, 234, 221);
    text-decoration: solid white underline;
}
.contactContent p{
    color: rgb(246, 234, 221);
    font-size: 19px;
}
#formBox{
    width: 99%;
    height: 55%;
    display: flex;
    justify-content: center;
}
#contactForm{
    width: 100%;
    padding: 1%;
    padding-top: 2%;
}
#formBox input, textarea{
    width: 45%;
    height: 8.5%;
    padding: 1%;
    margin-top: 1%;
    margin-bottom: 1%;
    margin-left: 1%;
    margin-right: 1%;
    background-color: transparent;
    color: rgb(246, 234, 221);
    resize: none;
    font-size: 15px;
    text-align: center;
    border: solid 2px white;
    border-radius: 10px;
}
#formBox textarea{
    width: 95%;
    height: 55%;
    text-align: left;
}
#formBox [type='submit']{
    cursor: pointer;
    height: 14.5%;
    transition: .5s;
    font-weight: bold;
    animation: selfieBorder 5s infinite ease;
}
#formBox [type='submit']:hover{
    scale: 1.02;
}
.map{
    position: absolute;
    right: 0;
    top: 0;
    width: 40%;
    height: 100vh;
    background: url(../assets/Photos/Map.png);
    background-size: cover;
    background-position: 0% 35%;
    z-index: -1;
}
#contactInfo{
    position: absolute;
    top: 5%;
    left: 12%;
    width: 85%;
    height: 20%;
    border: solid 2px white;
    border-radius: 10px;
    text-align: center;
}
#contactInfo p{
    color: rgb(246, 234, 221);
    font-size: 19px;
    line-height: 1.1;
}
.spanTransition{
    position: fixed;
    left: -150%;
    top: 0;
    width: 140%;
    height: 100vh;
    background: linear-gradient(30deg, rgb(20, 39, 85), rgb(158, 116, 98));
    z-index: +11;
    transition: 1s;
    clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
}
#opener{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(210deg, rgb(20, 39, 85), rgb(158, 116, 98));
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s;
}
#openLogo{
    background: transparent;
    scale: 1.3;
    border: solid 2px rgb(246, 234, 221);
    border-radius: 100%;
    animation: openSpin 2s infinite linear;
}
@keyframes openSpin {
    0% {transform: rotate(0);}
    60% {transform: rotate(0);}
    80% {transform: rotate(180deg);}
    100% {transform: rotate(360deg);}
}
</style>

<script setup>
import { RouterLink } from 'vue-router';

var animationState = false;
function checkAnimationStopped()
{
    var startButton = document.getElementById("startButton");
    var stopButton = document.getElementById("stopButton");
    var startStyle =  window.getComputedStyle(startButton, null);
    var stopStyle =  window.getComputedStyle(stopButton, null);
    var stopped = startStyle.getPropertyValue("display");
    var started = stopStyle.getPropertyValue("display");
    
    if(stopped == "translate(0, 0) scale(1)" ||  started == "translate(0, -5%) scale(0)")
    {
        document.getElementById("aboutPageBubble").style.transform = "scale(0)";
        document.getElementById("projectPageBubble").style.transform = "scale(0)";
        document.getElementById("contactPageBubble").style.transform = "scale(0)";

        document.getElementById("tiredMessage").style.transform = "scale(.01)";
        document.getElementById("alertMessage").style.transform = "scale(.1)";
    }
    else{
    }
}

function startAnimation()
{
    animationState = false;
    setTimeout(() =>
    {
        document.getElementById("startButton").style.transform = "translate(0, -5%) scale(0)";
    }, 0)

    setTimeout(() =>
    {
        document.getElementById("contactButton").style.transform = "scale(0)";
        
    }, 250)

    setTimeout(() =>
    {
        document.getElementById("projectButton").style.transform = "scale(0)";
    }, 500)

    setTimeout(() =>
    {
        document.getElementById("aboutButton").style.transform = "scale(0)";
        
    }, 750)

    setTimeout(() =>
    {
        document.getElementById("aboutPageBubble").style.transform = "scale(1)";
        document.getElementById("projectPageBubble").style.transform = "scale(1)";
        document.getElementById("contactPageBubble").style.transform = "scale(1)";
        document.getElementById("stopButton").style.transform = "translate(0, 0) scale(1)";
    }, 1000)

}

function stopAnimation()
{
    animationState = true;
    document.getElementById("aboutPageBubble").style.transform = "scale(0)";
    document.getElementById("projectPageBubble").style.transform = "scale(0)";
    document.getElementById("contactPageBubble").style.transform = "scale(0)";

    document.getElementById("tiredMessage").style.transform = "scale(.01)";
    document.getElementById("alertMessage").style.transform = "scale(.1)";

    document.getElementById("stopButton").style.transform = "translate(0, -5%) scale(0)";

    setTimeout(() =>
    {
        document.getElementById("startButton").style.transform = "translate(0, 0) scale(1)";
    }, 1000)

    setTimeout(() =>
    {
        document.getElementById("contactButton").style.transform = "scale(1)";
    }, 1250)

    setTimeout(() =>
    {
        document.getElementById("projectButton").style.transform = "scale(1)";
    }, 1500)

    setTimeout(() =>
    {
        document.getElementById("aboutButton").style.transform = "scale(1)";
    }, 1750)
}

function alertBubbles(bubbleId, alertId, tiredId)
{    
    let alerted = false;
    var alertElement = document.getElementById(alertId);
    var tiredElement = document.getElementById(tiredId);

    var tiredStyle =  window.getComputedStyle(tiredElement, null);
    var alertedStyle = window.getComputedStyle(alertElement, null);

    var alertDisplay = alertedStyle.getPropertyValue("display");
    var tiredDisplay = tiredStyle.getPropertyValue("display");
    
    if(alertDisplay == 'none' && tiredDisplay == 'none')
    {   
        alerted = true;
        document.getElementById(bubbleId).style.transform = 'scale(0)';
        document.getElementById("alertMessage").style.transform = "scale(100)";
        setTimeout(() => {
            document.getElementById(alertId).style.display = 'initial';
            document.getElementById(bubbleId).style.animationDuration = '10s';
            document.getElementById(bubbleId).style.transform = 'scale(1)';

        }, 2000);
        
        setTimeout(() => {
            document.getElementById(bubbleId).style.transform = 'scale(0)';

            setTimeout(() => {
                    document.getElementById(bubbleId).style.transform = 'scale(1)'
                    document.getElementById(bubbleId).style.animationDuration = '25s'
                    document.getElementById(alertId).style.display = 'none';
                    document.getElementById("tiredMessage").style.transform = "scale(.01)";
                    document.getElementById("alertMessage").style.transform = "scale(.1)";
                    resting(tiredId);
                    if(animationState == true)
                    {
                        stopAnimation();
                        document.getElementById(bubbleId).style.transform = 'scale(0)';
                    }
            }, 2000);
            
            if(animationState == true)
            {
                stopAnimation();
                document.getElementById(bubbleId).style.transform = 'scale(0)';
            }
        }, 10000);
    }

    var alertMessage = document.getElementById('alertMessage');
    var bubble1Tired = document.getElementById("tired1");
    var bubble2Tired = document.getElementById("tired2");
    var bubble3Tired = document.getElementById("tired3");
    var alertMessageStyle =  window.getComputedStyle(alertMessage, null);
    var bubbleTiredStyle1 =  window.getComputedStyle(bubble1Tired, null);
    var bubbleTiredStyle2 =  window.getComputedStyle(bubble2Tired, null);
    var bubbleTiredStyle3 =  window.getComputedStyle(bubble3Tired, null);
    var alert1 = alertMessageStyle.getPropertyValue("scale");
    var tired1 = bubbleTiredStyle1.getPropertyValue("display");
    var tired2 = bubbleTiredStyle2.getPropertyValue("display");
    var tired3 = bubbleTiredStyle3.getPropertyValue("display");
    

    if(alerted == true)
    {
        if(tired1 != "none" || tired2 != "none" || tired3 != "none" )
        {
            document.getElementById("tiredMessage").style.transform = "scale(100) translateY(0%)";
        }
    }
}

function allRested()
{
    var bubble1Tired = document.getElementById("tired1");
    var bubble2Tired = document.getElementById("tired2");
    var bubble3Tired = document.getElementById("tired3");
    var bubbleTiredStyle1 =  window.getComputedStyle(bubble1Tired, null);
    var bubbleTiredStyle2 =  window.getComputedStyle(bubble2Tired, null);
    var bubbleTiredStyle3 =  window.getComputedStyle(bubble3Tired, null);
    var tired1 = bubbleTiredStyle1.getPropertyValue("display");
    var tired2 = bubbleTiredStyle2.getPropertyValue("display");
    var tired3 = bubbleTiredStyle3.getPropertyValue("display");

    if(tired1 == "none" && tired2 == "none" && tired3 == "none")
    {
        return true;
    }
    else
    {
        return false;
    }
}
//timing is off. Need to create function that checks in current time: states of tired and alerted displays
function resting(tiredId)
{
if(animationState == false)
{
    var bubble1 = document.getElementById('about!');
    var bubble2 = document.getElementById('project!');
    var bubble3 = document.getElementById('contact!');
    var bubbleStyle1 =  window.getComputedStyle(bubble1, null);
    var bubbleStyle2 =  window.getComputedStyle(bubble2, null);
    var bubbleStyle3 =  window.getComputedStyle(bubble3, null);
    var alert1 = bubbleStyle1.getPropertyValue("display");
    var alert2 = bubbleStyle2.getPropertyValue("display");
    var alert3 = bubbleStyle3.getPropertyValue("display");

    var bubble1Tired = document.getElementById("tired1");
    var bubble2Tired = document.getElementById("tired2");
    var bubble3Tired = document.getElementById("tired3");
    var bubbleTiredStyle1 =  window.getComputedStyle(bubble1Tired, null);
    var bubbleTiredStyle2 =  window.getComputedStyle(bubble2Tired, null);
    var bubbleTiredStyle3 =  window.getComputedStyle(bubble3Tired, null);
    var tired1 = bubbleTiredStyle1.getPropertyValue("display");
    var tired2 = bubbleTiredStyle2.getPropertyValue("display");
    var tired3 = bubbleTiredStyle3.getPropertyValue("display");
    
    if(alert1 != "none" || alert2 != "none" || alert3 != "none")
    {
        document.getElementById("tiredMessage").style.transform = "scale(100) translateY(0%)";
    }
    if(alert1 == "none" && alert2 == "none" && alert3 == "none")
    {
        document.getElementById("alertMessage").style.transform = "scale(0.1)";
        document.getElementById("tiredMessage").style.transform = "scale(100) translateY(150%)";

    }
    else
    {
        document.getElementById("tiredMessage").style.transform = "scale(100) translateY(0%)";
    }

    document.getElementById(tiredId).style.display = 'initial'
    setTimeout(() =>
    {
        document.getElementById(tiredId).style.display = 'none';
        if(allRested())
        {
            document.getElementById("tiredMessage").style.transform = "scale(.01) translateY(0%)";
        }
        if(animationState == true)
            {
                stopAnimation();
                document.getElementById(bubbleId).style.transform = 'scale(0)';
            }
    }, 15000);
}
}

//____________________________________________________________________________________________________

function openBubble(bubbleId, popUpId,)
{
    
    document.getElementById('clickProtection').style.zIndex = '+10';

    document.getElementById(bubbleId).style.animation = "none"
    document.getElementById(bubbleId).style.width = '100%';
    document.getElementById(bubbleId).style.left = '0';
    document.getElementById(bubbleId).style.top = '-1%'
    document.getElementById(bubbleId).style.zIndex = '+5'
    document.getElementById(popUpId).style.zIndex = '+5';
    
    setTimeout(() => {
        document.getElementById(bubbleId).style.borderRadius = '0'
    }, 40)

    setTimeout(() => {
        document.getElementById(bubbleId).style.height = '101vh';
    }, 75);
    
    setTimeout(() => {
        document.getElementById(popUpId).style.opacity = '100%';
    }, 2000);
    setTimeout(() => {
        document.getElementById(bubbleId).style.opacity = '75%';
    }, 2500);
    setTimeout(() => {
        document.getElementById(bubbleId).style.zIndex = '-2';
        document.getElementById(bubbleId).style.opacity = '0';
        document.getElementById('clickProtection').style.zIndex = '-10';
    }, 3000);


    if(popUpId == 'programmingPopUp')
    {
        document.getElementById('javaBubble').style.animation = 'backgroundBubbleX 50s infinite linear alternate 0s';
        document.getElementById('htmlBubble').style.animation = 'backgroundBubbleX 50s infinite linear alternate-reverse 5s';
        document.getElementById('cssBubble').style.animation = 'backgroundBubbleX 50s infinite linear alternate 20s';
        document.getElementById('jsBubble').style.animation = 'backgroundBubbleX 50s infinite linear alternate-reverse 25s';
        document.getElementById('swiftBubble').style.animation = 'backgroundBubbleX 50s infinite linear alternate 40s';

        setTimeout(() => {
            document.getElementById('javaAffinity').style.height = '85%';
        }, 3000);
        setTimeout(() => {
            document.getElementById('htmlAffinity').style.height = '75%';
        }, 3250);
        setTimeout(() => {
            document.getElementById('cssAffinity').style.height = '75%';
        }, 3500);
        setTimeout(() => {
            document.getElementById('jslAffinity').style.height = '75%';
        }, 3750);
        setTimeout(() => {
            document.getElementById('swiftAffinity').style.height = '55%';
        }, 4000);
    };
    if(popUpId == "photographyPopUp")
    {
        animateGallery();
    }
    if(popUpId == "educationPopUp")
    {
        setTimeout(() => {
            document.getElementById("educationBubbleText").style.left = '0';
        }, 3500);
    }
    if(popUpId == "motorcyclePopUp")
    {
        
    }
};

function closeBubble(bubbleId, popUpId, left, top)
{
    document.getElementById('clickProtection').style.zIndex = '+10';

    document.getElementById(bubbleId).style.zIndex = '+5';
    document.getElementById(bubbleId).style.opacity = '100%';
    
    setTimeout(() => {
        document.getElementById(popUpId).style.opacity = '0%';
    }, 500)

    setTimeout(() => {
        document.getElementById(bubbleId).style.borderRadius = '100%'
        document.getElementById(bubbleId).style.width = '10%'
        document.getElementById(bubbleId).style.height = '';
        document.getElementById(bubbleId).style.aspectRatio = '1';
        document.getElementById(bubbleId).style.left = left;
        document.getElementById(bubbleId).style.top = top;
        document.getElementById(popUpId).style.zIndex = '-1';
        
        document.getElementById('javaBubble').style.animation = '';
        document.getElementById('htmlBubble').style.animation = '';
        document.getElementById('cssBubble').style.animation = '';
        document.getElementById('jsBubble').style.animation = '';
        document.getElementById('swiftBubble').style.animation = '';

        document.getElementById(bubbleId).style.zIndex = '';

        if(popUpId == "photographyPopUp")
        {
            stopGallery();
        }

        document.getElementById('clickProtection').style.zIndex = '-10';
    }, 2500)
}

function animateGallery()
{
    document.getElementById('galleryOne').style.animation = 'gallery 60s infinite linear';
    document.getElementById('galleryTwo').style.animation = 'gallery 60s infinite linear -15s';
    document.getElementById('galleryThree').style.animation = 'gallery 60s infinite linear -30s';
    document.getElementById('galleryFour').style.animation = 'gallery 60s infinite linear -45s';
    document.getElementById('galleryFive').style.animation = 'gallery 60s infinite linear -60s';
}
function stopGallery()
{
    document.getElementById('galleryOne').style.animation = '';
    document.getElementById('galleryTwo').style.animation = '';
    document.getElementById('galleryThree').style.animation = '';
    document.getElementById('galleryFour').style.animation = '';
    document.getElementById('galleryFive').style.animation = '';
}

var motorcyclePopUpControl = false;
function imageSplice(event)
{   
    var xCoordinate = event.clientX + 7;
    document.getElementById("motorcycleSplice").style.left = xCoordinate + "px";
    document.getElementById("motorcycleTwo").style.clipPath = "polygon(" + xCoordinate + "px 0, 100% 0, 100% 100%, " + xCoordinate + "px 100%)";
}


function pauseCardCouresel()
{
    document.getElementById('project1').style.animationPlayState = 'paused';
    document.getElementById('project2').style.animationPlayState = 'paused';
    document.getElementById('project3').style.animationPlayState = 'paused';
    document.getElementById('project4').style.animationPlayState = 'paused';
    document.getElementById('project5').style.animationPlayState = 'paused';
}
function startCardCouresel() 
{
    document.getElementById('project1').style.animationPlayState = 'running';
    document.getElementById('project2').style.animationPlayState = 'running';
    document.getElementById('project3').style.animationPlayState = 'running';
    document.getElementById('project4').style.animationPlayState = 'running';
    document.getElementById('project5').style.animationPlayState = 'running';
}
function sendMessage()
{
    alert("Not available in this version")
}

function genTransition()
{
    document.getElementById('transition').style.left = '0%';
    setTimeout(() => {
        document.getElementById('transition').style.left = '-150%';
    }, 2000);
}

function pageTransition(pageClass)
{
    genTransition();

    setTimeout(() => {
            document.getElementById(pageClass).style.left = '0%';
    }, 1500);
}
function homeTransition()
{
    genTransition();

    setTimeout(() => {
        document.getElementById("aboutClass").style.left = '-150%';   
        document.getElementById("projectClass").style.left = '-150%';
        document.getElementById("contactClass").style.left = '-150%';
    }, 1500);
}
function aboutToEmail()
{
    genTransition();

    setTimeout(() => {
        document.getElementById("aboutClass").style.left = '-150%';  
        document.getElementById("contactClass").style.left = '0%';
}, 1500);
}

function pageOpen()
{
    setTimeout(() => {
        document.getElementById("opener").style.opacity = "0";
    }, 5000);
    setTimeout(() => {
        document.getElementById("opener").style.display = "none";
    }, 6000);
}
pageOpen();
</script>