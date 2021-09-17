// Objet; 
// Fetch; 
// DOM; 
// Voir OPCR JS; 
'use strict';
/////////////////////////////////////////

// DATA
import ApiFishEye from './json/data.js';

// HOMEPAGE
import HomePageBuilder from './Home/homePage.js';

//PHOTOGRAPHE 
import PhotographerProfil from './Photographers/photographes.js'

//PORTEFOLIO 
import MEDIAPageBuilder from './Factory/Image.js'




(function appDispatch() {
    new ApiFishEye().getDataFishEye().then((data) => {
        if (window.location.pathname.includes("/page-photographe.html")) {
            // PHOTOGRAPHER PROFIL HEADER
            new PhotographerProfil().displayPhotographerProfil(data);
            // PHOTOGRAPHER PHOTOS
            return
        }
        // HOMEPAGE (PHOTOGRAPHERS, SCROLL, FILTER)
        new HomePageBuilder().displayPhotographers(data);
        // new PhotographerProfil().displayPhotographers(data);
        
    }).catch(() => {
    })
})();
