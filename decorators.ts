//@Component
//@Selector
//@useState("dados")

//Class decorator => roda assim que a classe é criada
//Method decorator => roda toda vez que o método é chamado
//Parameter decorator
//Acessor decorator


//Class decorator
//target or constuctor => proptype

const Logger = (prefix: string) => {
    return (target: any) => {
        console.log(`${prefix} - ${target}`)
    }
}

@Logger('Netflix')
class Foo {}

const setAPIVersion = (apiVersion: string) => {
    return(constructor: any) => {
        return class extends constructor {
            version = apiVersion
        }
    }
}

@setAPIVersion("1.0.0")
class Api {}
console.log(new Api())

//Property decorator
//target => proptype
//key => nome do método

const minLength = (length: number) => {
    return (target: any, key: string) => {
        let val = target[key]

        const getter = () => val
        const setter = (value: string) => {
            value.length < length ? 
            console.log(`Error: você não pode criar ${key} menor que ${length}`) : 
            val = value
        }
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    }  
}

class Movie {
    @minLength(5)
    title: string

    constructor(t: string){
        this.title = t
    }
}

const movie = new Movie('Fauda');
console.log(movie.title)

//Method decorator
//target => proptype
//key => nome do método
//descriptor => descreve as propriedades do método
const delay = (ms: number) => {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any){
            console.log(`Esperando ${ms}...`)
            setTimeout(() => {
                originalMethod.apply(this, args)
            },ms)

            return descriptor
        }
    }
} 

class Greeter{
    greeting: string;

    constructor(g: string){
        this.greeting = g
    }
    @delay(1000)
    greet() {
        console.log(`Hello! ${this.greeting}`)
    }
}

const person = new Greeter('Person');
person.greet()