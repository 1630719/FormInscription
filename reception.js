const personne = JSON.parse(sessionStorage.getItem('personne'));

//Champs
let $nom2 = $("#Nom2")

//Test
$nom2.text(personne.nom)