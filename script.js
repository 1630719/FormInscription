//Champs
let $Form = $("#Form")
let $nom = $("#Nom")
let $pwrd = $("#Password")
let $pwrd_confirm = $("#PasswordConfirmation")
let $mail = $("#Courriel")
let $mail_confirm = $("#ConfirmationCourriel")

//Labels d'erreur
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

//Validation nom
$nom.on('blur', function ()
{
    if (!$nom.val().match("^[A-Z]{1}[a-z]{1,10}$"))
    {
        //Vider le champ
        $nom.val("")

        //Afficher msg erreur
        $label_nom.text("Obligatoire (Maj + 1-15 lettres")

        //Retirer vert si présent (Si user fait une modification erronnée après avoir entre une bonne valeur)
        $label_nom.removeClass('text-success')

        //Mettre rouge si erreur s'est produite après un succès initial
        $label_nom.addClass('text-danger')

    }
    else
    {
        //Msg ok
        $label_nom.text("Ok")

        //On enlèleve le rouge
        $label_nom.removeClass('text-danger')

        //On le met en vert
        $label_nom.addClass('text-success')
    }
})

//Validation de la validité du courriel individuel

//Validation de la validité de la confirmation de courriel individuel


//Validation de courriel et courriel confirm (si identique X, sinon Y)
$mail_confirm.on('blur', function ()
{
    //Validation courriel
    if ($mail.val() === $mail_confirm.val())
    {
        //Msg ok
        $label_courriel.text("ok")
        $label_confirm_courriel.text("ok")

        //Retirer rouge
        $label_courriel.removeClass('text-danger')
        $label_confirm_courriel.removeClass('text-danger')

        //Mettre en vert
        $label_courriel.addClass('text-success')
        ;$label_confirm_courriel.addClass('text-success')

    }


    if ($mail.val() !== $mail_confirm)
    {
        //Msg erreur
        $label_confirm_courriel.text("Les courriels ne sont pas identiques.")

        //Vider les champs
       $mail.val("")
       $mail_confirm.val("")

        //Retirer vert sur label confirmation courriel
        $label_confirm_courriel.removeClass('text-success')

        //Remettre le label de confirmation de courriel en rouge
        $label_confirm_courriel.addClass('text-danger')

        //Cacher le label courriel de nouveau
        $label_courriel.text("")
    }

})

