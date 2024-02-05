'use strict';

const socialButton = document.querySelector('#social_button')
const socialSection = document.querySelector('.socials')
const winnersButton = document.querySelector('#winners_button')
const buttonsHeader = document.querySelector('.button_intro')
const homeButton = document.querySelector('.home_button')

socialButton.addEventListener('click', function() {
    socialSection.style.transform = 'translateY(-200px)'
    winnersButton.style.transform = 'translateX(1500px)'
    socialButton.style.transform = 'translateX(-1500px)'
    buttonsHeader.style.transform = 'translateX(1500px)'
    winnersButton.style.transition = 'ease-in-out 800ms'
    socialButton.style.transition = 'ease-in-out 800ms'
})

homeButton.addEventListener('click', function() {
    socialSection.style.transform = null
    winnersButton.style.transform = null
    socialButton.style.transform = null
    buttonsHeader.style.transform = null
    socialButton.style.transition = null
    winnersButton.style.transition = null
})

socialButton.addEventListener('mouseover', function() {
    socialButton.style.transition = 'ease-in-out 100ms'
})

winnersButton.addEventListener('mouseover', function() {
    winnersButton.style.transition = 'ease-in-out 100ms'
})