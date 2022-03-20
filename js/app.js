const app = {

    init: function() {
        modal.btnModal();
        scrollDown.disappear();
        darkMode.darkElement();

    },
}

document.addEventListener('DOMContentLoaded', app.init);