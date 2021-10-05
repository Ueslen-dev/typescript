"use strict";
//Os tipos genéricos servem para criar componentes dinâmicos e reutilizáveis
// S => State
// T => Type
// K => Key
// V => Value
// E => Element
//const useState = <S> () => {} indica que a função tem um tipo genérico
//const const useState =<S extends string | number> () => {} indica que a função tem um tipo genérico, porém só pode receber string ou número
//const useState =<S extends string | number = number> () => {} indica que o tipo padrão da função é número
var useState = function () {
    var state;
    var getState = function () { return state; };
    var setState = function (newState) { return state = newState; };
    return { getState: getState, setState: setState };
};
var newState = useState();
newState.setState(123);
console.log(newState.getState());
