# Welcome to Peaceful

Peaceful is a creative meditation app that offers a unique meditation experience to its users. The app utilizes music to create a soothing and calming environment that allows users to quiet their minds and find inner peace.  Users will be able to customize their meditation journey, choosing from different types of themes 
The app is easily scalable and many more themes can be added easily.

Check it out here [Peaceful](mluthra01.github.io/Peaceful)

## Features
In Peaceful, users will be able to:
+ Choose from a variety of theme for meditations
+ Switch between different views within the app
+  keep track of the time during the meditation

## Vision
I envision the future of Peaceful to be one stop meditation app, having:
 +  more meditation styles and themes
  + guided meditations and,
  + personalized meditation experience based on user needs


 
    
## Technologies
 + ``` Javascript, CSS, HTML ``` for the front end.
 + ``` Webpack  ``` bundle and transpile the source JavaScript code.
 +  ``` npm ``` to manage project dependencies.
 
 ## Different Themes 
<!--  <img width="600" alt="Wiref<img width="1734" alt="Screenshot 2023-02-09 at 10 59 19 AM" src="https://user-images.githubusercontent.com/71748091/217922189-abd48005-218e-4f62-a091-8a3ad28d45d2.png">
rame" src="https://user-images.githubusercontent.com/71748091/216505833-8100b8ce-7a93-4e4e-87f0-21e5c97b1cbb.png"> -->
## Homepage ##
<img width="600" alt="Screenshot 2023-02-09 at 10 59 06 AM" src="https://user-images.githubusercontent.com/71748091/217923174-8b24b11d-190f-4094-85e1-3056806f1bb6.png">

## Rain ##
<img width="600" alt="Screenshot 2023-02-09 at 10 59 19 AM" src="https://user-images.githubusercontent.com/71748091/217922313-9bf69bbd-66ca-4e41-af8c-17e65e245711.png">

## Space ##
<img width="600" alt="Screenshot 2023-02-09 at 10 59 37 AM" src="https://user-images.githubusercontent.com/71748091/217922424-82213706-3457-4c95-a9fe-c254d3d9057d.png">

## Core implementation 
  
``` javascript
        function isPlaying(song) {
            song.ontimeupdate = function() {
              let currentTime = song.currentTime;
              let elapsed = demoDuration - currentTime;
              let seconds = Math.floor(elapsed % 60);
              let minutes = Math.floor(elapsed / 60);
              let outline = document.querySelector('.moving-outline circle')
              const outlineLength = outline ? outline.getTotalLength() : null
              timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
              let increment = outlineLength - (currentTime / demoDuration) * outlineLength;
              outline.style.strokeDasharray = outlineLength
              outline.style.strokeDashoffset = increment;

            if (currentTime >= demoDuration) {
                song.pause();
                video.pause()
                song.currentTime = 0;
                play.src = "./src/assets/svg/play.svg";
                }
            };

            if (song.paused) {
                video.play()
                song.play()
                play.src = './src/assets/svg/pause.svg'
            }
            
                else {
                    song.pause()
                    video.pause()
                    play.src = './src/assets/svg/play.svg'
                }
            
        }
       
```
Idea implemented from Meditation App by DevelopedByEd
