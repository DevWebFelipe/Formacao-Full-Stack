const fs = require('fs');
const progresso = require('./progresso.json');

let concluidos = progresso.niveis.filter(n => n.concluido).length;
let total = progresso.totalNiveis;

let quizzesTotal = progresso.niveis.reduce((acc, n) => acc + (n.quizzes || 0), 0);
let quizzesFeitos = progresso.niveis.reduce((acc, n) => acc + (n.quizzesFeitos || 0), 0);

let desafiosTotal = progresso.niveis.reduce((acc, n) => acc + (n.desafios || 0), 0);
let desafiosEnviados = progresso.niveis.reduce((acc, n) => acc + (n.desafiosEnviados || 0), 0);

let porcentagem = Math.floor((concluidos / total) * 100);

let readme = fs.readFileSync('README.md', 'utf8');

readme = readme.replace(/https:\/\/progress-bar\.dev\/\d+/g, `https://progress-bar.dev/${porcentagem}`);
readme = readme.replace(/Progresso-\d+%25/g, `Progresso-${porcentagem}%25`);
readme = readme.replace(/Desafios-\d+%2F\d+/g, `Desafios-${desafiosEnviados}%2F${desafiosTotal}`);
readme = readme.replace(/Quizzes-\d+%2F\d+/g, `Quizzes-${quizzesFeitos}%2F${quizzesTotal}`);

fs.writeFileSync('README.md', readme, 'utf8');

console.log(`README.md atualizado com ${porcentagem}% de progresso.`);
