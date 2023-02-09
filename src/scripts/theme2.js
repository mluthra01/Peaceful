
export const themeSecond = () => {
    const song = document.querySelector('.music2')
    const homeBtn = document.querySelector('.back-to-home')
    const play = document.querySelector('.play2')
    const video = document.querySelector('.video2')
    const timeDisplay = document.querySelector('.display-time1')
    const timeSelect = document.querySelectorAll('.time-select1 button')
    const replay = document.querySelector(".replay1");
    const peaceful = document.querySelector('h3')
    let demoDuration = 600;



        function isPlaying(song) {
        
                if (song.paused) {
                    song.play()
                
                    // videos.forEach( video => {
                        video.play()
                    // })
                    play.src = './src/assets/svg/pause.svg'
                }
            
                else {
                    song.pause()
                    // videos.forEach( video => {
                    video.pause()
                    // })
                    play.src = './src/assets/svg/play.svg'
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
        // song.ontimeupdate = null
        video.pause()
        restartSong(song);
        play.src = './src/assets/svg/play.svg'
        timeDisplay.textContent = `${Math.floor(demoDuration / 60).toString().padStart(2, '0')}:${(Math.floor(demoDuration % 60).toString().padStart(2, '0'))}`
    })

    peaceful.addEventListener('click', () => {

        song.pause()
        song.ontimeupdate = null
        video.pause()
        restartSong(song);
        play.src = './src/assets/svg/play.svg'
        timeDisplay.textContent = `${Math.floor(demoDuration / 60).toString().padStart(2, '0')}:${(Math.floor(demoDuration % 60).toString().padStart(2, '0'))}`
    })




    play.addEventListener('click', () => {
            isPlaying(song)
        })

// select sound

timeSelect.forEach(option => {
    option.addEventListener('click', function() {
            demoDuration = this.getAttribute('data-time');
            timeDisplay.textContent = `${Math.floor(demoDuration / 60).toString().padStart(2, '0')}:${(Math.floor(demoDuration % 60).toString().padStart(2, '0'))}`

    
    })
})


    

song.ontimeupdate = function() {
        let currentTime = song.currentTime;
        let elapsed = demoDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);
        let outline = document.querySelector('.moving-outline1 circle');
        const outlineLength = outline ? outline.getTotalLength() : null
        // timeDisplay.textContent = `${Math.floor(demoDuration / 60).toString().padStart(2, '0')}:${(Math.floor(demoDuration % 60).toString().padStart(2, '0'))}`
        timeDisplay.textContent = `${minutes}:${seconds}`;
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

}