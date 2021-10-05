type Todo = {
    title: string,
    description: string,
    completed: boolean
}

const todo: Readonly<Todo> = {
    title: 'Assitir Conlony',
    description: 'Série Netflix',
    completed: false
}

//Partial => Deixa todas as propriedades genéricas opcionais
const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) => {
    return  {...todo, ...fieldsToUpdate}
}

const todoUpdated = updateTodo(todo, {completed: true})
console.log(todoUpdated)

//Pick => Pega dentro do tipo informado propriedades específicas
type TodoPreviewPick = Pick<Todo, "title" | "description">

const todoPick: TodoPreviewPick = {
    title: "Assitir falda",
    description: "Nova série Netflix"
}

//Omit => Baseado no time informado ele vai omitir as propriedades informadas
type TodoPreviewOmit = Omit<Todo, "description">
const todoOmmit: TodoPreviewOmit = {
    title: "Parar de assistir série", 
    completed: true,
}