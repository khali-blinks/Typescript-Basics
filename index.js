"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference lib="es2015" />
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (response) {
    console.log(response.data);
});
