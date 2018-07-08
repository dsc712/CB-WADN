const URL = '/add';

$(document).ready(function(){
    makeRequest();

});

function makeRequest() {
    $.ajax({
        url: URL,
        method: 'GET',
        success: function(data) {
            console.log(data);

        }
    })

}