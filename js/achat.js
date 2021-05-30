var listProduits = []
let buttonBuy = document.getElementById("button")
var value;
printNbr()
pushPanier()
printPanier()


let buttonP = document.querySelectorAll(".buttonP");
let buttonM = document.querySelectorAll(".buttonM");
let buttonNone = document.querySelectorAll(".buttonNone");
let buttons = ""
let noneProduit;

function rechachButton(){
    buttonP = document.querySelectorAll(".buttonP");
    buttonM = document.querySelectorAll(".buttonM");
    buttonNone = document.querySelectorAll(".buttonNone");
    buttons = ""
    noneProduit;
}

function pushPanier(){
    produitsPanier = []
    for (let i = 0; i < listProduits.length; i++) {
        if (listProduits[i].panier > 0) {
            produitsPanier.push(listProduits[i]);
        };
    }
    savProduitsPanier = produitsPanier.length
}

function printPanier() {
    panierSTR = ""
    panier.innerHTML = ""
    prix = 0
    for (let i = 0; i < produitsPanier.length; i++) {
        prix += produitsPanier[i].prix * produitsPanier[i].panier
        panierSTR += "<div class='produit_panier'> <img src='" + produitsPanier[i].img + "'><p class='nbr_article'>" + produitsPanier[i].panier + "</p><p class='prix'>"+ produitsPanier[i].prix * produitsPanier[i].panier + " €</p></div><br>"
    }
    panierSTR += "<p class='prix_total'> Prix Total : " + prix + " €</p>"
    if (prix == 0) {
        panierSTR = ""
        panierSTR += "<div class='produit_panier_vide'><img id='img_panier_vide' src='images/panier_vide.svg'><p id='text_panier_vide'>Vous n'avez rien dans votre panier</p></div><br>"
    }
    panier.insertAdjacentHTML("beforeend", panierSTR)
}

function printNbr() {
    let produitNumber = localStorage.getItem("produitNbr");
    produitNumber = parseInt(produitNumber);
    if (produitNumber) {
        listProduits = localStorage.getItem("listProduits")
        listProduits = JSON.parse(listProduits)
    };
}

//// Sur le papier ça devrais marché 
// buttonBuy.addEventListener("click", function() {
//     var request = new XMLHttpRequest();
//     request.open("POST", listProduits);
//     request.onload = function(){
//         value = {
//             'firstname' : document.pay.first_name.value,
//             'lastname' : document.pay.last_name.value,
//             'email' : document.pay.mail.value,
//             'object' : localStorage.getItem('produitsPanier'),
//             'prix' : localStorage.getItem('prix')
//         }
//     };

//     request.send();
//     console.log(value);
//     localStorage.clear();
//     document.location.reload();
            
// })