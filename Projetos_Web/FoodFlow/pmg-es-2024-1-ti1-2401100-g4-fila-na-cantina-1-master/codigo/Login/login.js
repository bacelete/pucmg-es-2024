const loginEmpresa = document.getElementById('section-login-empresa');
const loginCliente = document.getElementById('section-login-cliente');
const cadastroCliente = document.getElementById('section-cadastro-cliente');
const cadastroEmpresa = document.getElementById('section-cadastro-empresa');
const esqSenha = document.getElementById('section-esqSenha');
const inputFile = document.getElementById("input-file");

function alternarLoginEmpresa() {
    cadastroEmpresa.style.display = 'none'
    cadastroCliente.style.display = 'none'
    loginCliente.style.display = 'none';
    loginEmpresa.style.display = 'block';
    esqSenha.style.display = 'none';
}

function alternarLoginCliente() {
    loginCliente.style.display = 'block';
    loginEmpresa.style.display = 'none';
    cadastroEmpresa.style.display = 'none'
    cadastroCliente.style.display = 'none'
    esqSenha.style.display = 'none';
}

function alternarCadastroCliente() {
    loginCliente.style.display = 'none';
    loginEmpresa.style.display = 'none';
    cadastroEmpresa.style.display = 'none'
    cadastroCliente.style.display = 'block'
    esqSenha.style.display = 'none';
}

function alternarCadastroEmpresa() {
    loginCliente.style.display = 'none';
    loginEmpresa.style.display = 'none';
    cadastroEmpresa.style.display = 'block'
    cadastroCliente.style.display = 'none'
    esqSenha.style.display = 'none';
}

function alternarEsqueceuSenha() {
    esqSenha.style.display = 'flex';
    loginCliente.style.display = 'none';
    loginEmpresa.style.display = 'none';
    cadastroEmpresa.style.display = 'none'
    cadastroCliente.style.display = 'none'
}

inputFile.addEventListener("change", () => {
    if (inputFile.files.length > 0) {
        let fileName = inputFile.files[0].name;
        document.getElementById("file-label").textContent = "Documento selecionado: " + fileName;
    } else {
        document.getElementById("file-label").textContent = "Documento assinado pela Puc-Minas";
    }
})