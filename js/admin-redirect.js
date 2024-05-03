// Redirect back to the frontend after saving in the backend
var checkIfSnackBarExists;
jQuery(document).ready(function($){
    if ( 'incsub_wiki' === typenow && $('#back_to_fe').val() ) {
        setTimeout(function() {
                $('.edit-post-fullscreen-mode-close').attr('href', $('#wp-admin-bar-view a').attr('href'));
                $('.editor-post-publish-button').on('click', () => {
                    checkIfSnackBarExists = setInterval( function() {
                        var snackbarLink = $('.components-snackbar a');
                        if (snackbarLink.length > 0 && 'View Wiki' === snackbarLink[0].innerText ) {
                            clearInterval(checkIfSnackBarExists);
                            snackbarLink[0].click();
                        }
                    }, 100);
                });
            },
            1000
        );
    }
});
