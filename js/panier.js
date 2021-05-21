let buttonPanier = document.getElementById("icone_panier");
let panier = document.getElementById("panier");
let nbrProduits = document.getElementById("produit_panier");
var prix = 0;
let listProduits = [
    {
        "id": 0,
        "name": "livre 1",
        "prix": 7,
        "img": "images/couvertures/1.jpg",
        "panier": 0
    },
    {
        "id": 1,
        "name": "livre 2",
        "prix": 7,
        "img": "images/couvertures/2.jpg",
        "panier": 0
    },
    {
        "id": 2,
        "name": "livre 3",
        "prix": 7,
        "img": "images/couvertures/3.jpg",
        "panier": 0
    },
    {
        "id": 3,
        "name": "livre 4",
        "prix": 8,
        "img": "images/couvertures/4.jpg",
        "panier": 0
    },
    {
        "id": 4,
        "name": "livre 5",
        "prix": 10,
        "img": "images/couvertures/5.jpg",
        "panier": 0
    },
    {
        "id": 5,
        "name": "livre 6",
        "prix": 8,
        "img": "images/couvertures/6.jpg",
        "panier": 0
    },
    {
        "id": 6,
        "name": "livre 7",
        "prix": 7,
        "img": "images/couvertures/7.jpg",
        "panier": 0
    },
    {
        "id": 7,
        "name": "livre 8",
        "prix": 7,
        "img": "images/couvertures/8.jpg",
        "panier": 0
    },
    {
        "id": 8,
        "name": "livre 9",
        "prix": 10,
        "img": "images/couvertures/9.jpg",
        "panier": 0
    },
    {
        "id": 9,
        "name": "livre 10",
        "prix": 7,
        "img": "images/couvertures/18.jpg",
        "panier": 0
    },
    {
        "id": 10,
        "name": "livre 11",
        "prix": 8,
        "img": "images/couvertures/17.jpg",
        "panier": 0
    },
    {
        "id": 11,
        "name": "livre 12",
        "prix": 7,
        "img": "images/couvertures/20.jpg",
        "panier": 0
    }
];
let panierSTR = "";
var produitsPanier = [];
var savProduitsPanier = 0;

buttonPanier.addEventListener('click', function() {
    panier.classList.toggle('open_panier');
});


printNbr()
pushPanier()
printPanier()


let buttonP = document.querySelectorAll(".buttonP");
let buttonM = document.querySelectorAll(".buttonM");
let buttonNone = document.querySelectorAll(".buttonNone");
let buttons = ""
let noneProduit;

detectClick()

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
        panierSTR += "<div class='produit_panier'> <img src='" + produitsPanier[i].img + "'><button class='buttonM'>-</button> <p class='nbr_article'>" + produitsPanier[i].panier + "</p> <button class='buttonP'>+</button><p class='prix'>"+ produitsPanier[i].prix * produitsPanier[i].panier + " €</p><button class='buttonNone'><img src='./images/mangaNone.svg'> </button></div><br>"
    }
    panierSTR += "<p class='prix_total'> Prix Total : " + prix + " €</p>"
    panierSTR += "<button class='button_payer'> Je veux payer </button>"
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
        nbrProduits.style.display = "block"
        nbrProduits.textContent = produitNumber;
        listProduits = localStorage.getItem("listProduits")
        listProduits = JSON.parse(listProduits)
    };
}

function detectClick(){
    for (let i = 0; i < savProduitsPanier; i++) {
        buttonP[i].addEventListener('click', function() {
            buttons = "+"
            if(listProduits[produitsPanier[i].id].panier < 9) {
                listProduits[produitsPanier[i].id].panier += 1
                updatePanier(buttons, i); 
            }
        })
        buttonM[i].addEventListener('click', function() {
            buttons = "-"
            listProduits[produitsPanier[i].id].panier -= 1
            updatePanier(buttons, i);
        })
        buttonNone[i].addEventListener('click', function() {
            buttons = "*"
            noneProduit = produitsPanier[i].panier
            listProduits[produitsPanier[i].id].panier = 0
            updatePanier(buttons, i);
        })
    }
}



function updatePanier(buttons, i) {
    let produitNumber = localStorage.getItem("produitNbr");
    produitNumber = parseInt(produitNumber);
    if (produitNumber) {
        if(buttons == "-") {
            localStorage.setItem("produitNbr", produitNumber - 1)
        };
        if (buttons == "+"){
            localStorage.setItem("produitNbr", produitNumber + 1)
        };
        if (buttons == "*"){
            localStorage.setItem("produitNbr", produitNumber - noneProduit)
        };
        localStorage.setItem("listProduits", JSON.stringify(listProduits));
    } else {
        localStorage.setItem("produitNbr", 1)
        nbrProduits.style.display = "block";
        localStorage.setItem("listProduits", JSON.stringify(listProduits));
    };
    // window.location.reload()
    produitNumber = localStorage.getItem("produitNbr");
    nbrProduits.textContent = produitNumber;
    pushPanier()
    printPanier()
    rechachButton()
    detectClick()
}