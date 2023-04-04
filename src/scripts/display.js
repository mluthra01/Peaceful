import { themeFirst} from './theme1'
import { themeSecond } from './theme2'
import { themeThird } from './theme3'

export const display = () => {
    const theme1Btn = document.getElementById('theme1-btn');
    const theme2Btn = document.getElementById('theme2-btn');
    const theme3Btn = document.getElementById('theme3-btn');
    const theme1Section = document.getElementById('theme1');
    const theme2Section = document.getElementById('theme2');
    const theme3Section = document.getElementById('theme3');
    const homeBtn = document.querySelector('.back-to-home')
    const homepage = document.querySelector('.homepage')
    const whyMeditate = document.querySelector('#why-med')
    const whyMeditateBtn = document.querySelector('.meditation-reason-btn')
    const meditationSection = document.getElementById("reasons")
    const footer = document.querySelector("#footer-content")
    const peaceful = document.querySelector('h3')
    const footerComment = document.querySelector('#footer-comment')

    theme1Btn.addEventListener('click', () => {
        theme1Section.style.display = 'flex'
        homepage.style.display = 'none'
        whyMeditate.style.display = 'none'
        theme2Section.style.display = 'none'
        footer.style.display = 'none'
        peaceful.style.color = 'skyblue'
        homeBtn.style.display = 'block'
        homeBtn.style.border = '2px solid skyblue'
        themeFirst()
    })

    theme2Btn.addEventListener('click', () => {
        theme2Section.style.display = 'flex'
        homepage.style.display = 'none'
        whyMeditate.style.display = 'none'
        theme1Section.style.display = 'none'
        footer.style.display = 'none'
        peaceful.style.color = 'lightgreen'
        homeBtn.style.display = 'block'
        homeBtn.style.border = '2px solid lightgreen'
        themeSecond()
    })

    theme3Btn.addEventListener('click', () => {
        theme3Section.style.display = 'flex'
        homepage.style.display = 'none'
        whyMeditate.style.display = 'none'
        theme1Section.style.display = 'none'
        theme2Section.style.display = 'none'
        footer.style.display = 'none'
        peaceful.style.color = 'lightyellow'
        homeBtn.style.display = 'block'
        homeBtn.style.border = '2px solid lightyellow'
        themeThird()
    })


    peaceful.addEventListener('click', () => {
    homepage.style.display = 'block';
    theme1Section.style.display = 'none';
    theme2Section.style.display = 'none'
    theme3Section.style.display = 'none'
    meditationSection.style.display = 'none'
    whyMeditate.style.display = 'block'
    footer.style.display = 'flex'
    homeBtn.style.display = 'none'
    peaceful.style.color = 'black'
    
    })


    whyMeditateBtn.addEventListener('click', () => {
    homepage.style.display = 'none'
    meditationSection.style.display = 'block'
    whyMeditateBtn.style.display = 'none'
    footer.style.display = 'none'
    homeBtn.style.display = 'block'
    homeBtn.style.border = "2px solid lightyellow"
})

    homeBtn.addEventListener('click', () => {
    homepage.style.display = 'block';
    theme1Section.style.display = 'none';
    theme2Section.style.display = 'none'
    theme3Section.style.display = 'none'
    meditationSection.style.display = 'none'
    whyMeditate.style.display = 'block'
    footer.style.display = 'flex'
    homeBtn.style.display = 'none'
    peaceful.style.color = 'black'

    })


}


