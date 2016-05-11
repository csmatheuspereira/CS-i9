function listaVagas(vagas){
    $("#lvVagas").html(" ");
    if(Object.keys(vagas).length > 0){
        for(var i=0; i < Object.keys(vagas).length; i++){
            
                        
             var itemVaga = "<a class='list-group-item allow-badge widget uib_w_80' data-uib='twitter%20bootstrap/list_item' data-ver='1' id='lvItemVaga' data-codigo='"+i+"' data-descM='"+vagas[i].descricaoMacro+"' data-desc='"+ vagas[i].descricao+"'  data-val='"+vagas[i].dataValidade+"'> <img class='img-vaga' src='interface/UI/vagas/seta_direita.png'> <h4 class='list-group-item-heading'>"+ vagas[i].descricao +"</h4> <p class='list-group-item-text'>Inscrição até "+ vagas[i].dataValidade +"</p></a>"
                        
            
            $("#lvVagas").append(itemVaga);
        }
        $(".uib_w_63").remove();
        activate_page("#vagas");
        
    }else{
        navigator.notification.alert("Erro na requisição, verifique sua internet e tente novamente. Se o problema persistir contate o suporte.");
    }
}

function perfilVaga(id){
    $("#pnVaga").html("");
    
    var header = "<div class='panel-heading'><div class='widget-container'><div class='tarea widget uib_w_71 d-margins pnMainStyleMargins' data-uib='media/text data-ver='0' name='uib_w_71'><div class='widget-container left-receptacle'></div><div class='widget-container right-receptacle'></div><div class='text-container'><h3><strong> "+$("#lvItemVaga[data-codigo='"+id+"']").attr("data-desc")+"</strong></h3></div></div></div></div>";
    
    $("#pnVaga").append(header);
    
    var body = "<div class='col uib_col_15 single-col' data-uib='layout/col' data-ver='0'><div class='widget-container content-area vertical-col'><div class='tarea widget uib_w_68 d-margins' data-uib='media/text' data-ver='0' name='uib_w_68'><div class='widget-container left-receptacle'></div><div class='widget-container right-receptacle'></div><div class='text-container'><p> "+ $("#lvItemVaga[data-codigo='"+id+"']").attr("data-descM") +" </p><p><strong> Inscrições até "+ $("#lvItemVaga[data-codigo='"+id+"']").attr("data-val")  +" </strong> - Procurar o departamento de RH</p></div></div><span class='uib_shim'></span></div></div>";
    
    $("#pnVaga").append(body);
//    $("#lvItemVaga[data-codigo='"+id+"']").attr("data-descM")
    activate_page("#vaga");
    
}
