const tarefas = [
    'Estudar Html',
    'Estudar JavaScript',
    'Compreender o DOM',
    'Entender o conceito de "for" no Javascript',
    'Entender a função "addEventListener" do Javascript',
    'Entender a função "createElement" do Javascript'
];

const container = document.getElementById('divContainer');
const botaocarregar = document.getElementById('btnCarregar');

const listaUl = document.createElement('ul');

botaocarregar.addEventListener('click',() => {
    


for (let i = 0; i < tarefas.length; i++)
{
    const itemLi = document.createElement('li');

    itemLi.innerHTML = '<strong>Item ' + (i + 1) + '</strong>' + tarefas[i];

    listaUl.appendChild(itemLi);

}

container.appendChild(listaUl);

});