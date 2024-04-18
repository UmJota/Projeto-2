const form = document.getElementById('form-contato');
const contatos = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputContatos = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');
    const numero = inputNumero.value;

    if (contatos.includes(inputContatos.value)){
        alert(`O contato ${inputContatos.value} já foi inserido`)
    } else if (numeros.includes(parseFloat(inputNumero.value))){
        alert(`O numero ${inputNumero.value} já foi inserido`)
    }else if (numero.length > 10) {
            alert(`O número deve ter no máximo 10 caracteres`);
    }else if (numero.length < 8) {
            alert(`O número deve ter no minimo 8 caracteres`);
    }else{
        contatos.push(inputContatos.value);
        numeros.push(parseFloat(inputNumero.value));

    let linha = '<tr>';
    linha += `<td>${inputContatos.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }
    

    inputContatos.value = '';
    inputNumero.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector(`tbody`);
    corpoTabela.innerHTML = linhas;
}
