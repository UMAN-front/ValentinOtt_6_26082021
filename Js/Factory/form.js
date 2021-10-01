'use strict';
/////////////////////////////////////////

export default class Form {
    // Events, launch/close the modal by clicking on the 'contact me' button
    modal(data) {
        let modalBtn = document.getElementById("contact");
        let closeBtn = document.getElementsByClassName("close");


        
        if (modalBtn) {
            modalBtn.addEventListener('click', this.launchModal);
            this.formPhName(data);
        }
        if (closeBtn) {
            closeBtn[0].addEventListener('click', this.closeModal);
        }
    }

    // LAUNCH MODAL
    launchModal() {
        let modalbg = document.getElementById("bground");

        modalbg.style.display = 'block';
    }

    // CLOSE MODAL
    closeModal() {
        let modalbg = document.getElementById("bground");

        modalbg.style.display = 'none';
    }       
}
       
