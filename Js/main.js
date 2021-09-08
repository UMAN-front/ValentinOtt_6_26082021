'use strict';
/////////////////////////////////////////

// DATA
import ApiFishEye from './json/data.js';

// HOMEPAGE
import HomePageBuilder from './Home/homePage.js';

(function appDispatch() {
    new ApiFishEye().getDataFishEye().then((data) => {
        if (window.location.pathname.includes("/photographers.html")) {

        }
        // HOMEPAGE (PHOTOGRAPHERS, SCROLL, FILTER)
        new HomePageBuilder().displayPhotographers(data);
    }).catch(() => {
        console.error('Failed to load ApiFishEye');
    })
})();