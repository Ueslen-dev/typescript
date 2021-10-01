type AccountInfo = {
    id: number | string,
    name: string,
    email?: string
}

type CharInfo = {
    nickname: string,
    level: number
}

//intersection
type PlayerInfo = AccountInfo & CharInfo

const account: AccountInfo = {
    id: 489,
    name: 'Camila Silva'
}

const char: CharInfo = {
    nickname: 'frontend',
    level: 100
}

const player: PlayerInfo = {
    id: 489,
    name: 'Camila Silva',
    nickname: 'frontend',
    level: 100
}