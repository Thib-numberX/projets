const modal ={

    btnModal : function(){

        const btnElement = document.querySelector('.btn-modal');
        // console.log(btnElement);
        btnElement.addEventListener('click', modal.handleBtnClikc);

        
    },
    
    handleBtnClikc : function (){
        //console.log('c\'est ok');
        const modalElement = document.querySelector('.modal-container');
        //console.log(modalElement);
        modalElement.classList.toggle('modal-active');
        modal.overlayClick();
        // ce return est receptionné dans la function handleOverlayClick.
        return modalElement;
    },

    overlayClick : function (){
        const overlayElement = document.querySelector('.modal_overlay');
        //console.log(overlayElement);        

        overlayElement.addEventListener('click',modal.handleOverlayClick);
    },

    handleOverlayClick : function(){
        const modalElement = modal.handleBtnClikc();
        modalElement.classList.remove('modal-active')
    }
}