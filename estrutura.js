const pilotos = ['Bruno',  'Juliana', 'Daniel', 'Miriam', 'Cesar']

console.log(pilotos[3]);
console.log(pilotos[4]);

console.log(pilotos.length);

for (const piloto of pilotos) {
  console.log(piloto);
}

pilotos.push('Boby')
console.log(pilotos);



const boby = pilotos.find(piloto => piloto === 'Boby');
console.log(boby);

pilotos.splice(4, 5)

console.log(pilotos);
