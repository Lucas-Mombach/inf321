const botoesComprar = document.querySelectorAll('.btn-comprar');

botoesComprar.forEach(botao => {
    botao.addEventListener('click', function() {
        alert("Produto adicionado ao carrinho!");
        this.classList.toggle('botao-ativo');
        this.classList.add('sucesso');       
        this.classList.remove('btn-padrao'); 
    });
});

const btnBuscar = document.querySelector('#btn-buscar');
const inputBusca = document.querySelector('#input-busca');
const produtos = document.querySelectorAll('.produto-card');

btnBuscar.addEventListener('click', function() {
    const termoBusca = inputBusca.value.toLowerCase();

    produtos.forEach(produto => {
        const nomeProduto = produto.querySelector('.produto-nome').textContent.toLowerCase();
        
        if (nomeProduto.includes(termoBusca)) {
            produto.style.display = 'block'; 
        } else {
            produto.style.display = 'none'; 
        }
    });
});

const formulario = document.querySelector('#form-contato');
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputMensagem = document.querySelector('#mensagem');

formulario.addEventListener('submit', function(event) {
    let formValido = true;

    inputNome.classList.remove('campo-erro');
    inputEmail.classList.remove('campo-erro');
    inputMensagem.classList.remove('campo-erro');

    if (inputNome.value.trim() === "") {
        inputNome.classList.add('campo-erro');
        formValido = false;
    }

    if (inputEmail.value.trim() === "") {
        inputEmail.classList.add('campo-erro');
        formValido = false;
    }

    if (inputMensagem.value.trim() === "") {
        inputMensagem.classList.add('campo-erro');
        formValido = false;
    }

    if (!formValido) {
        event.preventDefault(); 
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
});