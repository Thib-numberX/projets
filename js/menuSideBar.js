const menuSideBAr = {

    sideElement: function(evt) {
        const ulElement = document.querySelector('.modal_menu-ul');
        // console.log(ulElement);

        ulElement.addEventListener('mouseenter', menuSideBAr.handleMouseEnterMenu);

        ulElement.addEventListener('mouseleave', menuSideBAr.handleMouseLeaveMenu);

        return ulElement;
    },

    handleMouseEnterMenu: function(evt) {
        // console.log(evt);
        console.log(evt.target);
        const ulElement = menuSideBAr.sideElement();
        // console.log(ulElement);
        const spanElement = ulElement.querySelectorAll('.modal_menu_ul-items');
        console.log(spanElement);
        for (const spanCurrentElement of spanElement) {
            const liElement = spanCurrentElement;
            console.log(liElement);
            const liCurrentElement = liElement.lastElementChild
            liCurrentElement.classList.add('active_menu_items-li')
        }



    },

    handleMouseLeaveMenu: function(evt) {
        // console.log(evt);
        console.log(evt.target);
        const ulElement = menuSideBAr.sideElement();
        // console.log(ulElement);
        const spanElement = ulElement.querySelectorAll('.modal_menu_ul-items');
        console.log(spanElement);
        for (const spanCurrentElement of spanElement) {
            const liElement = spanCurrentElement;
            console.log(liElement);
            const liCurrentElement = liElement.lastElementChild
            liCurrentElement.classList.remove('active_menu_items-li')
        }



    }
}