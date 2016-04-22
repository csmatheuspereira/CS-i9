function listaUsuariosLocais() {
    $('#cmbUsuarioMainPage option[value!="0"]').remove();
    dati.selectAll("tblUsers", function(registros) {
        
        $.each(registros, function(c, usuarios){
            
            $('#cmbUsuarioMainPage').append($('<option>', {
                value: usuarios.ID,
                text: usuarios.NOME
            }));
            
        })
        
        
    })
    
}

function loginMainPage(json){
    
    if (json.result==true) {
        $("#txtSenhaMainPage").val("");
        
        idUsuario = json.ID;
        
        if(json.SENHACRIPTO != "gambi"){
            senha = json.SENHACRIPTO;
        }
        
        activate_page("#activitymain");        
    } else {
        if(json.msg != ""){
            navigator.notification.alert(json.msg);
        }else{
            navigator.notification.alert("Usuário ou senha incorreto(s).");
        }
    }
    
}

$(document).on("change", "#cmbUsuarioMainPage", function() {
   
    $("#txtSenhaMainPage").val("");
    
});

function logout(json){
    if (json.result == true) {
        activate_page("#mainpage");
    }else{
        navigator.notification.alert("Falha ao desconectá-lo.");
    };
}
    
