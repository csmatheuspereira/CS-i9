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
        
        localStorage.setItem("idUsuario", json.ID);
        
        if(json.SENHACRIPTO != "-1"){
            localStorage.setItem("senha", json.SENHACRIPTO);
            flagSenha = "S";
        }
        
        activate_page("#activitymain");        
    } else {
        if(json.msg != ""){
            navigator.notification.alert(json.msg);
        }else{
            navigator.notification.alert("Usuário ou senha incorreto(s) ou usuário não cadastrado no aplicativo.");
        }
    }
    
}

$(document).on("change", "#cmbUsuarioMainPage", function() {
   
    $("#txtSenhaMainPage").val("");
    
});

function logout(json){
    if (json.result == true) {
        
        localStorage.setItem("idUsuario", "");
        localStorage.setItem("login", "");
        localStorage.setItem("senha",  "");
        
        activate_page("#mainpage");
    }else{
        navigator.notification.alert("Falha ao desconectá-lo.");
    };
}
    
