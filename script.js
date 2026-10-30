function gerarSenha() {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-+";

  const tamanhoSenha = 8;

  let senhaAleatoria = "";

  for (let i = 0; i < tamanhoSenha; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senhaAleatoria += caracteres.charAt(indiceAleatorio);
  }
  document.getElementById("campoSenha").value = senhaAleatoria;
}
