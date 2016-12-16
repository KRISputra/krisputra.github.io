$(document).ready(function () {
    jQuery("#nanoGallery").nanoGallery({
        kind: 'flickr',
        userID: '38635440@N07',
        
        // uncomment this line to display one specific album:
        albumList:'72157673487045514|72157673486497604',
        
        // uncomment this line to display full photostream (v5.0.0):
        // photoset:'none',
        
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        thumbnailLabel: {
            displayDescription: false,
            position: 'overImageOnBottom'
        },
        thumbnailHoverEffect:'borderLighter'
    });
});