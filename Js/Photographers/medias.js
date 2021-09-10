'use strict';
/////////////////////////////////////////

import GalleryFactory from './GalleryFactory.js';

export default class MediaBuilder {
    // call the GalleryFactory to create the media section with 'Like' function and the box
    photographersMedias(data) {
        let media = data.media;
        let gallery = new GalleryFactory().builder(media);
        this.boxLikesAndPrice(gallery.totalLike, data.photographers);
        new LikeSubscriber();
    }
}