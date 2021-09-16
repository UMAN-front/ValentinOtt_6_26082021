//  'use strict';
// /////////////////////////////////////////
// export default class MediaProfil {
//     // Check on which page the user is located, if the position corresponds with the photographer's "id", create the photographer's 'Profile' section
//     displayMedia(data) {
//         let mediaData = data.media;
//         const id = window.location.search.split('id=')[0];
//         const media = !id ? mediaData : mediaData.filter(media => photographe.id == id);
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

  
'use strict';
/////////////////////////////////////////

export default class ImageFactory {
    // CREATE ELEMENT IMG WITH SRC, ALT, ROLE
    createHTML(element) {
        let eltImage = document.createElement('img');
        eltImage.setAttribute('src', element.image);
        eltImage.setAttribute('alt', element.alt);
        eltImage.setAttribute('role', 'button');
        eltImage.className = 'ph-media';
        console.log(data);
        return eltImage;
    }
}

// for(i = 0; i < data.media.length; i++) {

//     let eltImage = document.createElement('img');

// }