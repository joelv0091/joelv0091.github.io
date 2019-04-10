/**
 * ADVERISEMENT APPENDING METHOD
 */

$(document).ready(function(){
    var container = $('#single-path-content');

    var parentId = container.data('parent');

    if(container.length > 0){
        ajax_main(parentId, 0);
    }
});

// fred_vars.ajaxurl is defined in functions.php a console.log of this variable is "http://fred.locl/wp-admin/admin-ajax.php"

function ajax_main(parentId, start){
    $.ajax({
        url: fred_vars.ajaxurl,
        type: 'POST',
        data: 'action=fred_subpath&parent_id='+parentId+'&start='+start,
        beforeSend: function(){
            // SOME jQuery code
        },
        success: function(results){
            $('#single-path-content')
            .html(results);

            // SOME jQuery code
        },
        error: function(){
            alert('Error! Please reload');
        },
        complete: function(){
            // SOME jQuery code
        }
    });
}