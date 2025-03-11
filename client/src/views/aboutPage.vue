<template>
    <main id="about_main">
        <RouterLink to="/" class="link">Return</RouterLink>
        <div class="content">
            <div class="hBox">
                <div class="selection">
                    <h1 class="title">Select a topic</h1>
                    <p>Hover the text to <span class="colored">reveal</span> images</p>
                    <p>Hover <span class="colored">programming</span> tools for tooltips</p>
                    <div class="topics">
                        <div class="topic">
                            <h2 id="topic1" @click="topicChange(1)">Overview</h2>
                        </div>

                        <div class="topic">
                            <h2 id="topic2" @click="topicChange(2)">Hobbies</h2>
                        </div>

                        <div class="topic">
                            <h2 id="topic3" @click="topicChange(3)">Plans</h2>
                        </div>

                        <div class="topic">
                            <h2 id="topic4" @click="topicChange(4)">Work Ethic</h2>
                        </div>

                        <div class="topic">
                            <h2 id="topic5" @click="topicChange(5)">Programming Tools</h2>
                        </div>

                        <div class="topic">
                            <h2 id="topic6" @click="topicChange(6)">Programming Experience</h2>
                        </div>
                    </div>
                </div>
                <div class="view">
                    <h3 id="topicText" v-html="topicText"></h3>
                    <span class="imageSpan" id="imageOne"></span>
                    <span class="imageSpan2" id="imageTwo"></span>

                    <span class="imageSpan" id="imageThree"></span>
                    <span class="imageSpan2" id="imageFour"></span>

                    <span class="imageSpan" id="imageFive"></span>
                    <span class="imageSpan2" id="imageSix"></span>

                    <span class="imageSpan" id="imageSeven"></span>
                    <span class="imageSpan2" id="imageEight"></span>

                    <span class="imageSpan" id="imageNine"></span>
                    <span class="imageSpan2" id="imageTen"></span>

                    <span class="imageSpan" id="imageEleven"></span>
                    <span class="imageSpan2" id="imageTwelve"></span>

                    <span class="imageSpan" id="imageThirteen"></span>
                    <span class="imageSpan2" id="imageFourteen"></span>
                </div>
            </div>

            <div class="tools" id="about_tools">
                <div class="toolTip">
                    <p class="toolTipText">HTML</p>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50"><path d="M 45.273438 2.324219 C 45.085938 2.117188 44.816406 2 44.535156 2 L 5.464844 2 C 5.183594 2 4.914063 2.117188 4.726563 2.324219 C 4.535156 2.53125 4.441406 2.808594 4.46875 3.089844 L 7.988281 42.515625 C 8.023438 42.929688 8.3125 43.273438 8.710938 43.390625 L 24.722656 47.960938 C 24.808594 47.988281 24.902344 48 24.996094 48 C 25.089844 48 25.179688 47.988281 25.269531 47.960938 L 41.292969 43.390625 C 41.691406 43.273438 41.976563 42.929688 42.015625 42.515625 L 45.53125 3.089844 C 45.558594 2.808594 45.464844 2.53125 45.273438 2.324219 Z M 36.847656 15.917969 L 18.035156 15.917969 L 18.484375 21.007813 L 36.394531 21.007813 L 35.050781 36.050781 L 24.992188 39.089844 L 24.894531 39.058594 L 14.953125 36.046875 L 14.410156 29.917969 L 19.28125 29.917969 L 19.492188 32.296875 L 25.050781 33.460938 L 30.507813 32.296875 L 31.089844 25.859375 L 14.046875 25.859375 L 12.722656 11.054688 L 37.28125 11.054688 Z"/></svg>
                </div>

                <div class="toolTip">
                    <p class="toolTipText">CSS</p>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" fill-rule="evenodd"><path fill-rule="evenodd" d="M 42 6 L 39 40 L 25 44 L 11 40 L 8 6 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z"/></svg>
                </div>

                <div class="toolTip">
                    <p class="toolTipText">JavaScript</p>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" ><path d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z"/></svg>
                </div>

                <div class="toolTip">
                    <p class="toolTipText">Java</p>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="150px" height="150px"><path d="M 28.1875 0 C 30.9375 6.363281 18.328125 10.292969 17.15625 15.59375 C 16.082031 20.464844 24.648438 26.125 24.65625 26.125 C 23.355469 24.109375 22.398438 22.449219 21.09375 19.3125 C 18.886719 14.007813 34.535156 9.207031 28.1875 0 Z M 36.5625 8.8125 C 36.5625 8.8125 25.5 9.523438 24.9375 16.59375 C 24.6875 19.742188 27.847656 21.398438 27.9375 23.6875 C 28.011719 25.558594 26.0625 27.125 26.0625 27.125 C 26.0625 27.125 29.609375 26.449219 30.71875 23.59375 C 31.949219 20.425781 28.320313 18.285156 28.6875 15.75 C 29.039063 13.324219 36.5625 8.8125 36.5625 8.8125 Z M 19.1875 25.15625 C 19.1875 25.15625 9.0625 25.011719 9.0625 27.875 C 9.0625 30.867188 22.316406 31.089844 31.78125 29.25 C 31.78125 29.25 34.296875 27.519531 34.96875 26.875 C 28.765625 28.140625 14.625 28.28125 14.625 27.1875 C 14.625 26.179688 19.1875 25.15625 19.1875 25.15625 Z M 38.65625 25.15625 C 37.664063 25.234375 36.59375 25.617188 35.625 26.3125 C 37.90625 25.820313 39.84375 27.234375 39.84375 28.84375 C 39.84375 32.46875 34.59375 35.875 34.59375 35.875 C 34.59375 35.875 42.71875 34.953125 42.71875 29 C 42.71875 26.296875 40.839844 24.984375 38.65625 25.15625 Z M 16.75 30.71875 C 15.195313 30.71875 12.875 31.9375 12.875 33.09375 C 12.875 35.417969 24.5625 37.207031 33.21875 33.8125 L 30.21875 31.96875 C 24.351563 33.847656 13.546875 33.234375 16.75 30.71875 Z M 18.1875 35.9375 C 16.058594 35.9375 14.65625 37.222656 14.65625 38.1875 C 14.65625 41.171875 27.371094 41.472656 32.40625 38.4375 L 29.21875 36.40625 C 25.457031 37.996094 16.015625 38.238281 18.1875 35.9375 Z M 11.09375 38.625 C 7.625 38.554688 5.375 40.113281 5.375 41.40625 C 5.375 48.28125 40.875 47.964844 40.875 40.9375 C 40.875 39.769531 39.527344 39.203125 39.03125 38.9375 C 41.933594 45.65625 9.96875 45.121094 9.96875 41.15625 C 9.96875 40.253906 12.320313 39.390625 14.5 39.8125 L 12.65625 38.75 C 12.113281 38.667969 11.589844 38.636719 11.09375 38.625 Z M 44.625 43.25 C 39.226563 48.367188 25.546875 50.222656 11.78125 47.0625 C 25.542969 52.695313 44.558594 49.535156 44.625 43.25 Z"/></svg>
                </div>

                <div class="toolTip">
                    <p class="toolTipText">Swift</p>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="150px" height="150px"><path d="M35.5,3h-21C8.159,3,3,8.159,3,14.5v21C3,41.841,8.159,47,14.5,47h21C41.841,47,47,41.841,47,35.5v-21 C47,8.159,41.841,3,35.5,3z M39.615,39c0,0-1.65-2.807-4.416-2.807c-2.666,0-4.707,2.807-10.074,2.807 c-9.975-0.001-15.629-7.398-17.093-9.7c-0.115-0.181,0.1-0.381,0.281-0.266C12.555,31.701,16.658,33,19.5,32.999 C23.657,32.998,26,31,26,31c-3.829-2.255-13-12.75-14.954-15.681c-0.135-0.202,0.107-0.425,0.293-0.269 c7.947,6.684,12.476,9.203,12.476,9.203c-1.682-1.412-6.69-8.004-8.773-10.935c-0.141-0.198,0.118-0.427,0.296-0.262 C21.038,18.356,31,26,31,26c0.627-1.764,1.024-3.881,0.998-5.5c-0.067-4.269-2.82-8.526-3.961-10.191 c-0.129-0.188,0.106-0.399,0.291-0.266c7.422,5.332,9.673,11.99,9.672,15.832c-0.001,2.76-1,4.5-1,4.5S41.232,34.992,39.615,39z"/></svg>
                </div>

                <div class="toolTip">
                    <p class="toolTipText">Markdown</p>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="150px" height="150px"><path d="M 46 10 L 4 10 C 1.792969 10 0 11.792969 0 14 L 0 38 C 0 40.207031 1.792969 42 4 42 L 46 42 C 48.207031 42 50 40.207031 50 38 L 50 14 C 50 11.792969 48.207031 10 46 10 Z M 26 34 L 22 34 L 22 23.332031 L 17 30 L 12 23.332031 L 12 34 L 8 34 L 8 18 L 12 18 L 17 24.71875 L 22 18 L 26 18 Z M 37 34 L 30 26 L 35 26 L 35 18 L 39 18 L 39 26 L 44 26 Z"/></svg>
                </div>

                <div class="toolTip">
                    <p class="toolTipText">VueJS</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="256px" height="256px" fill-rule="nonzero"><g transform="translate(-24,-24) scale(1.1875,1.1875)"><g fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-size="none" style="mix-blend-mode: normal"><g transform="scale(8,8)"><path d="M3,6l13,22l13,-22h-10l-3,5.30078l-3,-5.30078zM6.5,8h3.77148l5.72852,10l5.72852,-10h3.77148l-9.5,16.09961z"></path></g></g></g></svg>
                </div>

                <div class="toolTip">
                    <p class="toolTipText">MySQL</p>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="150px" height="150px"><path d="M 31.167969 8 C 30.699219 7.988281 30.289063 8.167969 30.078125 8.6875 C 29.71875 9.558594 30.613281 10.410156 30.933594 10.855469 C 31.15625 11.164063 31.445313 11.511719 31.605469 11.859375 C 31.710938 12.089844 31.726563 12.320313 31.816406 12.5625 C 32.039063 13.160156 32.394531 13.839844 32.679688 14.394531 C 32.824219 14.675781 32.984375 14.96875 33.167969 15.21875 C 33.28125 15.371094 33.472656 15.441406 33.503906 15.675781 C 33.316406 15.941406 33.304688 16.351563 33.199219 16.6875 C 32.722656 18.191406 32.902344 20.0625 33.59375 21.171875 C 33.808594 21.515625 34.3125 22.246094 35 21.96875 C 35.601563 21.722656 35.46875 20.960938 35.640625 20.285156 C 35.679688 20.136719 35.65625 20.023438 35.734375 19.921875 L 35.734375 19.953125 C 35.914063 20.320313 36.097656 20.6875 36.28125 21.050781 C 36.691406 21.707031 37.414063 22.390625 38.023438 22.855469 C 38.339844 23.09375 38.589844 23.507813 39 23.648438 L 39 23.617188 L 38.96875 23.617188 C 38.890625 23.492188 38.765625 23.441406 38.664063 23.34375 C 38.425781 23.109375 38.160156 22.816406 37.964844 22.546875 C 37.40625 21.792969 36.914063 20.964844 36.46875 20.105469 C 36.253906 19.695313 36.066406 19.242188 35.886719 18.824219 C 35.816406 18.660156 35.816406 18.417969 35.671875 18.332031 C 35.472656 18.640625 35.183594 18.886719 35.03125 19.25 C 34.789063 19.828125 34.753906 20.535156 34.664063 21.265625 C 34.609375 21.285156 34.632813 21.269531 34.605469 21.296875 C 34.179688 21.191406 34.027344 20.753906 33.871094 20.378906 C 33.472656 19.429688 33.394531 17.898438 33.75 16.808594 C 33.839844 16.523438 34.25 15.632813 34.085938 15.371094 C 34.007813 15.109375 33.742188 14.960938 33.597656 14.761719 C 33.414063 14.515625 33.234375 14.191406 33.109375 13.90625 C 32.78125 13.164063 32.472656 12.304688 32.125 11.554688 C 31.960938 11.195313 31.683594 10.835938 31.453125 10.515625 C 31.199219 10.164063 30.917969 9.90625 30.71875 9.476563 C 30.652344 9.328125 30.554688 9.085938 30.660156 8.929688 C 30.691406 8.824219 30.738281 8.78125 30.84375 8.746094 C 31.019531 8.609375 31.511719 8.789063 31.699219 8.867188 C 32.1875 9.070313 32.597656 9.265625 33.011719 9.539063 C 33.210938 9.671875 33.410156 9.925781 33.652344 10 L 33.925781 10 C 34.359375 10.097656 34.839844 10.027344 35.238281 10.152344 C 35.949219 10.367188 36.585938 10.703125 37.160156 11.066406 C 38.921875 12.175781 40.363281 13.757813 41.34375 15.644531 C 41.503906 15.949219 41.574219 16.242188 41.714844 16.5625 C 41.992188 17.210938 42.347656 17.882813 42.628906 18.515625 C 42.90625 19.152344 43.179688 19.789063 43.574219 20.316406 C 43.78125 20.59375 44.585938 20.746094 44.949219 20.898438 C 45.203125 21.007813 45.625 21.121094 45.863281 21.265625 C 46.328125 21.542969 46.773438 21.875 47.207031 22.183594 C 47.425781 22.335938 48.089844 22.667969 48.125 22.945313 C 47.050781 22.917969 46.230469 23.015625 45.53125 23.3125 C 45.332031 23.398438 45.011719 23.398438 44.980469 23.648438 C 45.085938 23.761719 45.105469 23.933594 45.191406 24.074219 C 45.359375 24.34375 45.640625 24.707031 45.894531 24.898438 C 46.171875 25.105469 46.453125 25.328125 46.75 25.511719 C 47.273438 25.828125 47.859375 26.011719 48.367188 26.332031 C 48.664063 26.523438 48.964844 26.761719 49.253906 26.972656 C 49.398438 27.082031 49.492188 27.246094 49.679688 27.3125 L 49.679688 27.28125 C 49.582031 27.15625 49.558594 26.984375 49.46875 26.855469 L 49.066406 26.453125 C 48.679688 25.941406 48.1875 25.488281 47.664063 25.113281 C 47.246094 24.8125 46.3125 24.40625 46.140625 23.921875 L 46.109375 23.890625 C 46.402344 23.859375 46.75 23.75 47.023438 23.675781 C 47.484375 23.554688 47.890625 23.585938 48.363281 23.464844 C 48.578125 23.402344 48.792969 23.339844 49.007813 23.28125 L 49.007813 23.15625 C 48.769531 22.914063 48.597656 22.585938 48.335938 22.363281 C 47.652344 21.78125 46.90625 21.199219 46.136719 20.714844 C 45.710938 20.445313 45.183594 20.269531 44.734375 20.042969 C 44.582031 19.964844 44.316406 19.925781 44.214844 19.796875 C 43.976563 19.496094 43.847656 19.113281 43.664063 18.761719 C 43.28125 18.023438 42.90625 17.21875 42.566406 16.441406 C 42.335938 15.914063 42.183594 15.390625 41.894531 14.914063 C 40.507813 12.636719 39.015625 11.257813 36.703125 9.90625 C 36.210938 9.617188 35.621094 9.507813 34.996094 9.359375 C 34.65625 9.335938 34.324219 9.316406 33.984375 9.296875 C 33.78125 9.210938 33.566406 8.960938 33.375 8.835938 C 32.894531 8.535156 31.949219 8.011719 31.167969 8 Z M 34.476563 11.3125 C 34.253906 11.308594 34.09375 11.339844 33.925781 11.375 L 33.925781 11.40625 L 33.957031 11.40625 C 34.0625 11.625 34.253906 11.765625 34.386719 11.953125 C 34.488281 12.167969 34.585938 12.382813 34.6875 12.597656 L 34.71875 12.566406 C 34.90625 12.433594 34.996094 12.21875 34.996094 11.894531 C 34.917969 11.816406 34.90625 11.714844 34.84375 11.621094 C 34.753906 11.492188 34.585938 11.421875 34.476563 11.3125 Z M 1.867188 23.996094 C 1.566406 24.007813 1.238281 24.066406 0.882813 24.179688 C 0.289063 24.359375 -0.00390625 24.714844 -0.00390625 25.4375 L -0.00390625 33 L 2 33 L 2 25.621094 L 4.777344 31.929688 C 5.121094 32.714844 5.589844 32.996094 6.507813 32.996094 C 7.429688 32.996094 7.878906 32.714844 8.222656 31.929688 L 11 25.78125 L 11 33 L 13 33 L 13 25.4375 C 13 24.714844 12.710938 24.359375 12.113281 24.179688 C 10.691406 23.730469 9.734375 24.117188 9.304688 25.089844 L 6.453125 31.503906 L 3.695313 25.089844 C 3.382813 24.359375 2.757813 23.960938 1.867188 23.996094 Z M 26.246094 24 C 25.457031 24 23 24.09375 23 26 L 23 27.234375 C 23 28.109375 23.769531 28.824219 25.4375 29 C 25.625 29.011719 25.8125 29.027344 26 29.027344 C 26 29.027344 27.945313 28.988281 28 29 C 29.125 29 29 29.875 29 30 L 29 31 C 29 31.136719 28.96875 32 27.988281 32 L 23 32 L 23 33 L 28.007813 33 C 28.664063 33 29.300781 32.863281 29.808594 32.625 C 30.652344 32.238281 31 31.714844 31 31.027344 L 31 29.597656 C 31 28.0625 29.09375 28 28 28 L 26 28 C 25.214844 28 25.09375 27.523438 25 27 L 25 26 C 25.09375 25.601563 25.269531 25.0625 25.964844 25 L 31 25 L 31 24 Z M 33.980469 24 C 32.503906 24.203125 31.984375 24.9375 31.984375 26 L 31.984375 31 C 31.984375 31.972656 32.527344 32.558594 33.644531 32.863281 C 34.019531 32.96875 34.359375 33.011719 34.679688 33.011719 L 36.90625 33 L 38.214844 33 L 39.328125 34 L 41.578125 34 L 40.03125 32.605469 C 40.757813 32.304688 40.984375 31.84375 40.984375 30.980469 L 40.984375 26 C 40.984375 24.9375 40.292969 24.203125 38.816406 24 Z M 42 24 L 42 30.957031 C 42 32.164063 42.683594 32.84375 44.492188 32.980469 C 44.660156 32.988281 44.832031 33 45 33 L 50 33 L 50 32 L 45.378906 32 C 44.347656 32 44 31.566406 44 30.949219 L 44 24 Z M 35.171875 25 L 37.746094 25 C 38.425781 25 38.882813 25.546875 38.984375 26 C 38.984375 26 39 30.65625 39 31 C 39 31.34375 38.808594 31.5 38.808594 31.5 L 38.265625 31 L 36 31 L 37.113281 32 L 35.171875 32 C 34.476563 32 34.085938 31.484375 33.984375 31 L 33.984375 26.101563 C 33.984375 25.570313 34.390625 25 35.171875 25 Z M 14 27 C 14.039063 27.039063 14 31.261719 14 31.34375 C 14.015625 32.21875 15.125 32.984375 16.863281 33 L 20 33 L 20 33.066406 C 20 33.253906 20.136719 33.878906 19 34 C 18.988281 34 14.011719 34 14 34 L 14 35 L 19.214844 35 C 20.097656 34.972656 22.011719 34.773438 22 33.242188 C 22 33.214844 22.007813 27 22 27 L 20 27 L 20 32 C 19.96875 32 17.523438 32.007813 17.03125 32 C 16.066406 31.984375 15.984375 31.433594 16 31.222656 L 16 27 Z"/></svg>
                </div>

                <div class="toolTip">
                    <p class="toolTipText">VS Code</p>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="150px" height="150px"><path d="M 35.445312 2.0117188 C 35.056812 2.0253438 34.669266 2.1265938 34.322266 2.3085938 C 35.227266 2.7565937 35.865703 3.6414062 35.970703 4.6914062 C 35.988703 4.8174062 36 4.9322812 36 4.9882812 L 36 44.988281 C 36 46.174281 35.306594 47.190734 34.308594 47.677734 C 34.672594 47.876734 35.079 47.988281 35.5 47.988281 C 35.873 47.988281 36.224969 47.901859 36.542969 47.755859 L 36.544922 47.759766 C 38.152922 46.927766 46.192281 42.764703 46.488281 42.595703 C 47.421281 42.060703 48 41.061281 48 39.988281 L 48 9.9882812 C 48 8.9902813 47.505734 8.0619062 46.677734 7.5039062 C 46.357734 7.2869063 36.582031 2.2363281 36.582031 2.2363281 L 36.580078 2.2402344 C 36.224078 2.0727344 35.833813 1.9980938 35.445312 2.0117188 z M 33 3.9882812 C 32.744125 3.9882812 32.487969 4.08575 32.292969 4.28125 C 32.292969 4.28125 26.568469 10.718844 20.230469 17.839844 L 27.724609 23.970703 L 34 18.685547 L 34 4.9882812 C 34 4.7322812 33.902031 4.47625 33.707031 4.28125 C 33.511531 4.08575 33.255875 3.9882812 33 3.9882812 z M 8 10.988281 C 7.844 10.988281 7.5538594 10.988844 6.2558594 11.589844 C 5.5408594 11.920844 3.0507812 13.228516 3.0507812 13.228516 C 2.7207812 13.407516 2.4545781 13.687719 2.2675781 14.011719 C 2.3435781 13.999719 2.4190469 13.988281 2.4980469 13.988281 L 2.5 13.988281 C 3.168 13.988281 3.5776562 14.454469 3.7226562 14.605469 C 3.7226562 14.605469 31.929969 45.332313 32.292969 45.695312 C 32.487969 45.890313 32.742047 45.988281 32.998047 45.988281 C 33.254047 45.988281 33.510078 45.890313 33.705078 45.695312 C 33.900078 45.500312 34 45.244281 34 44.988281 L 34 31.658203 C 34 31.658203 9.53375 11.661813 9.34375 11.507812 C 8.97575 11.173813 8.497 10.988281 8 10.988281 z M 2.1992188 15.988281 C 2.0892188 15.988281 2 16.078453 2 16.189453 L 2 34.794922 C 2 34.901922 2.0873125 34.990234 2.1953125 34.990234 C 2.2513125 34.990234 2.3009375 34.964781 2.3359375 34.925781 L 8 28.638672 L 8 22.007812 L 2.3417969 16.046875 C 2.3057969 16.010875 2.2542188 15.988281 2.1992188 15.988281 z M 12.253906 26.802734 C 12.253906 26.802734 3.6585469 36.452781 3.5605469 36.550781 C 3.2895469 36.821781 2.915 36.988281 2.5 36.988281 C 2.422 36.988281 2.3464844 36.978797 2.2714844 36.966797 C 2.4734844 37.317797 2.7697188 37.607156 3.1367188 37.785156 L 3.1328125 37.791016 C 4.0028125 38.233016 6.8739531 39.691703 7.2519531 39.845703 C 7.4899531 39.940703 7.741 39.988281 8 39.988281 C 8.347 39.988281 8.6900469 39.898656 8.9980469 39.722656 C 9.0210469 39.709656 17.527344 32.552734 17.527344 32.552734 L 12.253906 26.802734 z"/></svg>
                </div>

                <div class="toolTip">
                    <p class="toolTipText">JGrasp</p>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="150px" height="150px"><path d="M 4 4 L 4 5 L 4 46 L 46 46 L 46 4 L 4 4 z M 6 6 L 44 6 L 44 44 L 6 44 L 6 6 z M 8 8 L 8 42 L 42 42 L 42 8 L 8 8 z M 27 13 C 32 13 33.64 14.07 35 15 L 34 20 L 32 20 C 32 17.24 30.65 15 27.75 15 C 23 15 19 20 19 27 C 19 32 21 35 24 35 C 25.48 34.982 26.762187 33.972156 27.117188 32.535156 C 27.333188 31.662156 27.580719 30.125 27.886719 28 L 25 28 L 25 26 L 28.167969 26 L 33.197266 26 L 35 26 L 35 28 L 32.896484 28 C 32.524484 30.357 32.225562 31.840969 31.976562 32.792969 C 31.598562 34.242969 30.611328 35.491938 29.236328 36.085938 C 27.925328 36.651938 26.205 37 24 37 C 18 37 14 33.08 14 27 C 14 19.27 18.72 13 27 13 z"/></svg>
                </div>

                <div class="toolTip">
                    <p class="toolTipText">Git</p>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="150px" height="150px"><path d="M 46.792969 22.089844 L 27.910156 3.207031 C 27.109375 2.402344 26.054688 2 25 2 C 23.945313 2 22.890625 2.402344 22.089844 3.207031 L 18.355469 6.941406 L 22.976563 11.5625 C 24.511719 10.660156 26.511719 10.855469 27.828125 12.171875 C 29.144531 13.488281 29.335938 15.488281 28.433594 17.019531 L 32.976563 21.5625 C 34.511719 20.660156 36.511719 20.855469 37.828125 22.171875 C 39.390625 23.734375 39.390625 26.265625 37.828125 27.828125 C 36.265625 29.390625 33.734375 29.390625 32.171875 27.828125 C 30.855469 26.511719 30.660156 24.511719 31.5625 22.976563 L 27.019531 18.433594 C 26.695313 18.625 26.355469 18.765625 26 18.855469 L 26 31.140625 C 27.722656 31.585938 29 33.136719 29 35 C 29 37.210938 27.210938 39 25 39 C 22.789063 39 21 37.210938 21 35 C 21 33.136719 22.277344 31.585938 24 31.140625 L 24 18.855469 C 23.332031 18.683594 22.695313 18.351563 22.171875 17.828125 C 20.855469 16.511719 20.664063 14.511719 21.566406 12.980469 L 16.941406 8.355469 L 3.207031 22.089844 C 1.597656 23.695313 1.597656 26.304688 3.207031 27.910156 L 22.089844 46.792969 C 22.890625 47.597656 23.945313 48 25 48 C 26.054688 48 27.109375 47.597656 27.910156 46.792969 L 46.792969 27.910156 C 48.402344 26.304688 48.402344 23.695313 46.792969 22.089844 Z"/></svg>
                </div>

                <div class="toolTip">
                    <p class="toolTipText">Github</p>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="150px" height="150px">    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"/></svg>
                </div>

                <div class="toolTip">
                    <p class="toolTipText">BitBucket</p>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="150px" height="150px"><path d="M 25 3 C 13.941406 3 5 5.523438 5 8.742188 L 5.117188 9.3125 L 8 28 C 8 31.214844 15.941406 34 25 34 C 34.058594 34 42 31.214844 42 28 L 44.882813 9.3125 L 45 8.742188 C 45 5.523438 36.058594 3 25 3 Z M 25 6 C 32.710938 6 39 7.515625 39 9.5 C 39 11.484375 32.710938 13 25 13 C 17.289063 13 11 11.484375 11 9.5 C 11 7.515625 17.289063 6 25 6 Z M 25 18 C 28.359375 18 31 20.640625 31 24 C 31 27.359375 28.359375 30 25 30 C 21.640625 30 19 27.359375 19 24 C 19 20.640625 21.640625 18 25 18 Z M 25 21 C 23.34375 21 22 22.34375 22 24 C 22 25.65625 23.34375 27 25 27 C 26.65625 27 28 25.65625 28 24 C 28 22.34375 26.65625 21 25 21 Z M 10.761719 33.410156 L 12.058594 42.617188 C 12.058594 44.996094 17.894531 46.941406 24.714844 46.996094 C 31.53125 46.941406 37.363281 44.992188 37.363281 42.617188 L 38.625 33.671875 C 34.957031 35.199219 29.902344 36 25 36 C 19.820313 36 14.464844 35.109375 10.761719 33.410156 Z"/></svg>
                </div>

                <div class="toolTip">
                    <RouterLink to="/admin/surgosan" class="toolTipText">FTP</RouterLink>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="150px" height="150px"><path d="M 3 6 C 1.347656 6 0 7.347656 0 9 L 0 41 C 0 42.652344 1.347656 44 3 44 L 45 44 C 46.652344 44 48 42.652344 48 41 L 48 22.9375 C 40.527344 22.441406 34.558594 16.472656 34.0625 9 L 18.40625 9 L 16.28125 6.875 C 15.714844 6.308594 14.988281 6 14.1875 6 Z M 36.90625 6.96875 C 36.863281 6.976563 36.820313 6.988281 36.78125 7 C 36.316406 7.105469 35.988281 7.523438 36 8 C 36 15.167969 41.832031 21 49 21 C 49.410156 21.007813 49.789063 20.765625 49.945313 20.386719 C 50.105469 20.007813 50.015625 19.566406 49.71875 19.28125 C 49.710938 19.273438 49.695313 19.289063 49.6875 19.28125 C 49.675781 19.269531 49.667969 19.261719 49.65625 19.25 C 49.644531 19.242188 49.636719 19.226563 49.625 19.21875 C 49.449219 19.078125 49.226563 19 49 19 C 48.238281 19 47.5 18.925781 46.78125 18.78125 C 46.421875 18.707031 46.0625 18.605469 45.71875 18.5 C 45.375 18.394531 45.046875 18.265625 44.71875 18.125 C 44.0625 17.847656 43.429688 17.519531 42.84375 17.125 C 41.671875 16.335938 40.664063 15.328125 39.875 14.15625 C 39.480469 13.570313 39.152344 12.9375 38.875 12.28125 C 38.320313 10.964844 38 9.523438 38 8 C 38.007813 7.734375 37.90625 7.472656 37.71875 7.28125 C 37.691406 7.253906 37.652344 7.242188 37.625 7.21875 C 37.425781 7.042969 37.167969 6.953125 36.90625 6.96875 Z M 40.90625 6.96875 C 40.863281 6.976563 40.820313 6.988281 40.78125 7 C 40.316406 7.105469 39.988281 7.523438 40 8 C 40 12.957031 44.042969 17 49 17 C 49.359375 17.003906 49.695313 16.816406 49.878906 16.503906 C 50.058594 16.191406 50.058594 15.808594 49.878906 15.496094 C 49.695313 15.183594 49.359375 14.996094 49 15 C 45.121094 15 42 11.878906 42 8 C 42.011719 7.710938 41.894531 7.433594 41.6875 7.238281 C 41.476563 7.039063 41.191406 6.941406 40.90625 6.96875 Z M 44.90625 6.96875 C 44.863281 6.976563 44.820313 6.988281 44.78125 7 C 44.316406 7.105469 43.988281 7.523438 44 8 C 44 10.75 46.25 13 49 13 C 49.359375 13.003906 49.695313 12.816406 49.878906 12.503906 C 50.058594 12.191406 50.058594 11.808594 49.878906 11.496094 C 49.695313 11.183594 49.359375 10.996094 49 11 C 47.332031 11 46 9.667969 46 8 C 46.011719 7.710938 45.894531 7.433594 45.6875 7.238281 C 45.476563 7.039063 45.191406 6.941406 44.90625 6.96875 Z M 49 7 C 48.449219 7 48 7.449219 48 8 C 48 8.550781 48.449219 9 49 9 C 49.550781 9 50 8.550781 50 8 C 50 7.449219 49.550781 7 49 7 Z"/></svg>
                </div>


            </div>
        </div>
    </main>
</template>

<style scoped>

    main {
        flex-grow: 1;
        height: 100dvh;
        display: flex;
        flex-direction: column;
        position: relative;
        max-width: 100%;
    }

    svg {
        width: 3rem;
        height: 3rem;
    }

    @keyframes textDisplay {
        0% {scale: 1;}
        50% {scale: 0;}
        100% {scale: 1;}
    }

    .title {
        text-decoration: solid 2px underline;
    }

    .colored {
        color: var(--color-theme);
    }
    .toolTip {
        position: relative;
    }

    .toolTipText {
        cursor: default;
        text-decoration: none;
        position: absolute;
        top: -3rem;
        left: 50%;
        transform: translateX(-50%);
        width: max-content;
        max-width: 9rem;
        background: var(--color-background-soft);
        padding: .25rem;
        padding-left: .5rem;
        padding-right: .5rem;
        border: solid 1px var(--color-heading);
        border-radius: .5rem;
        opacity: 0;
        transition: .4s;
    }

    .toolTip:hover > .toolTipText {
        opacity: 1;
    }
    .content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    .hBox {
        height: 85%;
    }

    .tools {
        padding-left: 5rem;
        padding-right: 5rem;
        background: var(--color-background-mute);
        border: solid 2px var(--color-heading);
        max-height: 8rem;
        flex-grow: 1;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .selection {
        padding-top: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-width: 30%;
        height: 100%;
        border-right: solid 2px var(--color-heading);
    }

    .topics {
        width: 100%;
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: .8rem;
    }

    .topic {
        position: relative;
        cursor: pointer;
    }

    .topic:hover {
        color: var(--color-heading);
    }

    .topic::before {
        position: absolute;
        bottom: 0;
        right: 50%;
        content: "";
        width: 0;
        height: 2px;
        background: var(--color-theme);
        transition: .5s;
    }

    .topic::after {
        position: absolute;
        bottom: 0;
        left: 50%;
        content: "";
        width: 0;
        height: 2px;
        background: var(--color-theme);
        transition: .5s;
    }

    #topicText {
        opacity: 1;
        transition: .4s;
    }

    #topicText:hover {
        opacity: 0;
    }

    .topic:hover::after, .topic:hover::before {
        width: 50%;
    }

    .view {
        flex-grow: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5rem;
        padding-bottom: 10rem;
    }

    .view h3 {
        text-align: center;
        background: var(--color-background-mute);
        padding: 1rem;
        border: solid 2px var(--color-heading);
        border-radius: 1rem;
        max-width: 75%;
        line-height: 1.5;
        z-index: +5;
    }

    .imageSpan {
        position: absolute;
        top: 10%;
        left: 5%;
        width: 45%;
        aspect-ratio: 16/9;
        border-radius: 1rem;
        transition: .5s;
        background: url('../assets/Photos/galleryOne.JPG');
        background-size: cover;
        z-index: -1;
    }

    .imageSpan2 {
        position: absolute;
        bottom: 5%;
        right: 10%;
        width: 45%;
        aspect-ratio: 16/9;
        border-radius: 1rem;
        transition: .5s;
        background: url('../assets/Photos/galleryTwo.jpg');
        background-size: cover;
        z-index: -1;
    }

    #imageOne, #imageTwo {
        z-index: 0;
    }

    #imageThree {
        background: url('../assets/Photos/galleryThree.JPG');
        background-size: cover;
    }

    #imageFour {
        background: url('../assets/Photos/carmenBranch.JPG');
        background-size: cover;
    }

    #imageFive {
        background: url('../assets/Photos/senshiRR.JPG');
        background-size: cover;
    }

    #imageSix {
        background: url('../assets/Photos/bajoQuinto.JPG');
        background-size: cover;
    }

    #imageSeven {
        background: url('../assets/Photos/books.JPG');
        background-size: cover;
    }

    #imageEight {
        background: url('../assets/Photos/Epiphone.JPG');
        background-size: cover;
    }

    #imageNine {
        background: url('../assets/Photos/dscTower.JPG');
        background-size: cover;
    }

    #imageTen {
        background: url('../assets/Photos/bass.JPG');
        background-size: cover;
    }

    #imageEleven {
        background: url('../assets/Photos/keyboard.JPG');
        background-size: cover;
    }

    #imageTwelve {
        background: url('../assets/Photos/galleryFive.JPG');
        background-size: cover;
    }

    #imageThirteen {
        background: url('../assets/Photos/unsplash.JPG');
        background-size: cover;
    }

    #imageFourteen {
        background: url('../assets/Photos/motorcycleTwo.JPG');
        background-size: cover;
    }
</style>

<script setup>
    import { ref } from 'vue';

    const topicText = ref('Select a topic to read about.');
    
    const general = "My name is Sergio Sanchez-Alvares. I live in Georgia, USA where I attend <i>Kennesaw State University</i>. I enjoy programming, music, photography, and motorcycles. I am part of the <u>Kennesaw State University Autonomous Underwater Vehicle (AUV) team</u>. I have completed my internship at the <u>Peaches & Cream Foundation as a full-stack development intern</u>. I currently work as a <u>Firmware Engineer at MVE Biological Solutions</u>.";
    const hobbies = "I am a musician and perform on the weekends. I ride an adventure motorcycle, so I like to take trips on and off-road. I also like photography and go out to take photos sometimes. I also enjoy tinkering with electronics and code to create small life improvements.";
    const plans = "My future plans consist of graduating from Kennesaw State University with a Bachelor of Science in Computer Science, deepening my knowledge in programming and music, and also to travel to Japan.";
    const workEthic = "I am well organized and like to work hard and smart. I enjoy problem solving and am independent but also enjoy collaborative environments. I may not be the most extroverted, but I believe I have enough charisma and composure to lead a team efficiently.";
    const programmingTools = "Languages: C, Java, Rust, JavaScript, HTML, CSS, Markdown, Swift, & SQL <br> Tools: VueJS, MySQL, AWS, Git, Soldering, Electronic Tools (Multimeter, Oscilloscope, etc.), CMake <br> Applications: Webstorm, IntelliJ Idea, CLion, VS Code, Postman, ESP-IDF, Jetbrains Fleet, XCode, ArduinoIDE, Altium Designer, KiCad";
    const programmingExperience = "I have gained plenty of experience from the <u>KSU AUV team</u> and my <u>internship at the Peaches & Cream Foundation</u> with embedded systems and fullstack development respectively. I currently work as a <u>Firmware Engineer at MVE Biological Solutions</u>.";

    function imageChange(imageIndex)
    {
        document.getElementById('imageThree').style.zIndex = -1;
        document.getElementById('imageFour').style.zIndex = -1;
        document.getElementById('imageFive').style.zIndex = -1;
        document.getElementById('imageSix').style.zIndex = -1;
        document.getElementById('imageSeven').style.zIndex = -1;
        document.getElementById('imageEight').style.zIndex = -1;
        document.getElementById('imageNine').style.zIndex = -1;
        document.getElementById('imageTen').style.zIndex = -1;
        document.getElementById('imageEleven').style.zIndex = -1;
        document.getElementById('imageTwelve').style.zIndex = -1;
        document.getElementById('imageThirteen').style.zIndex = -1;
        document.getElementById('imageFourteen').style.zIndex = -1;
        document.getElementById('imageOne').style.zIndex = -1;
            document.getElementById('imageTwo').style.zIndex = -1;
        switch (imageIndex) {
                case 1:
                    document.getElementById('imageThree').style.zIndex = 0;
                    document.getElementById('imageFour').style.zIndex = 0;
                    break;
                    case 2: 
                    document.getElementById('imageFive').style.zIndex = 0;
                    document.getElementById('imageSix').style.zIndex = 0;
                    break;
                case 3:
                    document.getElementById('imageSeven').style.zIndex = 0;
                    document.getElementById('imageEight').style.zIndex = 0;
                    break;
                case 4:
                    document.getElementById('imageNine').style.zIndex = 0;
                    document.getElementById('imageTen').style.zIndex = 0;
                    break;
                case 5:
                    document.getElementById('imageEleven').style.zIndex = 0;
                    document.getElementById('imageTwelve').style.zIndex = 0;
                    break;
                case 6:
                    document.getElementById('imageThirteen').style.zIndex = 0;
                    document.getElementById('imageFourteen').style.zIndex = 0;
                    break;
                default:
                    document.getElementById('imageOne').style.zIndex = 0;
                    document.getElementById('imageTwo').style.zIndex = 0;
                    break;
            }
    }

    function topicUnderlined(topicInt) {
        const selectedTopic = topicInt-1;
        const headingColor = getComputedStyle(document.documentElement).getPropertyValue('--color-heading');
        const themeColor = getComputedStyle(document.documentElement).getPropertyValue('--color-theme');
        const t1 = document.getElementById('topic1');
        const t2 = document.getElementById('topic2');
        const t3 = document.getElementById('topic3');
        const t4 = document.getElementById('topic4');
        const t5 = document.getElementById('topic5');
        const t6 = document.getElementById('topic6');
        const topics = [t1, t2, t3, t4, t5, t6];
        
        topics.forEach(topic => {
            topic.style.color = headingColor;
        });

        topics[selectedTopic].style.color = themeColor;
    }

    function topicChange(topicInt) {
        topicUnderlined(topicInt);
        document.getElementById('topicText').style.color = 'transparent';
        imageSpanning();
        
        function imageSpanning() {
            const images = document.getElementsByClassName('imageSpan');
            const images2 = document.getElementsByClassName('imageSpan2');
            const duration = 1000; // Duration in milliseconds
            let elapsedTime = 0;
            let currentIndex = 0;

            function loop() {
                for (const img of images) {
                img.style.zIndex = 0;
                }
                for (const img of images2) {
                img.style.zIndex = 0;
                }

                if (currentIndex % 2 === 0) {
                images[currentIndex / 2].style.zIndex = 1;
                } else {
                images2[Math.floor(currentIndex / 2)].style.zIndex = 1;
                }

                currentIndex = (currentIndex + 1) % (2 * Math.min(images.length, images2.length));

                elapsedTime += 180;

                if (elapsedTime >= duration) {
                return;
                }

                setTimeout(loop, 180);
            }

            loop();

            setTimeout(() => {
                imageChange(topicInt);
            }, duration+100);
        }
        
        textAnimation();

        setTimeout(() => {
            switch (topicInt) {
                case 1:
                    topicText.value = general;
                    break;
                case 2: 
                    topicText.value = hobbies;
                    break;
                case 3:
                    topicText.value = plans;
                    break;
                case 4:
                    topicText.value = workEthic;
                    break;
                case 5:
                    topicText.value = programmingTools;
                    break;
                case 6:
                    topicText.value = programmingExperience
                    break;
                default:
                    topicText.value = "Select a topic to read about.";
                    break;
            }
        }, 500);

    }


    const keyframes = [
        { transform: 'scale(1)', color: 'var(--color-heading)' },
        { transform: 'scale(0)', color: 'transparent' },
        { transform: 'scale(1)', color: 'transparent' },
        { transform: 'scale(1)', color: 'var(--color-heading)' }
    ]

    function textAnimation() {
        document.getElementById('topicText').animate (keyframes, {duration: 1200, fill: 'forwards'});
    }
</script>