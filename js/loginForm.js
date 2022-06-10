const loginForm = {

    log: function() {
        let Form = document.querySelector('#loginForm')
            // console.log(loginForm);

        Form.addEventListener('submit', loginForm.handleSubmitLogin)

    },

    handleSubmitLogin: function(evt) {
        // evt.preventDefault();
        // console.log(evt.target);
        messages.removedErrorMessage();

        let lastname = document.getElementById('lastname').value;
        let lastnameSpan = document.getElementById('span-lastname');
        let firstname = document.getElementById('firstname').value;
        let firstnameSpan = document.getElementById('span-firstname');
        let email = document.getElementById('mail').value;
        let emailSpan = document.getElementById('span-email');
        let password = document.getElementById('password').value;
        let passwordSpan = document.getElementById('span-password');

        // La regex s'ouvre avec /^, et ferme avec $/. Le contenu est dans []
        // a-z : toutes les minuscules
        // A-Z : toutes les majuscules
        // - : accepte le tiret
        // \s : accepte les espaces
        // + : accepte plusieurs fois la même lettre
        let myRegex = /^[a-zA-Z-\s]+$/

        // console.log(lastname, firstname, email, password);
        // la fonction trim enlève les espaces initiaux et de finaux 
        if (lastname.trim() == '') {
            evt.preventDefault();

            let message = "Le nom est requis";
            messages.addErrorMessageToElement(message, lastnameSpan);
        } else if (myRegex.test(lastname) == false) {
            evt.preventDefault();

            let message = "Le nom doit comporter des lettres et des tirets uniquement";
            messages.addErrorMessageToElement(message, lastnameSpan);
        }
        if (firstname.trim() == '') {

            evt.preventDefault();
            let message = "Le prénom est requis";
            messages.addErrorMessageToElement(message, firstnameSpan);
        } else if (myRegex.test(firstname) == false) {
            evt.preventDefault();

            let message = "Le prénom doit comporter des lettres et des tirets uniquement";
            messages.addErrorMessageToElement(message, firstnameSpan);
        }
        if (email.trim() == '') {
            evt.preventDefault();

            let message = "l'e-mail est requis";
            messages.addErrorMessageToElement(message, emailSpan);
        };
        if (email.trim() != '') {

            if (email.includes("@") == false) {
                evt.preventDefault();

                let message = "L'adresse e-mail est incorrecte";
                messages.addErrorMessageToElement(message, emailSpan);
            };
        };
        if (password.trim() == '') {
            evt.preventDefault();

            let message = "Le mot de passe est requis";
            messages.addErrorMessageToElement(message, passwordSpan);
        };
        if (password.trim() != '') {

            if (password.length < 5) {
                evt.preventDefault();

                let message = "Le mot de passe doit contenir au moins 5 caractères";
                messages.addErrorMessageToElement(message, passwordSpan);
            };
            if (password.trim() != 'bonjour') {
                evt.preventDefault();

                let message = "Le mot de passe est bonjour";
                messages.addErrorMessageToElement(message, passwordSpan);
            };
        };


    },

    // je veux vérifier les données rentrées et afficher un message d'erreur si ce n'est pas bon

}