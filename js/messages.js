const messages = {

    addErrorMessageToElement: function(messagecontent, parentElement) {

        // console.log(messagecontent, parentElement);
        // penser à supprimer tous les anciens messages
        // je crée un element paragraphe
        let newErrorElement = document.createElement("p");
        // console.log(newErrorElement);

        // j'ajoute une class à ce paragraphe
        newErrorElement.classList.add('errorMessage');
        // jajoute du contenu à ce paragraphe
        newErrorElement.textContent = messagecontent;
        // console.log(newErrorElement);
        parentElement.before(newErrorElement);


    },

    removedErrorMessage: function() {
        // Récupérer grâce au DOM tous les messages d'erreur sur la page

        let OldErrorMessage = document.querySelectorAll('p.errorMessage');

        // on parcours notre tableau avec une boucle
        for (let removeErrorElement of OldErrorMessage) {
            removeErrorElement.remove();
        }
    }
}