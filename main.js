function execute (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        alert('Elemento ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function () {
        execute(idAudio);
    }

    tecla.onkeydown = function (evento) {

        console.log(evento.code);
    
        if (evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter'){ 
            tecla.classList.add('ativa');
         }
        }    

        tecla.onkeyup = function () {
            tecla.classList.remove('ativa');
        }
}
