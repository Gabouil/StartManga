let produits = document.querySelectorAll(".produit");


for (let i = 0; i < produits.length; i++) {
    produits[i].addEventListener('click', function() {
        listProduits[i].panier += 1
        saveLocal(i);
    })
}


function saveLocal(i) {
    let produitNumber = localStorage.getItem("produitNbr");
    produitNumber = parseInt(produitNumber);
    if (produitNumber) {
        localStorage.setItem("produitNbr", produitNumber + 1)
        localStorage.setItem("listProduits", JSON.stringify(listProduits))
    } else {
        localStorage.setItem("produitNbr", 1)
        nbrProduits.style.display = "block"
        localStorage.setItem("listProduits", JSON.stringify(listProduits))
    };
    window.location.reload()
    produitNumber = localStorage.getItem("produitNbr");
    nbrProduits.textContent = produitNumber;

}