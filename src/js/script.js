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
        'Novembro',
        'Dezembro'
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

//=================================================
//tempo

const keyWeather = '46108e434e2e9a283a3c0414bfdf088b'

const cardWeather = {
    cardBottom: document.querySelector('.weather__bottom'),
    cidyHTML: document.querySelector('#cidade__weatherID'),
    btn: document.querySelector('.weather__top button'),
    nameCidyHTML: document.querySelector('.infos__name__city h3'),
    pandeira: document.querySelector('.infos__name__city img'),
    graus: document.querySelector('.graus'),
    estadoEscrito: document.querySelector('.estado__tempo p'),
    estadoIMG: document.querySelector('.estado__tempo img'),
    agua: document.querySelector('.agua'),
    vento: document.querySelector('.vento'),

    erro404: document.querySelector('.weather404')
}

cardWeather.btn.addEventListener('click', () =>{
    pegarWeatherAPI(cardWeather.cidyHTML.value)
})

cardWeather.cidyHTML.addEventListener('keyup', (evento) =>{
    if(evento.key == 'Enter'){
        pegarWeatherAPI(cardWeather.cidyHTML.value)
    }
})

const pegarWeatherAPI = async (cidy) =>{

    const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cidy}&units=metric&&appid=${keyWeather}&lang=pt_br`

    const res = await fetch(apiLink)
    const data = await res.json()
    
    mudarCard(data)
}

const mudarCard = (data) =>{
    console.log(data)
    if(data.cod == '404'){
        cardWeather.cardBottom.classList.add('weather__hide')
        cardWeather.erro404.classList.remove('weather__hide')
    }else{
        if(cardWeather.cardBottom.classList.contains('weather__hide')){
            cardWeather.cardBottom.classList.remove('weather__hide')
            cardWeather.erro404.classList.add('weather__hide')
        }
        cardWeather.nameCidyHTML.textContent = data.name
        cardWeather.pandeira.src = `https://flagsapi.com/${data.sys.country}/shiny/64.png`
        cardWeather.graus.textContent = `${Math.floor(data.main.temp)}°`
        cardWeather.estadoEscrito.textContent = data.weather[0].description
        cardWeather.estadoIMG.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    
        cardWeather.agua.innerHTML = `
        <i class="fa-solid fa-droplet"></i>
        ${data.main.humidity}%
        `
    
        cardWeather.vento.innerHTML = `
        <i class="fa-solid fa-wind"></i>
        ${data.wind.speed}km/h`
    }
}

pegarWeatherAPI('franca')