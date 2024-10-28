document.addEventListener("DOMContentLoaded", function () {
    const imgPreviewElement = document.getElementById("img_preview_element");
    const nomeProdutoElement = document.getElementById("nome_produto");
    const precoProdutoElement = document.getElementById("preco_produto");
    const quantidadeProdutoElement = document.getElementById("quantidade_produto");
    const salvarItemButton = document.getElementById("salvarItem");

    const urlParams = new URLSearchParams(window.location.search);
    const productIndex = urlParams.get("index");

    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

    if (productIndex !== null && produtos[productIndex]) {
        const produto = produtos[productIndex];
        
        imgPreviewElement.src = produto.imagem;
        nomeProdutoElement.value = produto.nome;
        precoProdutoElement.value = produto.preco;
        quantidadeProdutoElement.value = produto.quantidade;
    }

    function updatePreview() {
        const nome = nomeProdutoElement.value;
        const preco = precoProdutoElement.value;
        const quantidade = quantidadeProdutoElement.value;

        document.getElementById("name_preview").textContent = nome;
        document.getElementById("price_preview").textContent = `Preço: ${preco}`;
        document.getElementById("qtd_preview").textContent = `Quantidade: ${quantidade}`;
    }

    nomeProdutoElement.addEventListener("input", updatePreview);
    precoProdutoElement.addEventListener("input", updatePreview);
    quantidadeProdutoElement.addEventListener("input", updatePreview);

    document.getElementById("imageUpload").addEventListener("change", function (event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            imgPreviewElement.src = e.target.result;
            updatePreview();
        };

        reader.readAsDataURL(file);
    });

    salvarItemButton.addEventListener("click", function () {
        if (productIndex !== null && produtos[productIndex]) {
            produtos[productIndex] = {
                imagem: imgPreviewElement.src,
                nome: nomeProdutoElement.value,
                preco: precoProdutoElement.value,
                quantidade: quantidadeProdutoElement.value,
            };

            localStorage.setItem("produtos", JSON.stringify(produtos));
            alert("Produto atualizado com sucesso!");
            window.location.href = "../lista-estabelecimento/lista-estabelecimento.html";
        }
    });
});
