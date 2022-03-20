const scrollDown = {
    disappear: function() {
        window.addEventListener('scroll', scrollDown.handleDisappearArrow);
    },

    handleDisappearArrow: function(evt) {
        const arrow = document.querySelector('.arrow');
        //console.log(arrow);
        // console.log(window.scrollY);
        const windowScroll = window.scrollY;
        //console.log(windowScroll);

        if (windowScroll !== 0) {
            // console.log(arrow);
            arrow.classList.add('arrowScrollNone');
        } else {
            // console.log('00000')
            arrow.classList.remove('arrowScrollNone');
        }
    }
}