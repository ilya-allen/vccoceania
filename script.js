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
})

homeButton.addEventListener('click', function() {
    socialSection.style.transform = 'translateY(1500px)'
    winnersButton.style.transform = 'translateX(0px)'
    socialButton.style.transform = 'translateX(0px)'
    buttonsHeader.style.transform = 'translateX(0px)'
})