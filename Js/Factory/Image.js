'use strict';
/////////////////////////////////////////
export default class MEDIAPageBuilder {
    // Build the photographers section, call the 'filtertags' function and the 'passer au contenu' button
    displayMedia(photographerMedias) {
        photographerMedias.map(media => {
            console.log("j'implémente l'affichage de média ", media);
            if (media.image) {
                return new ImageBuilder().displayImage(media)
            }
            if (media.video) {
                return new VideoBuilder().displayVideo(media)
            }
        })    
    }
}

class ImageBuilder {
    displayImage(image) {
        console.log("j'implémente l'affichage d'une image ", image);
        const sectionMedias = document.getElementById('grille-portfolio');
        let articleMedias = document.createElement('article')
        articleMedias.className = 'article-media';
        const templateMedia = `
        <div class="card">
        <a href="#">
         <figure class="card-photo">
         <img class="card-photo-img" src="./Image/portfolio/images/${image.image}" ></a>
         </figure>
         </a>
         <figcaption class="cadre-photo-titre">
            <h3 class="card-titre">${image.title}</h3>
            <span class="like-number">${image.likes}</span>
         </figcaption>
        </div>
        `
        sectionMedias.appendChild(articleMedias);
        articleMedias.innerHTML = templateMedia;
    }     
}

class VideoBuilder {
    displayVideo(video) {
        console.log("j'implémente l'affichage d'une vidéo ", video); 
        const sectionMedias = document.getElementById('grille-portfolio');
        let articleMedias = document.createElement('article')
        articleMedias.className = 'article-media';
        const templateMedia = `
        <div class="card">
            <div class="card-photo">
            <video controls="controls" class="card-photo-img" <source src="./Image/portfolio/videos/${video.video}" type="video/mp4 </video>
            <video controls="controls" class="card-photo-img" <source src="./Image/portfolio/videos/${video.video}" type="video/webm </video>
            <p>Votre navigateur ne supporte pas la vidéo HTML5. Voici à la place <a href="#">un lien vers la vidéo</a>.</p>
            </div>
            <figcaption class="cadre-photo-titre">
            <h3 class="card-titre">${video.title}</h3>
            <span class="like-number">${video.likes}</span>
         </figcaption>
        </div>
        `
        sectionMedias.appendChild(articleMedias);
        articleMedias.innerHTML = templateMedia;
    }
}