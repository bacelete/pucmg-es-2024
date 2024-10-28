import { sendPasswordResetEmail, auth } from "../script.js";

document.addEventListener("DOMContentLoaded", function () {
  const forgotPasswordForm = document.querySelector("#section-esqSenha form");

  forgotPasswordForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.querySelector("#esqSenha").value;

    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("Email de redefinição de senha enviado!");
        })
        .catch((error) => {
          console.error("Erro ao enviar email de redefinição de senha:", error);
          if (error.code === "auth/user-not-found") {
            alert("Usuário não encontrado. Verifique o email inserido.");
          } else {
            alert(
              "Erro ao enviar email de redefinição de senha. Verifique se o email está correto e tente novamente."
            );
          }
        });
    } else {
      alert("Por favor, insira um endereço de email válido.");
    }
  });
});
