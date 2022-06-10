const app = {

    init: function() {
        modal.btnModal();
        scrollDown.disappear();
        darkMode.darkElement();
        menuSideBAr.sideElement();
        loginForm.log();
    },
}

document.addEventListener('DOMContentLoaded', app.init);