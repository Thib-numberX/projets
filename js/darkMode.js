const darkMode = {
    darkElement: function() {
        const btnDarkElement = document.querySelector('.container-dark_btn');
        // console.log(btnDarkElement);
        btnDarkElement.addEventListener('click', darkMode.handleBtnSwitch);
        return btnDarkElement;
    },

    handleBtnSwitch: function() {
        const btnElement = darkMode.darkElement();
        // console.log(btnElement);
        btnElement.classList.toggle('btn-dark-right');
        bodyElement = document.querySelector('.body');
        bodyElement.classList.toggle('dark');
    }
}