'use strict';
/////////////////////////////////////////
export default class ModalBuilder {
  displayContact() {
    // console.log("j'implémente l'affichage du modal ", photographers);
    const btn = document.querySelector('.btn-contact')
    const sectionModal = document.querySelector('.modal');
    const closeBtn = document.getElementsByClassName('close');

    btn.addEventListener('click', launchModal);

    // LAUNCH MODAL FORM
    function launchModal() {
      sectionModal.style.display = 'block';
    }
    //CRÉATION TEMPLATE
    let articleModal = document.createElement('article')
    articleModal.className = 'article-modal';
    const templateModal = `
      <h3 class="modal-titre">Contactez-moi</h3>
      <h3 class="modal-photographes"></h3>
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
      <div class="formData" data-error="Vous devez entrer 5 caractères ou plus." data-error-visible="false">
      <label for="last">Votre message</label><br>
      <textarea id="message" name="story" rows="5" cols="33"></textarea>
      </div>
      <input class="btn-submit" type="submit" value="Envoyer">
      </form>
      </div>
      `
    sectionModal.innerHTML = templateModal;
    //CLOSE MODAL FORM
    function closeModal() {
      sectionModal.style.display = 'none';
      first.parentElement.setAttribute('data-error-visible', 'false');
      first.style.border = 'solid #279e7a 0rem';

      last.parentElement.setAttribute('data-error-visible', 'false');
      last.style.border = 'solid #279e7a 0rem';

      email.parentElement.setAttribute('data-error-visible', 'false');
      email.style.border = 'solid #279e7a 0rem';

      message.parentElement.setAttribute('data-error-visible', 'false');
      message.style.border = 'solid #279e7a 0rem';

      form.reset();
    }
    closeBtn[0].addEventListener('click', closeModal);

    // DOM ELEMENTS FORM FIELDS VALIDATION
    const firstName = document.getElementById('first');
    const lastName = document.getElementById('last');
    const email = document.getElementById('email');
    const message = document.getElementById('message')
    const input = document.getElementsByClassName('text-control');
    const form = document.getElementById('form');
    const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

    // ------ FORM FIELDS VALIDATION ------ //
    // NAMES CHECK (FIRST NAME AND LAST NAME)
    function checkFirstName() {
      if (firstName.value.trim().length < 2 || first.value.trim() === '' || !firstName.value.match(regex)) {
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.style.border = '3px solid #e54858';
        return false;
      }
      first.parentElement.setAttribute('data-error-visible', 'false');
      first.style.border = 'solid #279e7a 0.19rem';
      return true;
    }

    function checkLastName() {
      if (lastName.value.trim().length < 2 || last.value.trim() === "" || !lastName.value.match(regex)) {
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        lastName.style.border = '3px solid #e54858';
        return false;
      }
      last.parentElement.setAttribute('data-error-visible', 'false');
      last.style.border = 'solid #279e7a 0.19rem';
      return true;
    }

    // EMAIL CHECK
    function checkEmail() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (email.value.trim().match(re)) {
        email.parentElement.setAttribute('data-error-visible', 'false');
        email.style.border = 'solid #279e7a 0.19rem';
        
        return true;
      }
      email.parentElement.setAttribute('data-error-visible', 'true');
      email.style.border = '3px solid #e54858';
      console.log("pas d'email");
      return false;
    }
    // MESSAGE
    function checkMessage() {
      if (message.value.trim().length < 5 || message.value.trim() === "" || !message.value.match(regex)) {
        message.parentElement.setAttribute('data-error-visible', 'true');
        message.style.border = '3px solid #e54858';
        return false;
      }
      message.parentElement.setAttribute('data-error-visible', 'false');
      message.style.border = 'solid #279e7a 0.19rem';
      return true;
    }
    // FORM FIELDS EVENTS
    function formFieldsValidation(element, method, event) {
      element.addEventListener(event, method);
    }
    formFieldsValidation(firstName, checkFirstName, 'focusout');
    formFieldsValidation(lastName, checkLastName, 'focusout');
    formFieldsValidation(email, checkEmail, 'focusout');
    formFieldsValidation(message, checkMessage, 'focusout');

    // FOR ALL FIELDS VALIDATION
    function forAllFieldsValidation() {
      checkFirstName()
      checkLastName()
      checkEmail()
      checkMessage()
    }
    function formValidation() {
      if (checkFirstName() === true &&
        checkLastName() === true &&
        checkEmail() === true &&
        checkMessage() === true) {
        return true;
      }
      return false;
    }

    // SEND FORM
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (formValidation() == true) {
        displayModalSubmit();
        document.querySelector('form').reset();
      } else {
        forAllFieldsValidation();
      }
    });

    
    // DOM ELEMENTS SUBMITTED CONFIRMATION
    const closeBtnConfirmation = document.getElementsByClassName('btn-submit');


    // ------ SUBMITTED CONFIRMATION ------ //
    // DISPLAY MODAL SUBMIT
    function displayModalSubmit() {
      sectionModal.style.display = 'none';
    }

    // CLOSE SUBMIT
    function closeSubmit() {
      firstName.style.border = 'none';
      lastName.style.border = 'none';
      email.style.border = 'none';
      message.style.border = 'none'
      console.log('reset');
    }

    // EVENT CLOSE MODAL SUBMIT
    closeBtnConfirmation.addEventListener('click', closeSubmit);
  }
}