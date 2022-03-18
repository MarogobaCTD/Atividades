//Participantes: Marcelo Roberto, Rodrigo Escobar, Edmar Bila, Dário Olah e Lucas Ferreira Nogueira

(window.onload = function() {
    var body = document.body
    var app = document.querySelector(".l-app");
    var botao = document.querySelector(".l-sidebar__btn");
    var sidebar = document.querySelector(".l-sidebar");
    var controle = 0;
    let sobreMim = document.getElementById('sobre-mim')
    
    //1. **(20pts)** Esta sessão deverá ser apresentada sempre que houver o click no **botão Menu**: `<button class="l-sidebar__btn"type="button">Menu</button>`.
    //1.1. Quando houver o click do usuário, a sidebar deverá ser apresentada: `<div class="l-sidebar">`
    
    botao.addEventListener("click", function(evento){
        // sidebar.classList.add("l-sidebar--close");
         sidebar.classList.add("l-sidebar--open");
         console.log(sidebar);
    })

    sidebar.addEventListener("click", function(evento){
        sidebar.classList.remove("l-sidebar--open");
        sidebar.classList.add("l-sidebar--close");
        sidebar.classList.remove("l-sidebar--close");
    });

    //2. **(20pts)** O usuário poderá usar o teclado para abrir ou fechar a sidebar. No caso, as tecla `Space`.
    
    body.addEventListener("keypress" , function(evento){ 

            if (evento.code == 'Space'){
                if (controle == 0) {
                    sidebar.classList.add("l-sidebar--open");
                    controle = 1;
                } else {
                    sidebar.classList.remove("l-sidebar--open");
                    sidebar.classList.add("l-sidebar--close");
                    sidebar.classList.remove("l-sidebar--close");
                    controle = 0;
                }
            }
        });

    
    // 3. **(20pts)** O usuário poderá usar o mouse para abrir ou fechar a sidebar. No caso, um duplo click em qualquer local do site irá abrir ou fechar a sidebar.

    app.addEventListener("dblclick" , function(evento){ 
        console.log(evento.target);
        //evento.target.addEventListener("dblclick", function(evento){console.log("teste")
            //   console.log(evento.target);
            
                if (controle == 0) {
                    sidebar.classList.add("l-sidebar--open");
                    controle = 1;
                } else {
                    sidebar.classList.remove("l-sidebar--open");
                    sidebar.classList.add("l-sidebar--close");
                    sidebar.classList.remove("l-sidebar--close");
                    controle = 0;
                }
      // 
        })

    });

    
    
    
    // 4. **(20pts)** Um boxe de texto irá acompanhar o cursor do mouse.
// mostra a mensagem
