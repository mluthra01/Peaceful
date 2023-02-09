import { themeFirst} from './scripts/theme1'
import { display } from './scripts/display'
import { themeSecond } from './scripts/theme2'
import { themeThird } from './scripts/theme3'

document.addEventListener("DOMContentLoaded", () => {
    themeFirst()
    themeSecond()
    themeThird()
    display()

    // window.addEventListener("beforeunload", (e) => {
    //     console.log("hi")
    // const song = document.querySelector('.music1')
    // // song.pause()
    // restartSong(song)
    // })
})



