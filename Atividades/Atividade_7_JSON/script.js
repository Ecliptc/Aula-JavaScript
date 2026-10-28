// ETAPA 1: O Servidor envia os dados como TEXTO(String)
// (o stringify simula o que o servidor faz)
const jsonDados = JSON.stringify([
    { 'id': 1, 'nome': 'Ana Silva', 'email':'ana@gmail.com'},
    { 'id': 2, 'nome': 'Carlos Souza', 'email':'carlos@gmail.com'},
    { 'id': 3, 'nome': 'Luís Santos', 'email':'luis@gmail.com'},
    { 'id': 4, 'nome': 'Maria Pereira', 'email':'maria@gmail.com'},

])

// ETAPA 2: O Cliente (Navegador) recebe um texto e "desempacota"
const dadosConvertidos = JSON.parse(jsonDados);

// ETAPA 3: O Javascript manipula os dados convertidos para criar
// a tabela
const corpoTabela = document.getElementById('tbodyCorpoTabela');
dadosConvertidos.forEach(usuario => {
    const linha = document.createElement('tr');

    // Usando "Template Literals"
    linha.innerHTML = `<td>${usuario.id}</td><td>${usuario.nome}
    </td><td>${usuario.email}</td>`;

    corpoTabela.appendChild(linha);
})