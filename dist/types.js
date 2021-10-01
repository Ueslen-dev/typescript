"use strict";
//boolean (true / false)
var isOpen;
isOpen = true;
//string ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
//number (init, float, hex, binary)
var total;
total = 0xff0;
//array (type[])
var items;
items = [1, 2, 3];
var values;
values = [3, 4, 5];
//tuple
var title;
title = [1, 'foo', true, [1, 3, 5]];
//enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
//any (qualquer coisa) NÃO USAR
var coisa;
coisa = [1];
//void (vazio)
function logger() {
    console.log('foo');
}
//never
function error() {
    throw new Error('error');
}
//object
var cart;
cart = {
    key: 0,
    value: 'foo'
};
//type inference
var msg = 'default message';
msg = 'default message 2';
window.addEventListener('click', function (e) {
    console.log(e.target);
});
