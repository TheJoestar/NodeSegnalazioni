
// Manda una chiamata post per uploadare l'immagine 
function uploadImg(){    
    var fd = new FormData();
    var file = $('#fileToUpload')[0].files[0];
    //al formData gli aggiungi un attributo chiamato fileToUpload che avrà l'elemento html input type file (id=fileToUpload)
    fd.append('fileToUpload',file);

    $.ajax({
        url: 'php/upload.php',
        type: 'post',
        data: fd,
        dataType: 'json',
        contentType: false,
        processData: false,
        success: function(response){
            if(response != 0){
                alert(response.status);
            }else{
                alert('file non caricato');
            }
        }
    });
}