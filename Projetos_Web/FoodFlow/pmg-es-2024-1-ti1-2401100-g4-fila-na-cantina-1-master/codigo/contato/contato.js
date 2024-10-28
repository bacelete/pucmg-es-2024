document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const nome = form.querySelector("input[type='text']").value;
        const email = form.querySelector("input[type='email']").value;
        const mensagem = form.querySelector("textarea[name='message']").value;
        
        const contato = {
            nome: nome,
            email: email,
            mensagem: mensagem,
            data: new Date().toLocaleString()
        };

        let mensagens = JSON.parse(localStorage.getItem("mensagens_contato")) || [];
        mensagens.push(contato);
        localStorage.setItem("mensagens_contato", JSON.stringify(mensagens));

        alert("Mensagem enviada com sucesso!");

        form.reset();
    });
});
