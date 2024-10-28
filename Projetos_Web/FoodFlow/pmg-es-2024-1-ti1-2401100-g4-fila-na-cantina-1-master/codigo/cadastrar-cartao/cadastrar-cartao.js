document.addEventListener("DOMContentLoaded", function () {
    const nomeCartaoInput = document.getElementById("nome-cartao");
    const numeroCartaoInput = document.getElementById("numero-cartao");
    const cvvCartaoInput = document.getElementById("cvv-input");
    const dataCartaoInput = document.getElementById("data-cartao");
    
    const cardNumberDisplay = document.getElementById("card-number");
    const cardNameDisplay = document.getElementById("card-name");
    const cvvDisplay = document.getElementById("cvv-display");
    const dateDisplay = document.getElementById("date");

    numeroCartaoInput.addEventListener("input", function () {
        const formattedNumber = numeroCartaoInput.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
        cardNumberDisplay.textContent = formattedNumber;
    });

    nomeCartaoInput.addEventListener("input", function () {
        cardNameDisplay.textContent = nomeCartaoInput.value;
    });

    cvvCartaoInput.addEventListener("input", function () {
        cvvDisplay.textContent = cvvCartaoInput.value;
    });

    dataCartaoInput.addEventListener("input", function () {
        dateDisplay.textContent = dataCartaoInput.value;
    });

    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const cartao = {
            nome: nomeCartaoInput.value,
            numero: numeroCartaoInput.value,
            cvv: cvvCartaoInput.value,
            data: dataCartaoInput.value
        };

        localStorage.setItem("cartao", JSON.stringify(cartao));
        alert("Cartão cadastrado com sucesso!");
    });

    const cartaoArmazenado = JSON.parse(localStorage.getItem("cartao"));
    if (cartaoArmazenado) {
        nomeCartaoInput.value = cartaoArmazenado.nome;
        numeroCartaoInput.value = cartaoArmazenado.numero;
        cvvCartaoInput.value = cartaoArmazenado.cvv;
        dataCartaoInput.value = cartaoArmazenado.data;

        cardNameDisplay.textContent = cartaoArmazenado.nome;
        cardNumberDisplay.textContent = cartaoArmazenado.numero.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
        cvvDisplay.textContent = cartaoArmazenado.cvv;
        dateDisplay.textContent = cartaoArmazenado.data;
    }
});
