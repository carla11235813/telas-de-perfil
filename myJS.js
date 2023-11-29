// Função para verificar a largura da tela e adicionar HTML se for menor que 576 pixels
function moverHTML() {

    // Verifique se o elemento alvo existe
    var elementoAlvo = document.getElementById('redimencionar');

    // Verifique se o elemento alvo existe
    var elementoAlvo2 = document.getElementById('redimencionar2');

    // Barra de Pesquisa
    var barraDePesquisa = document.getElementById('redimencionar3');

    var burgerPesquisa = document.getElementById('redimencionarBarrapesquisa');

    // Header 
    var headerFather = document.getElementById('headerFather');

    // Nova Nav
    var novaNav = document.getElementById('redimencionar4');

    // se MENOR - Elementos de link
    if (window.innerWidth < 576) {
        if (elementoAlvo2) {
            elementoAlvo2.remove();
        }
        if (novaNav) {
            novaNav.remove();
        }
        if (barraDePesquisa) {
            barraDePesquisa.remove()
        }

        if (elementoAlvo && elementoAlvo.innerHTML.trim() === '') {
            
                // Crie o HTML que deseja adicionar
            var novoHTML = '\
                <a href="#" class="nav-link">Login/Cadastro</a>\
                <a href = "#" class="nav-link">Carinho</a> ';

                // Adicione o novo HTML ao elemento alvo
                elementoAlvo.innerHTML += novoHTML;
        } else if (!elementoAlvo) {
            var novoElemento = document.createElement('div');
            novoElemento.id = 'redimencionar';
            var elementoPai = document.getElementById('navPai');
            var elementoAntes = document.getElementById('divAcima');

            elementoPai.insertBefore(novoElemento, elementoAntes);
        }
        if (burgerPesquisa && burgerPesquisa.innerHTML.trim() === "") {
            var novoHTML = '\
            <form action="" class="d-flex m-auto" id="barraPesquisa">\
                <div class="input-group">\
                    <input type="search" name="" id="" class="form-control form-control-sm rounded-pill ps-3 pe-0" placeholder="Pesquisar...">\
                        <button type="submit" class="input-group-text border-0 bg-transparent">\
                            <i class="fas fa-search lupa"></i>\
                        </button>\
                    </div>\
            </form > ';
            burgerPesquisa.innerHTML += novoHTML;
        } else if (!burgerPesquisa) {
            var burgerPesquisa = document.createElement('div');
            burgerPesquisa.id = 'redimencionarBarrapesquisa';

            var divAcimaBarrapesquisa = document.getElementById('divAcimaBarrapesquisa');
            var navPai = document.getElementById('navPai');
            navPai.insertBefore(burgerPesquisa, divAcimaBarrapesquisa);
        }
        // se MAIOR
    } else if (window.innerWidth > 576) {
        if (elementoAlvo) {
            elementoAlvo.remove();
        }
        if (burgerPesquisa) {
            burgerPesquisa.remove();
        }
        

        if (elementoAlvo2 && elementoAlvo2.innerHTML.trim() === '') {
            // Crie o HTML que deseja adicionar
            var novoHTML = '\
            <div class="navbar-nav me-auto">\
                <a href="#" class="nav-link">\
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">\
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>\
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>\
              </svg>\
                </a>\
                <a href="#" class="nav-link">\
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">\
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>\
              </svg>\
                </a>\
            </div>' ;

            // Adicione o novo HTML ao elemento alvo
            elementoAlvo2.innerHTML += novoHTML;
        } else if (!elementoAlvo2) {
            // criar o elemento
            var novoElemento2 = document.createElement('div');
            novoElemento2.id = 'redimencionar2';
            novoElemento2.classList = 'collapse navbar-collapse m-auto'
            var elementoPai2 = document.getElementById('divPaiNav');
            var elementoAntes2 = document.getElementById('divAcimaNavPai');

            elementoPai2.insertBefore(novoElemento2, elementoAntes2);
        }
        // Para barra de Pesquisa
    }
    if (window.innerWidth > 576 && window.innerWidth < 991) {
        if (barraDePesquisa) {
            barraDePesquisa.remove()
        }
        if (burgerPesquisa) {
            burgerPesquisa.remove();
        }
        if (novaNav && novaNav.innerHTML.trim() === '') {
            var novoHTML = '\
            <nav class="navbar navbar-expand-sm navbarBg" id="redimencionar4">\
                <form action="" class="d-flex m-auto" id="barraPesquisa">\
                    <div class="input-group">\
                        <input type="search" name="" id="" class="form-control form-control-sm rounded-pill ps-3 pe-0" placeholder="Pesquisar...">\
                            <button type="submit" class="input-group-text border-0 bg-transparent">\
                                <i class="fas fa-search lupa"></i>\
                            </button>\
                        </div>\
                </form > \
            </nav >';

            // Adicione o novo HTML ao elemento alvo
            novaNav.innerHTML += novoHTML;

        } else if (!novaNav) {
            console.log("Passou no ELSE IF");
            var novaNav = document.createElement('nav');

            novaNav.id = 'redimencionar4';

            var navAcima = document.getElementById('navAcima');

            headerFather.insertBefore(novaNav, navAcima);
        }
    } else if (window.innerWidth > 991){
        if (novaNav) {
            novaNav.remove();
        }
        if (barraDePesquisa && barraDePesquisa.innerHTML.trim() === '') {
            var novoHTML = '\
                <form action="" class="d-flex m-auto" id="barraPesquisa">\
                    <div class="input-group">\
                        <input type="search" name="" id="" class="form-control form-control-sm rounded-pill ps-3 pe-0" placeholder="Pesquisar...">\
                            <button type="submit" class="input-group-text border-0 bg-transparent">\
                                <i class="fas fa-search lupa"></i>\
                            </button>\
                        </div>\
                </form > ' ;
            // Adicione o novo HTML ao elemento alvo
            barraDePesquisa.innerHTML += novoHTML;

        } else if (!barraDePesquisa) {
            var barraDePesquisa = document.createElement('div');

            barraDePesquisa.id = 'redimencionar3';

            var navAcima = document.getElementById('navAcima3');

            headerFather.insertBefore(novaNav, navAcima);
        }
    }
} 

// Adicione um ouvinte de evento para verificar a largura da tela quando a página é carregada e redimensionada
window.addEventListener('load', moverHTML);
window.addEventListener('resize', moverHTML);
