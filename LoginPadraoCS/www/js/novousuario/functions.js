function login(json){
    
    if (json.result==true) {
                           
        // Pega os textos do comboBox e coloca na array cmbUsuario
        var cmbUsuario = $("#cmbUsuarioMainPage option").map(function() {
                 return $(this).text();
              }).get();
        
        
        // Verifica se existe usuários já cadastrados
        if (cmbUsuario.length > 0){
            var final = (cmbUsuario.length - 1);
        }else{
            var final = 0;
        }
        
        
        // Verifica se já existe o usuário no combo
        for (var i = 0; i <= final; i++){
            if (cmbUsuario[i] == $("#txtNomeNovoUsuario").val())
                {
                    break;
                    // Aqui o usuário já existe. Sai do for e chama a próxima tela
                } else {
                    // Usuário não existe. Cadastra no BD local
                    var registro = { "NOME": $("#txtNomeNovoUsuario").val() }

                    dati.insert("tblUsers", registro, function(ID){
                        //navigator.notification.alert("Cadastrado");
                    });
                    
                    break;
                }
        }                            
        $("#txtSenhaNovoUsuario").val("");
        
        idUsuario = json.ID;
        
        if(json.SENHACRIPTO != "gambi"){
            senha = json.SENHACRIPTO;
        }
        
        activate_page("#activitymain");
        
    } else {
        navigator.notification.alert("Usuário ou senha incorreto(s).");
    }
    
}
