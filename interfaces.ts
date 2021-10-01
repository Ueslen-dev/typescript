// interface = conjunto de dados que descreve a estrutura de um objeto
interface Game {
    title: string;
    description: string;
    readonly genre: string;
    platform?: string[];
    generateDescription?: (title: string) => void;
}

interface PlayerGame extends Game {
    originalGame: Game;
    nickname: string;
    level: number
}

const cod: Game = {
    title: 'Call of Duty',
    description: 'Jogo de ação e guerra',
    genre: 'Ação',
    platform: ["PS3", "PS4", "Xbox One"],
    generateDescription: (title: string) => {
        console.log(`Descrição do jogo ${title}`)
    }
}

const fifaPlayer: PlayerGame = {
    title: 'Jogador de Fifa',
    description: 'Jogo de futebol',
    genre: 'Esporte',
    platform: ["PS3", "PS4", "Xbox One"],
    originalGame: cod,
    nickname: 'fernandoFutz',
    level: 55
}

cod.generateDescription && cod.generateDescription('testando')
