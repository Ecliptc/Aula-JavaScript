// ETAPA 1: O Servidor envia os dados como TEXTO(String)
// (o stringify simula o que o servidor faz)
const jsonDados = JSON.stringify([
    { 'id': 1, 'nome': 'Notebook Gamer', 'preco':'R$4500.00', 'status':'Disponivel em estoque'},
    { 'id': 2, 'nome': 'Mouse Sem Fio', 'preco':'R$120.00', 'status':'Esgotado'},
    { 'id': 3, 'nome': 'Teclado Mecânico', 'preco':'R$350.00', 'status':'Disponivel em estoque'},
    { 'id': 4, 'nome': 'Headset Wireless', 'preco':'R$600.00', 'status':'Disponivel em estoque'},
    { 'id': 5, 'nome': 'Mousepad Desk Mat', 'preco':'R$50.00', 'status':'Esgotado'}
])

// ETAPA 2: O Cliente (Navegador) recebe um texto e "desempacota"
const dadosConvertidos = JSON.parse(jsonDados);

// ETAPA 3: O Javascript manipula os dados convertidos para criar
// a tabela
const corpoTabela = document.getElementById('tbodyCorpoTabela');
dadosConvertidos.forEach(produto => {
    const linha = document.createElement('tr');

    // Usando "Template Literals"
    linha.innerHTML = `<td>${produto.id}</td><td>${produto.nome}
    </td><td>${produto.preco}</td><td>${produto.status}</td>`;

    corpoTabela.appendChild(linha);
})