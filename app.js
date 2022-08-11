const features = document.querySelector('.features-list-1');
const company = document.querySelector('.features-list');
const arrow1 = document.querySelector('.arr1');
const arrow2 = document.querySelector('.arr2');
const arrow3 = document.querySelector('.arr3');
const arrow4 = document.querySelector('.arr4');
const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');
const button3 = document.querySelector('.btn3');
const button4 = document.querySelector('.btn4');
const button5 = document.querySelector('.menu-open');
const button6 = document.querySelector('.close-button');
const mobileMenu = document.querySelector('.mobile-menu');
const menuFeatures = document.querySelector('.menu-features-list-1');
const menuCompany = document.querySelector('.menu-features-list');

button1.addEventListener('click', () => {
    features.classList.toggle('open')
    arrow1.classList.toggle('flip')
})
button2.addEventListener('click', () => {
    company.classList.toggle('open')
    arrow2.classList.toggle('flip')
})
button3.addEventListener('click', () => {
    menuFeatures.classList.toggle('open')
    arrow3.classList.toggle('flip')
})
button4.addEventListener('click', () => {
    menuCompany.classList.toggle('open')
    arrow4.classList.toggle('flip')
})

button5.addEventListener('click', () => {
    mobileMenu.classList.add('open')
})
button6.addEventListener('click', () => {
    mobileMenu.classList.remove('open')
})

