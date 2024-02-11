//Menu Mobile
const navALL = {
    nav: document.querySelector('nav'),
    menuMobile: document.querySelector('.nav__menu__mobile'),

}
const tempoHTML = document.querySelector(".tempo")

navALL.menuMobile.addEventListener('click', () =>{
    navALL.nav.classList.toggle('active')
})

let dayAll

//=================================================
//Relogio
const relogioTempoReal = setInterval( () =>{
    dayAll = new Date();

    let horas = dayAll.getHours()
    let minutos = dayAll.getMinutes()

    if(horas < 10) horas = '0' + horas
    if(minutos < 10) minutos = '0' + minutos

    tempoHTML.textContent = `${horas}:${minutos}`
})