/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    var dispToken = "";
    
     /* button  #btnNovo */
    $(document).on("click", "#btnNovoMainPage", function(evt)
    {
         /*global activate_page */
         activate_page("#novousuario"); 
    });
    
        /* button  #btnVoltarNovoUsuario */
    $(document).on("click", "#btnVoltarNovoUsuario", function(evt)
    {
         /*global activate_page */
        listaUsuariosLocais();
        
        activate_page("#mainpage"); 
    });
    
        /* button  #btnLoginNovoUsuario */
    $(document).on("click", "#btnLoginNovoUsuario", function(evt)
    {
        if (checaWS()) {
            
            var dispUUID = device.uuid;
            var dispNome = device.manufacturer + " " + device.model;
            
            var valuesCheca = [ $("#txtNomeNovoUsuario").val(), $("#txtSenhaNovoUsuario").val() ];
            
            var SenhaCript = Cript($("#txtSenhaNovoUsuario").val());
            
            var values = {'acao':'login','Login':$("#txtNomeNovoUsuario").val(),'Senha':SenhaCript,'DispUUID':dispUUID,'DispNome':dispNome,'DispToken':dispToken};

            if(!checaCampo(valuesCheca)){
                webService(values, "#retorno", login);
            } else {
                navigator.notification.alert("Digite valores corretos!", "Erro");
            }
        } else {
            navigator.notification.alert("Defina a URL de serviço!", "Atenção");
            activate_page("#configuracoes");
        }            
    });
    
    
        /* listitem  #btnLimparBDMainPage */
    $(document).on("click", "#btnLimparBDMainPage", function(evt)
    {
        localStorage.setItem("urlWS", "");
        dati.emptyTable("tblUsers",function(status){
            listaUsuariosLocais();
        }); 
    });
    
        /* button  #btnConfigMainPage */
    $(document).on("click", "#btnConfigMainPage", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_15"));  
    });
    
        /* button  #btnVoltarMainPage */
    $(document).on("click", "#btnVoltarMainPage", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_15"));  
    });
    
        /* listitem  #btnURLMainPage */
    $(document).on("click", "#btnURLMainPage", function(evt)
    {
        uib_sb.close_sidebar($(".uib_w_15"));   
            
        document.getElementById("txtURLConfiguracoes").value = localStorage.getItem("urlWS");            
        
        activate_page("#configuracoes");
    
        
    });
    
        /* button  #btnCancelarConfiguracoes */
    $(document).on("click", "#btnCancelarConfiguracoes", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage");
    });
        
    
        /* button  #btnSalvarConfiguracoes */
    $(document).on("click", "#btnSalvarConfiguracoes", function(evt)
    {
        localStorage.setItem("urlWS", $("#txtURLConfiguracoes").val());
        activate_page("#mainpage");
    });
     
     listaUsuariosLocais();
     if (!checaWS()) { 
         navigator.notification.alert("Defina a URL de serviço", "Atenção");
         activate_page("#configuracoes");
     } ;
    
    
    $(document).on("click", "#btnLogoutActivityMain", function(evt)
    {
         /*global activate_page */
        activate_page("#mainpage");
        listaUsuariosLocais();
    });
    
        /* button  #btnLoginMainPage */
    $(document).on("click", "#btnLoginMainPage", function(evt)
    {
        
            var dispUUID = device.uuid;
            var dispNome = device.manufacturer + " " + device.model;
            
           //navigator.notification.alert(dispUUID + " - " + dispNome + " - " + dispToken);
        
        if (checaWS()) {
            
            var cmbText = document.getElementById("cmbUsuarioMainPage");
            
            var valuesCheca = [ cmbText.options[cmbText.selectedIndex].text, $("#txtSenhaMainPage").val() ];
            var SenhaCript = Cript($("#txtSenhaMainPage").val());
            var values = {'acao':'login','Login':cmbText.options[cmbText.selectedIndex].text,'Senha':SenhaCript,'DispUUID':dispUUID,'DispNome':dispNome,'DispToken':dispToken};
                        
            if(!checaCampo(valuesCheca)){
                webService(values, "#retorno", loginMainPage);
            } else {
                navigator.notification.alert("Digite valores corretos!", "Erro");
            }
        } else {
            navigator.notification.alert("Defina a URL de serviço!", "Atenção");
            activate_page("#configuracoes");
        }         
    });
     
        //listaUsuariosLocais();
        checaWS();
     
        $("#loader").removeClass("hidden");
        var push = PushNotification.init({ "android": {"senderID": "788790867910"},
            "ios": {"alert": "true", "badge": "true", "sound": "true"}, "windows": {} } );

        push.on('registration', function(data) {
            //console.log(data.registrationId);
            //$("#gcm_id").html(data.registrationId);
            $("#loader").addClass("hidden");
            dispToken = data.registrationId;
           // navigator.notification.alert(dispToken);
        });

        push.on('notification', function(data) {
            console.log(data.message);
            alert(data.title+" Message: " +data.message);
            // data.title,
            // data.count,
            // data.sound,
            // data.image,
            // data.additionalData
        });

        push.on('error', function(e) {
            console.log(e.message);
        });
    
    }
    
    
    document.addEventListener("app.Ready", register_event_handlers, false);
        
})();
