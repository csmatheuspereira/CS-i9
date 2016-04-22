var urlWS = "";
var idUsuario = "";
var login = "";
var senha = "";

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
                $("#loader").removeClass("hidden");
            }
        })
        .done(function() {
            $("#loader").addClass("hidden");
        })
        .fail(function(jqXHR, textStatus) {
            //myAppProcessing.hideProcessing();
            $("#loader").addClass("hidden");
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

function Cript(dados){

    var chave = 487;
    var addTexto = "7NSgN7UGiU5pGae6ovO5TCk9LlEA087hKezQ";

    var word = dados;
    word += addTexto;
    var s = (word.length+1);
    var nw = "";
    var n = chave;
    var nindex,m;
    
    for (var x = 1; x < s; x++){
        m = x*n;
        if (m > s){
            nindex = m % s;
        }
        else if (m < s){
            nindex = m;
        }
        if (m % s == 0){
            nindex = x;
        }
        nw = nw+word[nindex-1];
    }
    return nw;
}
