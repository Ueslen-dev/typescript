"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var todo = {
    title: 'Assitir Conlony',
    description: 'Série Netflix',
    completed: false
};
//Partial => Deixa todas as propriedades genéricas opcionais
var updateTodo = function (todo, fieldsToUpdate) {
    return __assign({}, todo, fieldsToUpdate);
};
var todoUpdated = updateTodo(todo, { completed: true });
console.log(todoUpdated);
var todoPick = {
    title: "Assitir falda",
    description: "Nova série Netflix"
};
var todoOmmit = {
    title: "Parar de assistir série",
    completed: true,
};
