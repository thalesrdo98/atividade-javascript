
const readlineSync = require('readline-sync');

const usuario = {
  nome: readlineSync.question("Digite seu nome: "),
  idade: parseInt(readlineSync.question("Digite sua idade: ")), 
  hobbies: []
};

console.log("Digite três hobbies:");
for (let i = 0; i < 3; i++) {
  usuario.hobbies.push(readlineSync.question(`Hobby ${i + 1}: `));
}


if (usuario.idade < 18) {
  console.log("Menor de idade");
} else {
  console.log("Maior de idade");
}


console.log("Hobbies:");
usuario.hobbies.forEach(hobby => {
  console.log(`- ${hobby}`);
});


function exibirMensagem(nome, idade) {
  return `Olá, ${nome}! Você tem ${idade} anos.`;
}

console.log(exibirMensagem(usuario.nome, usuario.idade));
