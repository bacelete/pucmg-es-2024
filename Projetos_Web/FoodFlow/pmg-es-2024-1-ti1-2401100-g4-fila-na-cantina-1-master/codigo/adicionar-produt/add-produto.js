const inputFile = document.querySelector("#imageUpload");
const imageView = document.querySelector("#img_preview_element");
const previewNome = document.querySelector("#name_preview");
const previewPreco = document.querySelector("#price_preview");
const previewQtd = document.querySelector("#qtd_preview");
const nomeInput = document.querySelector("input[placeholder='Nome do item:']");
const precoInput = document.querySelector("#input_preco");
const qtdInput = document.querySelector("#input_quantidade");
const salvarBtn = document.querySelector("#salvarItem");

inputFile.addEventListener("change", uploadImage);

function uploadImage() {
  if (inputFile.files && inputFile.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      imageView.src = e.target.result;
    };

    reader.readAsDataURL(inputFile.files[0]);
  }
}

nomeInput.addEventListener("input", function () {
  previewNome.textContent = nomeInput.value;
});

precoInput.addEventListener("input", function () {
  previewPreco.textContent = `Preço: ${precoInput.value}`;
});

qtdInput.addEventListener("input", function () {
  previewQtd.textContent = `Quantidade: ${qtdInput.value}`;
});

salvarBtn.addEventListener("click", function () {
  const produto = {
    nome: nomeInput.value,
    preco: precoInput.value,
    quantidade: qtdInput.value,
    imagem: imageView.src
  };

  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  produtos.push(produto);
  localStorage.setItem("produtos", JSON.stringify(produtos));
  alert("Produto salvo com sucesso!");

  // Limpar campos após salvar
  nomeInput.value = "";
  precoInput.value = "";
  qtdInput.value = "";
  imageView.src = "";
  previewNome.textContent = "";
  previewPreco.textContent = "";
  previewQtd.textContent = "";
});

document.addEventListener("DOMContentLoaded", function () {
  const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

  if (produtos.length > 0) {
    const ultimoProduto = produtos[produtos.length - 1];
    nomeInput.value = ultimoProduto.nome;
    precoInput.value = ultimoProduto.preco;
    qtdInput.value = ultimoProduto.quantidade;
    imageView.src = ultimoProduto.imagem;

    previewNome.textContent = ultimoProduto.nome;
    previewPreco.textContent = `Preço: ${ultimoProduto.preco}`;
    previewQtd.textContent = `Quantidade: ${ultimoProduto.quantidade}`;
  }
});
