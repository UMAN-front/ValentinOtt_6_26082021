'use strict';

import MEDIAPageBuilder from '../Factory/Image.js'
/////////////////////////////////////////
export default class PhotographerProfil {
    // Check on which page the user is located, if the position corresponds with the photographer's "id", create the photographer's 'Profile' section
    displayPhotographerProfil(data) {
        let photographersData = data.photographers;
        const id = window.location.search.split('id=')[1];
        const photographers = id ? photographersData.filter(photographer => photographer.id == id) : [];
        const sectionPhotographerProfil = document.getElementById('ph-profil-header');
        const templatePhotographerProfil = `
        <article aria-label="Photographer Profil" class="topnav-photographe">
        <div class='ph-infos'>
        <h2 class="name">${photographers[0].name}</h2>
        <p class="ville">${photographers[0].city}, ${photographers[0].country}</p>
        <p class="description">${photographers[0].tagline}</p>
        <p >${photographers[0].tags.map(tag => `<a class="text-tag" href="page-photographe.html">#${tag}</a>`).join(" ")}</p>
        </div>
        <button id="contact" title="Contactez moi">Contactez-moi</button>
        <a href='#' title='${photographers[0].alt}'><img src="./image/portrais/${photographers[0].portrait}" alt="${photographers[0].alt}"></a>
        </article>
        `
        sectionPhotographerProfil.innerHTML = templatePhotographerProfil;
        // new Modal().modal(photographersData);
        // new Form().fields();
        //Filtre Média
        const medias = data.media
        const photographerMedias = id ? medias.filter(media => media.photographerId == id): [];
        new MEDIAPageBuilder().displayMedia(photographerMedias);
    }
}

