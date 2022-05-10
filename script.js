//localStorage.setItem("clé", "valeur");
//localStorage.getItem("clé");
//localStorage.clear();
//JSON.stringify(objet);
//JSON.parse(string);

/*** Stocker une chaine de caractères dans le local storage **/

// if(localStorage.getItem("nom") != null){
//     h1.textContent = `Bonjour ${localStorage.getItem("nom")}`;
// }


/*** Stocker un objet dans le local storage **/

const local = JSON.parse(localStorage.getItem("user"));

if(local != null)
{
    formulaire.style.display = "none";
    h1.textContent = `Bonjour ${local.nom}, tu as ${local.age} ans`;
}

bouton.onclick = () =>{
    const user = {
        nom: nom.value,
        age: age.value
    }
    localStorage.setItem("user", JSON.stringify(user));
    document.location.reload();//permet de recharger la page
}

/*** récupérer une chaine de caractère ***/
// bouton.onclick = () =>{
//     localStorage.setItem("nom", nom.value);
//     document.location.reload();//permet de recharger la page
// }

/*** Effacer le contenu du storage ***/ 
clear.onclick = () => {
    localStorage.clear();
    document.location.reload();
}