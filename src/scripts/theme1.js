export const themeFirst = () => {
    const song = document.querySelector('.music1')
    const play = document.querySelector('.play1')
    const video = document.querySelector('.video1')
    const timeDisplay = document.querySelector('.display-time')
    const timeSelect = document.querySelectorAll('.time-select button')
    let demoDuration = 120;
    const replay = document.querySelector(".replay");
    const homeBtn = document.querySelector('.back-to-home')
    const peaceful = document.querySelector('h3')
    const volumeSlider = document.getElementById("volume");


function isPlaying(song) {
    song.ontimeupdate = function () {
        let currentTime = song.currentTime;
        let elapsed = demoDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);
        let outline = document.querySelector('.moving-outline circle');
        
        if (outline && outline.ownerSVGElement.getBoundingClientRect().width !== 0) {
                const outlineLength = outline.getTotalLength();
            timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            let increment = outlineLength - (currentTime / demoDuration) * outlineLength;
            outline.style.strokeDasharray = outlineLength;
            outline.style.strokeDashoffset = increment;

            if (currentTime >= demoDuration) {
                song.pause();
                video.pause();
                song.currentTime = 0;
                play.src = "./src/assets/svg/play.svg";
            }
        }
    };

    if (song.paused) {
        video.play();
        song.play();
        play.src = './src/assets/svg/pause.svg';
    } else {
        song.pause();
        video.pause();
        play.src = './src/assets/svg/play.svg';
    }
}


        const restartSong = song =>{
        song.currentTime = 0;
            }

        replay.addEventListener("click", function() {
            restartSong(song);
            
        }); 


    homeBtn.addEventListener('click', () => {
        song.pause()
        song.ontimeupdate = null
        video.pause()
        restartSong(song);
        play.src = './src/assets/svg/play.svg'
        timeDisplay.textContent = `${Math.floor(demoDuration / 60).toString().padStart(2, '0')}:${(Math.floor(demoDuration % 60).toString().padStart(2, '0'))}`
        let outline = document.querySelector('.moving-outline circle')
        const outlineLength = (outline && outline.ownerSVGElement.getBoundingClientRect().width !== 0) ? outline.getTotalLength() : null
        if (outline) {
            outline.style.strokeDashoffset = outlineLength;
            outline.style.strokeDasharray = outlineLength;
        }
    })


    peaceful.addEventListener('click', () => {
        song.pause()
        song.ontimeupdate = null
        video.pause()
        restartSong(song);
        play.src = './src/assets/svg/play.svg'
        timeDisplay.textContent = `${Math.floor(demoDuration / 60).toString().padStart(2, '0')}:${(Math.floor(demoDuration % 60).toString().padStart(2, '0'))}`
        let outline = document.querySelector('.moving-outline circle')
        const outlineLength = (outline && outline.ownerSVGElement.getBoundingClientRect().width !== 0) ? outline.getTotalLength() : null
        if (outline) {
            outline.style.strokeDashoffset = outlineLength;
            outline.style.strokeDasharray = outlineLength;
        }
    })

    play.addEventListener('click', () => {
        isPlaying(song)
    })

        timeSelect.forEach(option => {
            option.addEventListener('click', function() {
                demoDuration = this.getAttribute('data-time');
                timeDisplay.textContent = `${Math.floor(demoDuration / 60).toString().padStart(2, '0')}:${(Math.floor(demoDuration % 60).toString().padStart(2, '0'))}`
                
                })
            })

            volumeSlider.addEventListener("input", function() {
            song.volume = this.value;
        })

    

}
            
        




