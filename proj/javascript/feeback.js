$(function(){
    $('#sbtn').click(function(){
        let nid = $('#uid').val();
        let nfeed = $('#feed').val();
        if(nid=='' && nfeed==''){
            $('#resp').html("Empty Fields are not allowed");
        }
        else{
            $('#resp').html("Your response is recorded");
        }
    });
});