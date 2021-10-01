//type alias
type Uid = number | string
type Platform = 'Windows' | 'Linux' | 'Mac Os'

function logDetails(uid: Uid, item: string){
    console.log(`retornando ${uid} e o tipo de item: ${item}`)
}

function logInfo(uid: Uid, user: string){
    console.log(`retornando ${uid} do usuário: ${user}`)
}

function renderPlatform(platform: Platform){
    return platform
}

logDetails(356, 'Cerveja')
logDetails('356', 'Cerveja')

logInfo(896, 'Cleiton')
logInfo('896', 'Cleiton')

renderPlatform('Windows')
