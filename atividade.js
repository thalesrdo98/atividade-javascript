const usuario = {
    nome: prompt("Nome:"),
    idade: Number(prompt("Idade:")),
    hobbies: prompt("Hobbies (separados por vírgula):").split(",").map(h => h.trim())
};

console.log(usuario.idade < 18 ? "Menor de idade" : "Maior de idade");
usuario.hobbies.forEach((h, i) => console.log(`${i + 1}. ${h}`));

const exibirMensagem = (n, i) => `Olá, ${n}! Você tem ${i} anos.`;
console.log(exibirMensagem(usuario.nome, usuario.idade));
