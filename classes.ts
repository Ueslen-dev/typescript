class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`A jogadora se chama ${this.name} e tem essa idade ${this.age}`)
    }
}

class CharAccount extends UserAccount {
    nickname: string;
    readonly level: number; //só pode ser lido mas não pode ser alterado

    constructor(name: string, age: number, nickname: string, level: number){
        super(name, age);

        this.nickname = nickname;
        this.level = level
    }

    get getLevel(){
        return this.level
    }
}

const user = new UserAccount('Camila', 25);
console.log(user);
user.logDetails();

const playerGame = new CharAccount('Larissa', 28, 'larissaSilva', 75);
console.log(playerGame)
playerGame.logDetails()

console.log(playerGame.getLevel)