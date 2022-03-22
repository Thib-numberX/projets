const app = {

    init: function() {
        modal.btnModal();
        scrollDown.disappear();
        darkMode.darkElement();
        menuSideBAr.sideElement();
    },
}

document.addEventListener('DOMContentLoaded', app.init);