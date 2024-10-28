document.addEventListener("DOMContentLoaded", function () {
    const produtosContainer = document.querySelector("#produtos_container");
    
    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    
    if (produtos.length > 0) {
        produtos.forEach((produto, index) => {
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

            const manageButton = document.createElement("button");
            manageButton.textContent = "Gerenciar";
            manageButton.addEventListener("click", () => {
                window.location.href = `../gerenciar-produto/gerenciar-produto.html?index=${index}`;
            });
            produtoCard.appendChild(manageButton);
            
            produtosContainer.appendChild(produtoCard);
        });
    } else {
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent = "Nenhum produto cadastrado.";
        produtosContainer.appendChild(emptyMessage);
    }

    // Adiciona o card "Adicionar Produto"
    const adicionarProdutoCard = document.createElement("div");
    adicionarProdutoCard.classList.add("produto_card", "adicionar_produto_card");
    adicionarProdutoCard.addEventListener("click", function() {
        window.location.href = "../adicionar-produt/add-produto.html";
    });

    const plusCircle = document.createElement("div");
    plusCircle.classList.add("plus_circle");
    plusCircle.textContent = "+";
    adicionarProdutoCard.appendChild(plusCircle);

    const adicionarText = document.createElement("h3");
    adicionarText.textContent = "Adicionar Produto";
    adicionarProdutoCard.appendChild(adicionarText);

    produtosContainer.appendChild(adicionarProdutoCard);
});
