//Champs
let $Form = $("#Form")
let $nom = $("#Nom")
let $pwrd = $("#Password")
let $pwrd_confirm = $("#PasswordConfirmation")
let $mail = $("#Courriel")
let $mail_confirm = $("#ConfirmationCourriel")

//Labels
let $label_nom = $("#LabelErreurNom")
let $label_courriel = $("#LabelErreurEmail")
let $label_confirm_courriel = $("#LabelErreurConfirmationCourriel")
let $label_mdp = $("#LabelErreurPassword")
let $label_confirm_mdp = $("#LabelPasswordConfirmation")

function Personne(p_nom = '')
{
    this.nom = p_nom
}

$Form.on('submit', function ()
{
    //Obtenir informations de la personne pour inscription et envoi sur la 2e page
    const personne = new Personne($nom.val());
    sessionStorage.setItem('personne', JSON.stringify(personne))

    //Validation nom
    if ($nom.val() ==="Aa")
    {
        $label_nom.text("Obligatoire (Maj + 1-15 lettres")
        $nom.val("")
    }

    //Validation courriel
    if ($mail.val() === $mail_confirm.val())
    {
        alert("Unga")

    }
    else if ($mail.val() !== $mail_confirm.val())
    {
        alert("Bunga")
    }

    //Validation confirmation courriel

    //Validation mot de passe
    if ($pwrd.val() === $pwrd_confirm.val())
    {
        alert("peepee")

    }
    else if ($pwrd.val() !== $pwrd_confirm.val())
    {
        alert("Poopoo")
    }


})