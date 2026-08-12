const TextoVermelho = document.getElementById('spanTextoVermelho');
const TextoVerde = document.getElementById('spanTextoVerde');
const TextoAzul = document.getElementById('spanTextoAzul');

const botaoAlterarVermelho = document.getElementById('btnAlterarVermelho');
const botaoAlterarVerde = document.getElementById('btnAlterarVerde');
const botaoAlterarAzul = document.getElementById('btnAlterarAzul');

botaoAlterarVermelho.addEventListener('click', () => {
    TextoVermelho.style.color ='red';
} );
botaoAlterarVerde.addEventListener('click', () => {
    TextoVerde.style.color ='green';
} );
botaoAlterarAzul.addEventListener('click', () => {
    TextoAzul.style.color ='blue';
} );

const botaoModo = document.getElementById('btnModo');

botaoModo.addEventListener('click', () => {
    if(document.body.style.background === 'black') {
       document.body.style.background = '';
       document.body.style.color = '';
    } else {
        document.body.style.background = 'black';
        document.body.style.color = 'white';

    }
} );


