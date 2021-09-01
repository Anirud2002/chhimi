const burger = document.querySelector('.burger-menu')
const nav = document.querySelector("nav")

burger.addEventListener('click', ()  => {
    nav.classList.toggle("show")
    if(nav.classList.contains('show')){
        burger.innerHTML = '<i class="fas fa-times"></i>'
        return
    }
    burger.innerHTML = '<i class="fas fa-bars"></i>'

})