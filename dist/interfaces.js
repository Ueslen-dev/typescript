"use strict";
var cod = {
    title: 'Call of Duty',
    description: 'Jogo de ação e guerra',
    genre: 'Ação',
    platform: ["PS3", "PS4", "Xbox One"],
    generateDescription: function (title) {
        console.log("Descri\u00E7\u00E3o do jogo " + title);
    }
};
var fifaPlayer = {
    title: 'Jogador de Fifa',
    description: 'Jogo de futebol',
    genre: 'Esporte',
    platform: ["PS3", "PS4", "Xbox One"],
    originalGame: cod,
    nickname: 'fernandoFutz',
    level: 55
};
cod.generateDescription && cod.generateDescription('testando');
