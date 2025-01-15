// Matrizes com heróis e níveis de experiência

const herois = [

    { nome: "Superman" },

    { nome: "Batman" },

    { nome: "Mulher Maravilha" },

    { nome: "Flash" },

    { nome: "Aquaman" },

    { nome: "Arqueiro Verde" },

    { nome: "Lanterna Verde" },

    { nome: "Shazam" },

    { nome: "Caçador de Marte" },

    { nome: "Cyborg" }

];



const niveisExperiencia = [

    { limite: 1000, nivel: "Ferro" },

    { limite: 2000, nivel: "Bronze" },

    { limite: 6000, nivel: "Prata" },

    { limite: 7000, nivel: "Ouro" },

    { limite: 8000, nivel: "Platina Diamante" },

    { limite: 9000, nivel: "Ascendente" },

    { limite: 10000, nivel: "Imortal" },

    { limite: Infinity, nivel: "Radiante" }

];



// Função para obter o nível de experiência com base no XP

function obterNivelXP(xp) {

    for (let i = 0; i < niveisExperiencia.length; i++) {

        if (xp <= niveisExperiencia[i].limite) {

            return niveisExperiencia[i].nivel;

        }

    }

    return "Nível desconhecido";  // Caso algo não se encaixe

}



// Biblioteca readline para interagir com o terminal

const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});



// Função principal

function verificarHeroiEExperiencia() {

    rl.question("Informe o nome do herói da DC: ", (nomeHeroi) => {

        rl.question("Informe o nível de experiência do herói: ", (xpHeroi) => {

            const xp = parseInt(xpHeroi, 10);



            // Verifica se o herói existe na matriz de heróis

            const heroiExistente = herois.find(heroi => heroi.nome.toLowerCase() === nomeHeroi.toLowerCase());



            if (heroiExistente) {

                // Se o herói existe, obtém o nível com base no XP

                const nivel = obterNivelXP(xp);

                console.log(`${nomeHeroi} É um herói de experiência nível: ${nivel}`);

            } else {

                // Se o herói não existe, informa que é um "Novo herói encontrado"

                const nivel = obterNivelXP(xp);

                console.log(`Novo herói encontrado! Nome: ${nomeHeroi}, Nível de experiência: ${nivel}`);

            }



            rl.close(); // Fecha o readline
        });
    });
}

// Chama a função para iniciar o processo

verificarHeroiEExperiencia();