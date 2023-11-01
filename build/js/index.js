"use strict";
// Une assertion permet de réécrire le type inféré par TypeScript  
// L'assertion force le compilateur à interpréter une variable comme étant d'un certain type
// L'assertion équivaut à une conversion de type (casting)
let a = new Object();
const createOrModofyUser = (user, id, username) => {
    user.id = id;
    user.username = username;
};
// Deux syntaxes possibles pour les assertions
createOrModofyUser(a, 22, "tom");
createOrModofyUser(a, 22, "tom");
var AlertEvent;
(function (AlertEvent) {
    AlertEvent["AlertSuccess"] = "AlertSuccess";
    AlertEvent["AlertDanger"] = "AlertDanger";
    AlertEvent["AlertInfo"] = "AlertInfo";
})(AlertEvent || (AlertEvent = {}));
const createAlert = (name, type) => {
    return (name + type);
};
const myAlert = createAlert("Alert", "Success");
const getResStatus = (type) => {
    if (type === "code") {
        return 200;
    }
    else
        return "OK!";
};
// Attention aux erreurs avec les assertions 
// Dans ce cas on affirme à typescript que la valeur retournée est un nombre
// Or, la fonction ici retourne une chaîne de caractère 
const res = getResStatus("text");
// Manipuler le DOM
const link = document.querySelector("a");
// Assertion non null 
const input = document.querySelector("input");
const img = document.querySelector("#img");
console.log(link === null || link === void 0 ? void 0 : link.href);
console.log(input.type);
console.log(img.src);
// Assertion constant 
const port = 5000;
const user = {
    id: 1,
    username: "tom",
    age: 23
};
user.id = 32;
const product = {
    id: 1,
    productname: "basket"
};
Object.freeze(product);
product.id = 49;
console.log(product);
// readonly pour les tableaux et tuples
const coord = [23, 21];
coord.push(32);
const whiteHexa = "#FFF";
const whiteRgb = { r: 255, g: 255, b: 255 };
const redNumber = 933;
whiteHexa.split("#");
whiteRgb.split("#");
const createColor = (colors) => {
    return `#${colors.join()}`;
};
// avec une asseetion (as) le type prime -> la variable blackHex est considérée comme étant de type Color
const blackHex = createColor(["0", "0", "0"]);
// la méthode split ne fait pas partie des méthodes systématiquement applicable au type Color
blackHex.split("#");
// la variable blackRgb se chevauchent suffisament avec le type Color pour être interprété comme tel
const blackRgb = {
    g: 200,
    // k: 390
};
const blackNum = 34443;
// Satisfies => voie intermédaire :
// Satisfies force le compilateur a interpréter une variable comme étant d'un certain type
// Sans pour autant perdre l'inférence de la valeur 
// la valeur prime sur le type
// la variable blueHexa est de type string (type retournée par la fonction)
// mais elle satisfait les exigences du type Color 
const blueHexa = createColor(["0", "0", "0", "0", "F", "F"]);
blueHexa.split("#");
// la variable blueRgb, qui ne possède qu'une propriété b, ne satisfait pas Color
const blueRgb = { b: 255 };
// la variable redRgb est de type {r: number, g: number, b:: number}
// mais elle satisfait les exigences du type Color
const redRgb = { r: 255, g: 0, b: 0 };
