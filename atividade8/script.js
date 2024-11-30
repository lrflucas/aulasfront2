document.getElementById("btnEnviar").addEventListener("click", function() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (!nome || !email || !senha) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    const genero = document.querySelector('input[name="genero"]:checked')?.value || "Não informado";
    const pais = document.getElementById("pais").value;
    const comentarios = document.getElementById("comentarios").value;

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <h2>Dados do Formulário</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Gênero:</strong> ${genero}</p>
        <p><strong>País:</strong> ${pais}</p>
        <p><strong>Comentários:</strong> ${comentarios}</p>
    `;

    document.querySelector("h1").textContent = "Formulário Enviado com Sucesso!";

    document.getElementById("meuFormulario").classList.add("success");
});