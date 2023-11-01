// JavaScript est un langage faiblement typé
// One peut changer le type d'une variable après déclaration
// JavaScript est un langage dynamique
// Le type d'une variable est connu au moment de l'exécution du script 

// Intro
let id  = "#12"

console.log(id)

console.log(typeof id)

id = 12

console.log(typeof id)


// Erreur 1
var item1 = {
    name: "t-shirt",
    desc: "un super t-shirt",
    price: "12 €"
};

var cart = 0;
var addItemToCart = function (item) {
    cart += item.price;
};

// Erreur 2
var post = {
    title: "Les pires erreurs en js",
    desc: "Il arrive férquement d'utiliser une propriété qui n'exist pas sur un objet"
};

var logContent = function (post) {
    console.log("Description : ".concat(post.description));
};

logContent(post);

// Erreur 3
var logUserInfo = function (username, password, loggedIn) {
    if (loggedIn) {
        console.log(username, password);
    }
};
logUserInfo("tom", 123, true);
