var urlWS = "";

function checaWS(){
    if (localStorage.getItem("urlWS") != "") {
        urlWS = localStorage.getItem("urlWS");
        return true;
    } else {
        urlWS = "";
        
        return false;
    }
}


function webService(values, status, callback){
    
        $.ajax({
            type: "POST",
            dataType: "json",
            url: urlWS,
            data: values,
            success: function(json) {
                callback(json);
            },
            beforeSend: function() {
                $(status).html("Carregando...");
            }
        })
        .done(function() {
            $(status).html(" ");
        })
        .fail(function(jqXHR, textStatus) {
            //myAppProcessing.hideProcessing();
            alert( "Request failed: " + textStatus );
        });
        //$("#Display").html("Lista de filmes");
}

function checaCampo(values) {
    
    var erro = false;
    
    for (var i = 0; i <= values.length -1; i++) {
        
        if (values[i] == undefined || values[i] == "") {        
            i = (values.length + 1);
            erro = true;
        }
    }
    
    return erro;
    
}
