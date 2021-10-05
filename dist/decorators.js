"use strict";
//@Component
//@Selector
//@useState("dados")
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Class decorator => roda assim que a classe é criada
//Method decorator => roda toda vez que o método é chamado
//Parameter decorator
//Acessor decorator
//Class decorator
//target or constuctor => proptype
var Logger = function (prefix) {
    return function (target) {
        console.log(prefix + " - " + target);
    };
};
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo = __decorate([
        Logger('Netflix')
    ], Foo);
    return Foo;
}());
var setAPIVersion = function (apiVersion) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.version = apiVersion;
                return _this;
            }
            return class_1;
        }(constructor));
    };
};
var Api = /** @class */ (function () {
    function Api() {
    }
    Api = __decorate([
        setAPIVersion("1.0.0")
    ], Api);
    return Api;
}());
console.log(new Api());
//Property decorator
//target => proptype
//key => nome do método
var minLength = function (length) {
    return function (target, key) {
        var val = target[key];
        var getter = function () { return val; };
        var setter = function (value) {
            value.length < length ?
                console.log("Error: voc\u00EA n\u00E3o pode criar " + key + " menor que " + length) :
                val = value;
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
};
var Movie = /** @class */ (function () {
    function Movie(t) {
        this.title = t;
    }
    __decorate([
        minLength(5)
    ], Movie.prototype, "title", void 0);
    return Movie;
}());
var movie = new Movie('Fauda');
console.log(movie.title);
//Method decorator
//target => proptype
//key => nome do método
//descriptor => descreve as propriedades do método
var delay = function (ms) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Esperando " + ms + "...");
            setTimeout(function () {
                originalMethod.apply(_this, args);
            }, ms);
            return descriptor;
        };
    };
};
var Greeter = /** @class */ (function () {
    function Greeter(g) {
        this.greeting = g;
    }
    Greeter.prototype.greet = function () {
        console.log("Hello! " + this.greeting);
    };
    __decorate([
        delay(1000)
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
var person = new Greeter('Person');
person.greet();
