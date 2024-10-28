// import { auth, database, createUserWithEmailAndPassword, ref, set, signInWithEmailAndPassword } from '../script.js';

// const emailCliente = document.getElementById("email-cliente");
// const psswrdCliente = document.getElementById("psswrd-cliente");
// const nomeCliente = document.getElementById("nome-cliente");
// const signUpCliente = document.getElementById("btn-cadastro-cliente");

// const emailClienteLogin = document.getElementById("email-cliente-login");
// const psswrdClienteLogin = document.getElementById("psswrd-cliente-login");
// const signInCliente = document.getElementById("btn-login-cliente");

// const emailEmpresa = document.getElementById("email-empresa");
// const psswrdEmpresa = document.getElementById("psswrd-empresa");
// const nomeEmpresa = document.getElementById("nome-empresa");
// const docsEmpresa = document.getElementById("input-file");
// const cnpj = document.getElementById("cnpj");
// const signUpEmpresa = document.getElementById("btn-cadastro-empresa");

// const emailEmpresaLogin = document.getElementById("email-empresa-login");
// const psswrdEmpresaLogin = document.getElementById("psswrd-empresa-login");
// const signInEmpresa = document.getElementById("btn-login-empresa");

// signUpCliente.addEventListener("click", () => {
//   createUserWithEmailAndPassword(auth, emailCliente.value, psswrdCliente.value)
//     .then((userCredential) => {
//       let user = userCredential.user;
//       const db = database;
//       set(ref(db, 'Cliente/' + nomeCliente.value), {
//         Nome: nomeCliente.value,
//         Email: emailCliente.value
//       })
//     })
//     .catch((error) => {});
// });

// signUpEmpresa.addEventListener("click", () => {
//   createUserWithEmailAndPassword(auth, emailEmpresa.value, psswrdEmpresa.value)
//     .then((userCredential) => {
//       let user = userCredential.user;
//       const db = database;
//       set(ref(db, 'Empresa/' + nomeEmpresa.value), {
//         Nome: nomeEmpresa.value,
//         Email: emailEmpresa.value,
//         Documento: docsEmpresa.value,
//         CNPJ: cnpj.value
//       })
//     })
//     .catch((error) => {});
// })

// signInCliente.addEventListener("click", () => {
//   signInWithEmailAndPassword(auth, emailClienteLogin.value, psswrdClienteLogin.value)
//   .then((userCredential) => {
//     let user = userCredential.user;
//     window.location.href ="../index.html"
//   }).catch((error) => {

//   })
// })

// signInEmpresa.addEventListener("click", () => {
//   signInWithEmailAndPassword(auth, emailEmpresaLogin.value, psswrdEmpresaLogin.value)
//   .then((userCredential) => {
//     let user = userCredential.user;
//     window.location.href ="../index.html"
//   }).catch((error) => {

//   })
// })

document.addEventListener("DOMContentLoaded", function () {
  const clienteLoginForm = document.querySelector("#section-login-cliente form");
  const clienteLoginEmail = document.querySelector("#email-cliente-login");
  const clienteLoginSenha = document.querySelector("#psswrd-cliente-login");

  const empresaLoginForm = document.querySelector("#section-login-empresa form");
  const empresaLoginEmail = document.querySelector("#email-empresa-login");
  const empresaLoginSenha = document.querySelector("#psswrd-empresa-login");

  const clienteCadastroForm = document.querySelector("#section-cadastro-cliente form");
  const clienteNome = document.querySelector("#nome-cliente");
  const clienteEmail = document.querySelector("#email-cliente");
  const clienteSenha = document.querySelector("#psswrd-cliente");
  const clienteConfirmarSenha = document.querySelector("#confirmar-senha-cliente");

  const empresaCadastroForm = document.querySelector("#section-cadastro-empresa form");
  const empresaNome = document.querySelector("#nome-empresa");
  const empresaEmail = document.querySelector("#email-empresa");
  const empresaSenha = document.querySelector("#psswrd-empresa");
  const empresaConfirmarSenha = document.querySelector("#confirmar-senha-empresa");
  const empresaCnpj = document.querySelector("#cnpj");

  clienteLoginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = clienteLoginEmail.value;
      const senha = clienteLoginSenha.value;

      const cliente = JSON.parse(localStorage.getItem(email));

      if (cliente && cliente.senha === senha) {
          alert("Login bem-sucedido!");
          window.location.href="../index.html"
      } else {
          alert("Email ou senha incorretos.");
      }
  });

  empresaLoginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = empresaLoginEmail.value;
      const senha = empresaLoginSenha.value;

      const empresa = JSON.parse(localStorage.getItem(email));

      if (empresa && empresa.senha === senha) {
          alert("Login bem-sucedido!");
          window.location.href="../lista-estabelecimento/lista-estabelecimento.html"
      } else {
          alert("Email ou senha incorretos.");
      }
  });

  clienteCadastroForm.addEventListener("submit", function (e) {
      e.preventDefault();

      if (clienteSenha.value !== clienteConfirmarSenha.value) {
          alert("As senhas não coincidem.");
          return;
      }

      const cliente = {
          nome: clienteNome.value,
          email: clienteEmail.value,
          senha: clienteSenha.value
      };

      localStorage.setItem(cliente.email, JSON.stringify(cliente));
      alert("Cadastro bem-sucedido!");
      alternarLoginCliente();
  });

  empresaCadastroForm.addEventListener("submit", function (e) {
      e.preventDefault();

      if (empresaSenha.value !== empresaConfirmarSenha.value) {
          alert("As senhas não coincidem.");
          return;
      }

      const empresa = {
          nome: empresaNome.value,
          email: empresaEmail.value,
          senha: empresaSenha.value,
          cnpj: empresaCnpj.value
      };

      localStorage.setItem(empresa.email, JSON.stringify(empresa));
      alert("Cadastro bem-sucedido!");
      alternarLoginEmpresa();
  });
});
