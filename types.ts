//boolean (true / false)
let isOpen: boolean
isOpen = true

//string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

//number (init, float, hex, binary)
let total: number
total = 0xff0

//array (type[])
let items: number[]
items = [1,2,3]

let values: Array<number>
values = [3,4,5]

//tuple
let title: [number, string, boolean, number[]]
title = [1, 'foo', true, [1,3,5]]

//enum
enum Colors {
    white = '#fff',
    black = '#000'
}

//any (qualquer coisa) NÃO USAR
let coisa: any
coisa = [1]

//void (vazio)
function logger(): void{
    console.log('foo')
}

// null | undefined
type args = string | undefined

//never
function error(): never {
    throw new Error('error')
}

//object
let cart: object
cart = {
    key: 0,
    value: 'foo'
}