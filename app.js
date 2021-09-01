const landingPage = document.querySelector('#landing-page-1')
const circles = document.querySelector('.circles')
const heyMsg = document.querySelector('.hey')
const welcomeMsg = document.querySelector('.welcoming-msg')
const cCircle = document.querySelector(".act")
const ballBg = document.querySelector('.ball-bg')
const shortIntro = document.querySelector('.short-intro')
const burger = document.querySelector('.burger-menu')
const nav = document.querySelector("nav")

gsap.set([ballBg, shortIntro], {opacity: 0})

const introTimeline = new TimelineLite()
introTimeline
    .fromTo(heyMsg, {y: 30, autoAlpha: 0}, {duration: .5, y: 0, autoAlpha: 1})
    .fromTo(".circle", {y: 30, autoAlpha: 0}, {duration: .5, y: 0, autoAlpha: 1, stagger: 0.1}, "+=.5")
    .to([heyMsg, ".c"], {duration: .5, autoAlpha: 0, stagger: 0.1}, "+=.5")
    .to(".act", {x: (circles.clientWidth / 2) - (cCircle.clientWidth / 2)})
    .to(".act", {y: -40, scale: 1.5, duration: 1})
    .fromTo(welcomeMsg, {y: 30, autoAlpha: 0}, {duration: 1.2, y: -20, autoAlpha: 1, onStart: () => {
        welcomeMsg.textContent = "Welcome to my Website..."
    }})
    .to(".act", 1, {scale: 70, ease: Power1.easeOut, onStart: () => {
        welcomeMsg.textContent = ""
    }, })
    .to('.act', .5, {autoAlpha: 0})
    .to(landingPage, {autoAlpha: 0, onComplete: () => {
        landingPage.remove()
    }})

setTimeout(() => {
    const homePageTimeline = new TimelineLite()
    homePageTimeline
        .fromTo(ballBg, {y: 100, opacity:0}, {duration: 1, y: 0, opacity: 1})
        .fromTo(shortIntro, .7, {opacity: 0}, {opacity: 1})
}, 8500)

burger.addEventListener('click', ()  => {
    nav.classList.toggle("show")
    if(nav.classList.contains('show')){
        burger.innerHTML = '<i class="fas fa-times"></i>'
        return
    }
    burger.innerHTML = '<i class="fas fa-bars"></i>'

})