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

//=================================================
//calendario

const calendarioTempoReal = setInterval(() =>{
    const calendarioALL = {
        diaDaSemanaText: document.querySelector('.dia__da__semana--text'),
        diaText: document.querySelector('.dia--text'),
        mesText: document.querySelector('.mes--text'),
        anoText: document.querySelector('.ano--text'),

        mesNumber: document.querySelector('.mes'),
        diaNumber: document.querySelector('.dia')
    }
    const diasSemanaAll  = [
    'Domingo', 
    'Segunda-feira', 
    'Terça-feira', 
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sabado']
    const mesAll = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
       ' Novembro',
       ' Dezembro'
    ]


    let diaNumero = dayAll.getDay()
    let diaEscrito = diasSemanaAll[diaNumero]

    let diaMes = dayAll.getDate()

    let mesNumero = dayAll.getMonth()
    let mesEscrito = mesAll[mesNumero]

    let anoNumero = dayAll.getFullYear()
    
    calendarioALL.diaDaSemanaText.textContent = diaEscrito
    calendarioALL.diaText.textContent = diaMes
    calendarioALL.mesText.textContent = mesEscrito
    calendarioALL.anoText.textContent = anoNumero

    if(mesNumero < 10) mesNumero = '0'+ mesNumero
    if(diaMes < 10) diaMes = '0' + diaMes

    calendarioALL.mesNumber.textContent = mesNumero
    calendarioALL.diaNumber.textContent = diaMes
}, 86.400000)