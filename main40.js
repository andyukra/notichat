
const uno = document.querySelector('#uno');
const dos = document.querySelector('#dos');
const tres = document.querySelector('#tres');
const cuatro = document.querySelector('#cuatro');
const cinco = document.querySelector('#cinco');
const seis = document.querySelector('#seis');
const siete = document.querySelector('#siete');

const img = document.querySelectorAll('.tarjeta2 img');

const clima = document.querySelector('.clima');

const grid1 = document.querySelector('.grid1');
const grid2 = document.querySelector('.grid2');
const grid3 = document.querySelector('.grid3');
const grid4 = document.querySelector('.grid4');
const grid5 = document.querySelector('.grid5');
const grid6 = document.querySelector('.grid6');
const grid7 = document.querySelector('.grid7');

const audio = document.querySelector('#golo');
const play = document.querySelector('#play');

var links = document.querySelector('#links');

var iconito = 0;

var ajax = new XMLHttpRequest();
var ajax2 = new XMLHttpRequest();

function enviar() {

    let exp = /.jpg|.png|.jpeg/;

    if(exp.exec(links.value)) {

        return true;

    } else {
        
        alert('Ingresa un Link de foto válido');
        return false;

    }

}


if(screen.width > 1279) {
    const banner = document.querySelector('.banner');
    const banner2 = document.querySelector('.banner2');
    banner.className += ' animated tada delay-1s';
    banner2.className += ' animated bounceInUp delay-2s';
}
    



play.addEventListener('click', e => {
    
    if(audio.paused) {
        audio.play();
        e.target.className = 'fas fa-pause-circle';
    } else {
        audio.pause();
        e.target.className = 'fas fa-play-circle';
    }   
    
});


uno.addEventListener('click', e => {
   
    grid1.classList.toggle('toggle');
    
});

dos.addEventListener('click', e => {
   
    grid2.classList.toggle('toggle');
    
});

tres.addEventListener('click', e => {
   
    grid3.classList.toggle('toggle');
    
});

cuatro.addEventListener('click', e => {
   
    grid4.classList.toggle('toggle');
    
});

cinco.addEventListener('click', e => {
   
    grid5.classList.toggle('toggle');
    
});

seis.addEventListener('click', e => {
   
    grid6.classList.toggle('toggle');
    
});

siete.addEventListener('click', e => {
   
    grid7.classList.toggle('toggle2');
    
});

// CLIMA

ajax.onload = e => {
    const respuesta = ajax.response;
    const RP = JSON.parse(respuesta);
    
    
    switch(RP.weather[0].main) {
        case 'Clouds' : iconito = ' fas fa-cloud-sun';
            break;
        case 'Clear' : iconito = ' fas fa-sun';
            break;
        case 'Fog' : iconito = ' fas fa-smog';
            break;
        case 'Snow' : iconito = ' fas fa-snowflake';
            break;
        case 'Rain' : iconito = ' fas fa-cloud-showers-heavy';
            break;
        case 'Drizzle' : iconito = ' fas fa-cloud-rain';
            break;
        case 'Thunderstorm' : iconito = ' fas fa-poo-storm';
            break;
    }
    
    console.log(RP);
    
    clima.innerHTML = `<span class="pais">Mèxico</span>
                       <div class="cajaTemp">
                        <span class="tempActual">${Math.floor(RP.main.temp)}º</span>
                        <span id="icono" class="${iconito}"></span>
                       </div>
                       <div class="minimos">
                        <span class="tempMin">min ${Math.floor(RP.main.temp_min)}º</span>
                        <span class="tempMax">max ${Math.floor(RP.main.temp_max)}º</span>
                       </div>`;
}


ajax.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=méxico&units=metric&appid=f9c896edd5d21e5641ca7e1d113648c0');

ajax.responseType = "application/json";

ajax.send();

// CONSEGUIR DATOS DE CHISMES

ajax2.open('GET', 'chismes.php', true);
ajax2.setRequestHeader('Content-Type', 'application/json');
ajax2.send();

ajax2.onreadystatechange = () => {

    if(ajax2.readyState === 4 && ajax2.status === 200) {

        let data = ajax2.response;
        let json = eval(data);

        let imgSrc = [];
        let h2Src = [];
        let pSrc = [];

        for(k=0; k < json.length; k+=3) {

            let x  = json[k];

            imgSrc.push(x);

        }
        for(h=1; h < json.length; h+=3) {

            let x  = `<h2>${json[h]}</h2>`;

            h2Src.push(x);

        }
        for(p=2; p < json.length; p+=3) {

            let x  = `<p>${json[p]}</p>`;

            pSrc.push(x);

        }

        for(m=0; m < imgSrc.length; m++) {

            let plantilla = `<div class="tarjeta">
                                <img src=${imgSrc[m]} alt="">
                                <h2>${h2Src[m]}</h2>
                                <p>${pSrc[m]}</p>
                                <p style="padding: 10px;
                                background-color: black;
                                max-height: 50px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                color: grey;">Fecha : 7/05/2020</p>
                            </div>`;

            grid7.innerHTML += plantilla;

        }

        var pElem = document.getElementsByTagName('p');

        for(b=0; b < pElem.length; b++) {

            if(pElem[b].innerText == '') {

                pElem[b].style.display = 'none';

            }

        }

    }


}


// ASIGNAR LINKS A IMAGENES
 
for(i = 0; i <= img.length; i++) {
    
    let link = img[i].getAttribute('src');
    
    let link2 = link.replace('thumbs', 'fotos');
    
    img[i].addEventListener('click', e => {
        window.open(link2, '_blank');
    });
    
};































