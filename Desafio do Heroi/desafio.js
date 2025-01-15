class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias de heróis com tipos diferentes
const mago = new Hero("Merlin", 40, "mago");
const guerreiro = new Hero("Aragorn", 35, "guerreiro");
const monge = new Hero("Shaolin", 30, "monge");
const ninja = new Hero("Ryu", 25, "ninja");

// Chamando o método atacar para cada herói
mago.atacar(); // "O mago atacou usando magia"
guerreiro.atacar(); // "O guerreiro atacou usando espada"
monge.atacar(); // "O monge atacou usando artes marciais"
ninja.atacar(); // "O ninja atacou usando shuriken"
