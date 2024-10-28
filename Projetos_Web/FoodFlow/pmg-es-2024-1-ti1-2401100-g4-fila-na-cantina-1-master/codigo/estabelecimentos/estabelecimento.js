document.addEventListener("DOMContentLoaded", function () {
    const produtosContainer = document.querySelector("#produtos_container");
    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

    if (produtos.length > 0) {
        produtos.forEach(produto => {
            const produtoCard = document.createElement("div");
            produtoCard.classList.add("produto_card");

            const imgElement = document.createElement("img");
            imgElement.src = produto.imagem;
            produtoCard.appendChild(imgElement);

            const nomeElement = document.createElement("h3");
            nomeElement.textContent = produto.nome;
            produtoCard.appendChild(nomeElement);

            const precoElement = document.createElement("h4");
            precoElement.textContent = `Preço: ${produto.preco}`;
            produtoCard.appendChild(precoElement);

            const qtdElement = document.createElement("h4");
            qtdElement.textContent = `Quantidade: ${produto.quantidade}`;
            produtoCard.appendChild(qtdElement);

            const addButton = document.createElement("button");
            addButton.textContent = "Adicionar ao Carrinho";
            addButton.addEventListener("click", function() {
                adicionarProdutoAoCarrinho(produto);
            });
            produtoCard.appendChild(addButton);

            produtosContainer.appendChild(produtoCard);
        });
    } else {
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent = "Nenhum produto cadastrado.";
        produtosContainer.appendChild(emptyMessage);
    }

    // Função para adicionar produto ao carrinho
    function adicionarProdutoAoCarrinho(produto) {
        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        carrinho.push(produto);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        alert(`Produto "${produto.nome}" adicionado ao carrinho.`);
    }
});
