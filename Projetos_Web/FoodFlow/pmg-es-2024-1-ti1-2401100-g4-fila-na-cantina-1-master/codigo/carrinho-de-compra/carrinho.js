document.addEventListener("DOMContentLoaded", function () {
    const sectionItens = document.getElementById("itens-selecionados");
    const sectionPagamento = document.getElementById("pagamento");
    const sectionCompra = document.getElementById("confirmar-compra");

    const btnConfirmarItens = document.querySelector("#itens-selecionados .btn-confirmar");
    const btnVoltarPagamento = document.querySelector("#pagamento .btn-voltar");
    const btnConfirmarPagamento = document.querySelector("#pagamento .btn-confirmar");
    const btnVoltarCompra = document.querySelector("#confirmar-compra .btn-voltar");

    sectionItens.style.display = "flex";

    btnConfirmarItens.addEventListener("click", function () {
        sectionItens.style.display = "none";
        sectionPagamento.style.display = "flex";
        carregarCartoes(); // Carregar cartões ao mudar para a seção de pagamento
    });

    btnVoltarPagamento.addEventListener("click", function () {
        sectionPagamento.style.display = "none";
        sectionItens.style.display = "flex";
    });

    btnConfirmarPagamento.addEventListener("click", function () {
        const selectedCard = document.querySelector('input[name="cartao-selecionado"]:checked');
        if (!selectedCard) {
            alert("Por favor, selecione um cartão para continuar.");
            return;
        }

        sectionPagamento.style.display = "none";
        sectionCompra.style.display = "flex";
        carregarCompraConfirmada(selectedCard.value); // Passa o número do cartão selecionado
    });

    btnVoltarCompra.addEventListener("click", function () {
        sectionCompra.style.display = "none";
        sectionPagamento.style.display = "flex";
    });

    const carrinhoContainer = document.querySelector("#itens-selecionados .conteudo");
    const produtosNoCarrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    if (produtosNoCarrinho.length > 0) {
        produtosNoCarrinho.forEach(produto => {
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

            const removerButton = document.createElement("button");
            removerButton.textContent = "Remover do Carrinho";
            removerButton.addEventListener("click", function() {
                removerProdutoDoCarrinho(produto);
            });
            produtoCard.appendChild(removerButton);

            carrinhoContainer.appendChild(produtoCard);
        });
    } else {
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent = "Nenhum produto no carrinho.";
        carrinhoContainer.appendChild(emptyMessage);
    }

    function removerProdutoDoCarrinho(produto) {
        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        
        const index = carrinho.findIndex(item => item.id === produto.id);
        
        if (index !== -1) {
            carrinho.splice(index, 1);
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
            const produtoCards = document.querySelectorAll(".produto_card");
            produtoCards.forEach(card => {
                if (card.querySelector("h3").textContent === produto.nome) {
                    carrinhoContainer.removeChild(card);
                }
            });
            alert(`Produto "${produto.nome}" removido do carrinho.`);
            location.reload();
        } else {
            alert(`Erro ao tentar remover o produto "${produto.nome}".`);
        }
    }

    function carregarCartoes() {
        const cartoesContainer = document.querySelector("#pagamento .conteudo");
        cartoesContainer.innerHTML = "";

        const cartaoArmazenado = JSON.parse(localStorage.getItem("cartao"));

        if (cartaoArmazenado) {
            const cartaoCard = document.createElement("div");
            cartaoCard.classList.add("cartao_card");

            const nomeElement = document.createElement("h3");
            nomeElement.textContent = cartaoArmazenado.nome;
            cartaoCard.appendChild(nomeElement);

            const numeroElement = document.createElement("p");
            numeroElement.textContent = cartaoArmazenado.numero.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
            cartaoCard.appendChild(numeroElement);

            const dataElement = document.createElement("p");
            dataElement.textContent = `Válido até: ${cartaoArmazenado.data}`;
            cartaoCard.appendChild(dataElement);

            const radioElement = document.createElement("input");
            radioElement.type = "radio";
            radioElement.name = "cartao-selecionado";
            radioElement.value = cartaoArmazenado.numero;
            cartaoCard.appendChild(radioElement);

            cartoesContainer.appendChild(cartaoCard);
        } else {
            const emptyMessage = document.createElement("p");
            emptyMessage.textContent = "Nenhum cartão cadastrado.";
            cartoesContainer.appendChild(emptyMessage);
        }
    }

    function carregarCompraConfirmada(numeroCartao) {
        const compraContainer = document.querySelector("#confirmar-compra .conteudo");
        compraContainer.innerHTML = "";

        const produtosNoCarrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

        if (produtosNoCarrinho.length > 0) {
            produtosNoCarrinho.forEach(produto => {
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

                compraContainer.appendChild(produtoCard);
            });

            const formaPagamentoCard = document.createElement("div");
            formaPagamentoCard.classList.add("cartao_card");

            const formaPagamentoTitle = document.createElement("h3");
            formaPagamentoTitle.textContent = "Forma de Pagamento";
            formaPagamentoCard.appendChild(formaPagamentoTitle);

            const formaPagamentoNumero = document.createElement("p");
            formaPagamentoNumero.textContent = `Cartão terminando em ${numeroCartao}`;
            formaPagamentoCard.appendChild(formaPagamentoNumero);

            compraContainer.appendChild(formaPagamentoCard);

            const totalPreco = produtosNoCarrinho.reduce((total, produto) => total + parseFloat(produto.preco), 0);
            const totalElement = document.createElement("h3");
            totalElement.textContent = `Total: R$ ${totalPreco.toFixed(2)}`;
            totalElement.classList.add("total-preco");
            compraContainer.appendChild(totalElement);
        } else {
            const emptyMessage = document.createElement("p");
            emptyMessage.textContent = "Nenhum produto no carrinho.";
            compraContainer.appendChild(emptyMessage);
        }
    }
});
