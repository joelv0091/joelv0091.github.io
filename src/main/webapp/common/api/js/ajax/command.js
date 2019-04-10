/**
 * 
 */





// fred_vars.ajaxurl is defined in functions.php a console.log of this variable is "http://fred.locl/wp-admin/admin-ajax.php"

function requestCommand(url,parentId, start){
    $.ajax({
        url: url,
        type: 'POST',
        data: {id: parentId},
        beforeSend: function(){
            // SOME jQuery code
        },
        success: function(results){
            $('#'+parentId)
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