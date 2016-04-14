/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
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
            
            var valuesCheca = [ $("#txtNomeNovoUsuario").val(), $("#txtSenhaNovoUsuario").val() ];
            
            var values = {'acao':'login','Login':$("#txtNomeNovoUsuario").val(),'Senha':$("#txtSenhaNovoUsuario").val()};

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
        if (checaWS()) {

            var cmbText = document.getElementById("cmbUsuarioMainPage");
            
            var valuesCheca = [ cmbText.options[cmbText.selectedIndex].text, $("#txtSenhaMainPage").val() ];
            
            var values = {'acao':'login','Login':cmbText.options[cmbText.selectedIndex].text,'Senha':$("#txtSenhaMainPage").val()};
                        
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
    
    }
    
    
    document.addEventListener("app.Ready", register_event_handlers, false);
        
})();
