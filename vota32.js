const boton = document.querySelector('#boton');
var nick = document.querySelector('#nick');
var resultados = document.querySelector('#resultados');

var ajax = new XMLHttpRequest();
var ajax2 = new XMLHttpRequest();

ajax2.open('GET', 'extraer.php', true);

ajax2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

ajax2.send();

ajax2.onreadystatechange= () => {
    
    if(ajax2.readyState === 4 && ajax2.status === 200) {
        
        let resultado = ajax2.response;
        let separador = "&";
        let array = resultado.split(separador);
        
        
        for(i = 0; i < array.length; i++) {
            
                let temp = `<h3>${array[i]}<h3/>`
                
                resultados.innerHTML += temp;
            
        }

        var h3 = document.getElementsByTagName('h3');

        for(j=0; j < h3.length; j++) {

            if(h3[j].innerText == '') {
                h3[j].style.display = 'none';
            }

        }
        
        
    }
    
}


boton.addEventListener('click', e => {
   
    e.preventDefault();
    
    if(nick.value.length == 0) {
        alert('Ingrese un nick vàlido');
    } else {
        
        let valor = nick.value;
        
        let data = `nick=${valor}`;
        
        ajax.open('POST', 'votar.php', true);
        ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajax.send(data);
    }
    
});

ajax.onreadystatechange = () => {
    
    if(ajax.readyState === 4 && ajax.status === 200) {
        
        if(ajax.response == 'tramposo') {
            alert('Ya votaste, no seas tramposo xD!');
            location.href = "/index.html";
        }
        if(ajax.response == 'bien') {
            alert('Muchas gracias por votar');
            location.href = "/index.html";
        }
        
    }
    
}