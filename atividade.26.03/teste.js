document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o recarregamento da página

        // Captura os dados do formulário
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        };

        // Envia a requisição AJAX (Fetch API)
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) throw new Error("Erro ao enviar mensagem");
            return response.json();
        })
        .then(data => {
            console.log("Resposta do servidor:", data);

            // Exibe a mensagem de sucesso e esconde a de erro
            successMessage.style.display = "block";
            errorMessage.style.display = "none";

            // Limpa os campos do formulário
            form.reset();
        })
        .catch(error => {
            console.error("Erro:", error);

            // Exibe a mensagem de erro e esconde a de sucesso
            successMessage.style.display = "none";
            errorMessage.style.display = "block";
        });
    });
});
