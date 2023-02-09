export const themeThird = () => {
    const song = document.querySelector('.music3')
    const play = document.querySelector('.play3')
    const homeBtn = document.querySelector('.back-to-home')
    const video = document.querySelector('.video3')
    const timeDisplay = document.querySelector('.display-time2')
    const timeSelect = document.querySelectorAll('.time-select2 button')
    const replay = document.querySelector(".replay2");
    const peaceful = document.querySelector('h3')
    let demoDuration = 120;




    function isPlaying(song) {
        song.ontimeupdate = function() {
        let currentTime = song.currentTime;
        let elapsed = demoDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);
        let outline = document.querySelector('.moving-outline2 circle');
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
            song.play()
            video.play()
            play.src = './src/assets/svg/pause.svg'
        }
        else {
            song.pause()
            video.pause()
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

        peaceful.addEventListener('click', () => {
        song.pause()
        song.ontimeupdate = null
        video.pause()
        restartSong(song);
        play.src = './src/assets/svg/play.svg'
        timeDisplay.textContent = `${Math.floor(demoDuration / 60).toString().padStart(2, '0')}:${(Math.floor(demoDuration % 60).toString().padStart(2, '0'))}`
        let outline = document.querySelector('.moving-outline2 circle')
        const outlineLength = outline ? outline.getTotalLength() : null
        outline.style.strokeDashoffset = outlineLength;
        outline.style.strokeDasharray = outlineLength;
        })


        homeBtn.addEventListener('click', () => {
            song.pause()
            song.ontimeupdate = null
            video.pause()
            restartSong(song);
            play.src = './src/assets/svg/play.svg'
            timeDisplay.textContent = `${Math.floor(demoDuration / 60).toString().padStart(2, '0')}:${(Math.floor(demoDuration % 60).toString().padStart(2, '0'))}`
            let outline = document.querySelector('.moving-outline2 circle')
            const outlineLength = outline ? outline.getTotalLength() : null
            outline.style.strokeDashoffset = outlineLength;
            outline.style.strokeDasharray = outlineLength;
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
    
            const volumeSlider = document.getElementById("volume2");

            volumeSlider.addEventListener("input", function() {
            song.volume = this.value;
    })

    }









    
