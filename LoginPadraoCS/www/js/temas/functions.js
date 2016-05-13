function definirTema(){
    
    if(localStorage.getItem("temaAtual") === null && localStorage.getItem("temaAnterior") === null){
        localStorage.setItem("temaAtual", "vermelho");
        $(".header-bg").addClass(localStorage.getItem("temaAtual"));
        $(".btn-primary").addClass(localStorage.getItem("temaAtual"));
        $("."+selecionaCheck(localStorage.getItem("temaAtual"))).removeClass("hidden");
        selecionaLogo(localStorage.getItem("temaAtual"));
    }else{
        $(".header-bg").addClass(localStorage.getItem("temaAtual"));

        $(".btn-primary").addClass(localStorage.getItem("temaAtual"));
        
        $("."+selecionaCheck(localStorage.getItem("temaAtual"))).removeClass("hidden");
        selecionaLogo(localStorage.getItem("temaAtual"));
    }
    
    
    
}

$(document).on("click", ".btnTemaCores", function(evt)
    {
        if(localStorage.getItem("temaAnterior") === null){
            $("."+selecionaCheck(this.id)).removeClass("hidden");
            localStorage.setItem("temaAtual", this.id);
            localStorage.setItem("temaAnterior", this.id);
        }else{
            if(this.id != localStorage.getItem("temaAnterior")){
                $("."+selecionaCheck(this.id)).removeClass("hidden");
                $("."+selecionaCheck(localStorage.getItem("temaAnterior"))).addClass("hidden");

                //header-bg btn-primary

                $(".header-bg").addClass(this.id);
                $(".header-bg").removeClass(localStorage.getItem("temaAnterior"));

                $(".btn-primary").addClass(this.id);
                $(".btn-primary").removeClass(localStorage.getItem("temaAnterior"));


                localStorage.setItem("temaAtual", this.id);
                localStorage.setItem("temaAnterior", this.id);
                selecionaLogo(localStorage.getItem("temaAtual"));
            }
        }
    });

function selecionaCheck(id){
    
    if(id == "vermelho"){
        return "vermc";
    }else if(id == "verde"){
        return "verdc";
    }else if(id == "azul"){
        return "azulc";
    }else if(id == "laranja"){
        return "larac";
    }else if(id == "roxo"){
        return "roxoc";
    }else if(id == "cinza"){
        return "cinzc";
    }else if(id == "escuro"){
        return "escuc";
    };
    
}

function selecionaLogo(id){
    
    if(id == "vermelho"){
        $('.customLogo').attr('src', 'interface/Logo/csVermelho.png');
    }else if(id == "verde"){
        $('.customLogo').attr('src', 'interface/Logo/csVerde.png');
    }else if(id == "azul"){
        $('.customLogo').attr('src', 'interface/Logo/csAzul.png');
    }else if(id == "laranja"){
        $('.customLogo').attr('src', 'interface/Logo/csLaranja.png');
    }else if(id == "roxo"){
        $('.customLogo').attr('src', 'interface/Logo/csRoxo.png');
    }else if(id == "cinza"){
        $('.customLogo').attr('src', 'interface/Logo/csCinza.png');
    }else if(id == "escuro"){
        $('.customLogo').attr('src', 'interface/Logo/csMidnight.png');
    };
    
}