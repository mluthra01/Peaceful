export const themeSecond = () => {
    const song = document.querySelector('.music2')
    const homeBtn = document.querySelector('.back-to-home')
    const play = document.querySelector('.play2')
    const video = document.querySelector('.video2')
    const timeDisplay = document.querySelector('.display-time1')
    const timeSelect = document.querySelectorAll('.time-select1 button')
    const replay = document.querySelector(".replay1");
    const peaceful = document.querySelector('h3')
    let demoDuration = 120;

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
            let currentTime = song.currentTime;
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
        let outline = document.querySelector('.moving-outline1 circle')
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
        let outline = document.querySelector('.moving-outline1 circle')
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

    const volumeSlider = document.getElementById("volume1");
    volumeSlider.addEventListener("input", function() {
            song.volume = this.value;
    })



}