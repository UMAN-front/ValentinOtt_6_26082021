//  'use strict';
// /////////////////////////////////////////
// export default class MediaProfil {
//     // Check on which page the user is located, if the position corresponds with the photographer's "id", create the photographer's 'Profile' section
//     displayMedia(data) {
//         let mediaData = data.media;
//         const id = window.location.search.split('id=')[0];

//         const sectionMedia = document.getElementById('media-works');
//         const templateMedia = `
//             <article aria-label="media Profil" class="topnav-media">
//                 <img src="./image/Portfolio photographers/${media[1].image}"
//             </article>
//             `
//             console.log(data.media);
//             sectionMedia.innerHTML = templateMedia;
//             new Modal().modal(mediaData);
//             new Form().fields();
//     }
// }

  
// 'use strict';
// /////////////////////////////////////////

// export default class ImageFactory {
//     // CREATE ELEMENT IMG WITH SRC, ALT, ROLE
//     createHTML(element) {
//         let eltImage = document.createElement('img');
//         eltImage.setAttribute('src', element.image);
//         eltImage.setAttribute('alt', element.alt);
//         eltImage.setAttribute('role', 'button');
//         eltImage.className = 'ph-media';
//         console.log(data);
//         return eltImage;
//     }
// }

// for(i = 0; i < data.media.length; i++) {

//     let eltImage = document.createElement('img');

// }


// 'use strict';
// /////////////////////////////////////////

// // import GalleryFactory from '../Factory/GalleryFactory.js';


// export default class MediaBuilder {
//     // call the GalleryFactory to create the media section with 'Like' function and the box
//     photographersMedias(data) {
//         let media = data.media;
//         let gallery = new GalleryFactory().builder(media);
//         this.boxLikesAndPrice(gallery.totalLike, data.photographers);
//         new LikeSubscriber();
//     }
// }

// 'use strict';
// /////////////////////////////////////////

// import MediaFactory from './MediaFactory.js';

// export default class GalleryFactory {
//     constructor() {
//         this.totalLike = 0;
//     }
    
//     // build the gallery with the different medias and the lightbox
//     builder(dataMedia) {
//         const id = window.location.search.split('id=')[1];
//         let mediaFactory = new MediaFactory();
//         let currentMedia = [];
//         let currentMediaName = [];

//         dataMedia.forEach(element => {
//             if (id == element.photographerId) {
//                 let sectionPhWorks = document.getElementById('ph-works');
//                 let articlePhWork = document.createElement("article");
//                 let mediaHTML = mediaFactory.renderMedia(element);
//                 let workTemplate = `
//                 <a href='#' title=${element.photoName}>
//                 ${mediaHTML.outerHTML}
//                 </a>
//                 <div class="ph-work-elt-text">
//                     <h2 class="ph-work-title">${element.photoName}</h2>
//                     <span class="ph-work-price">${element.price} €</span>
//                     <div class='ph-elt-like'>
//                     <span class="ph-work-like">
//                         <a class="like-counter">${element.likes}</a>
//                     </span>
//                     <i class="far fa-heart heart-btn" aria-label='likes' role="button" data-value="${element.likes}"></i>
//                     </div>
//                 </div>
//                 `
//                 articlePhWork.innerHTML = workTemplate;
//                 sectionPhWorks.appendChild(articlePhWork);
//                 articlePhWork.classList.add("ph-work-elt");
//                 this.totalLike += parseInt(element.likes);
//                 currentMedia.push(mediaHTML.outerHTML);
//                 currentMediaName.push(element.photoName);
//                 (new Lightbox())
//                 .init(currentMedia, currentMediaName)
//             }
//         })
//         return this;
//     }
// }

// /////////////////////////////////////////

// export default class ImageFactory {
//     // CREATE ELEMENT IMG WITH SRC, ALT, ROLE
//     createHTML(element) {
//         let eltImage = document.createElement('img');
//         eltImage.setAttribute('src', element.image);
//         eltImage.setAttribute('alt', element.alt);
//         eltImage.setAttribute('role', 'button');
//         eltImage.className = 'ph-media';

//         return eltImage;
//     }
// }

// /////////////////////////////////////////

// import ImageFactory from './ImageFactory.js';

// export default class MediaFactory {
//     // Check if the selected item is an image or a video
//     renderMedia(element) {
//         let factory = null;
//         if (element.hasOwnProperty('image')) {
//             factory = new ImageFactory();
//         } else if (element.hasOwnProperty('video')) {
//             factory = new VideoFactory();
//         }
//         return factory.createHTML(element);
//     }
// }

// const section = document.getElementById('media-works')

// var imgArray = new Array();

// imgArray[0] = new Image();
// imgArray[0].src = 'Images/portrais/MimiKeel.jpg';

// fetch('./Datas/DataPhotographers.json')
// .then(DataPhotographes => DataPhotographes.json())
// .then(data => {
//     console.log(data.media);

//     for(i = 0; i < data.photographe.lenght; i++){

//         let newphoto = document.createElement('img');

//         newphoto.src = arr[i].pic

//         newphoto.appendChild(idCarte)
//     }
    
// })

// displayMedia(data) {

//     let media = data.media;
//     photographers.map(photographe => {
//     let newphoto = document.createElement('img');

//     let templatePhotographer = `
//     <a href="page-photographe.html?id=${photographe.id}" title="${photographe.name}">
//         <img src="./image/portrais/${photographe.portrait}" alt="${photographe.alt}">
//     </a>
//     `
//     sectionPhotographers.appendChild(newphoto);
//     articlePhotographers.innerHTML = templatePhotographer;
// }
// }
//         const media = !id ? mediaData : mediaData.filter(media => photographe.id == id);



















export default class MEDIAPageBuilder {
    // Build the photographers section, call the 'filtertags' function and the 'passer au contenu' button
    displayMedia(photographerMedias) {
        photographerMedias.map(media => {
            // console.log("j'implémente l'affichage de média ", media);
            if (media.image) {
                new ImageBuilder().displayImage(media)
            }
            if (media.video) {
                new VideoBuilder().displayVideo(media)
            }
        })    
    }
}

class ImageBuilder {
    displayImage(image) {
        console.log("j'implémente l'affichage d'une image ", image);
        const sectionMedia = document.getElementById('image medias');
        const templateMedia = `
        <article aria-label="Media" class="Medias">
        
        

        </article>
        `
        sectionMedia.innerHTML = templateMedia;
    }     
}

class VideoBuilder {
    displayVideo(video) {
        console.log("j'implémente l'affichage d'une vidéo ", video); 
    }
}