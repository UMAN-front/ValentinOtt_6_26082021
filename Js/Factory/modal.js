'use strict';
/////////////////////////////////////////
export default class ModalPageBuilder {
  // Build the photographers section, call the 'filtertags' function and the 'passer au contenu' button
  displayName(photographerMordal) {
    photographerMordal.map(photographers => {
      // console.log("j'implémente l'affichage des photographes", photographers);
      if (photographers.name) {
        return new ModalBuilder().displayContact(photographers)
      }
    })
  }
}

class ModalBuilder {
  displayContact(photographers) {
    // console.log("j'implémente l'affichage du modal ", photographers);
    const sectionModal = document.getElementsByClassName('Bg-modal');
    let articleModal = document.createElement('article')
    articleModal.className = 'article-modal';
    const templateModal = `
        <h3 class="modal-titre">Contactez-moi</h3>
        <h3 class="modal-photographes">${photographers.name}</h3>
        <span class="close"></span>
        <div class="modal-body">
          <!--FORM-->
          <form id="form" name="reserve" action="index.html" method="get">
            <!-- FIRST NAME -->
            <div class="formData" data-error="Vous devez entrer 2 caractères ou plus." data-error-visible="false">
              <label for="first">Prénom</label><br>
              <input class="text-control success" type="text" id="first" name="first" minlength="2"
                placeholder="" /><br>
            </div>
            <!-- LAST NAME -->
            <div class="formData" data-error="Vous devez entrer 2 caractères ou plus." data-error-visible="false">
              <label for="last">Nom</label><br>
              <input class="text-control" type="text" id="last" name="last" placeholder="" /><br>
            </div>
            <!-- EMAIL -->
            <div class="formData" data-error="Vous devez entrer une adresse email valide." data-error-visible="false">
              <label for="Email">E-mail</label><br>
              <input class="text-control" type="email" id="email" name="email" placeholder="" /><br>
            </div>
            <!-- MESSAGE -->
            <div class="formMessage" data-error="Vous devez entrer 2 caractères ou plus." data-error-visible="false">
              <label for="last">Votre message</label><br>
              <textarea id="text-Message" name="story" rows="5" cols="33"></textarea>
            </div>
            <button class="btn-submit"><span class="text-send">Envoyer</span></button>
          </form>
        </div>
        `
    sectionModal.appendChild(articleModal);
    articleModal.innerHTML = templateModal;

    // DOM ELEMENTS MODAL 
    let modalbg = document.getElementsByClassName("bground");
    let modalBtn = document.getElementsById("contact");
    // ------ DISPLAY MODAL ------ //
    // LAUNCH MODAL EVENTS
    // modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
    modalBtn.forEach((btn) =>  console.log({btn}));
    // LAUNCH MODAL FORM
    function launchModal() {
      console.log("j'implémente l'affichage des photographes", photographers);
      modalbg.style.display = 'block';
    }
  }
}