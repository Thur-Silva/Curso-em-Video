let timer; 

    timer = setInterval(moverClasse, 8000); 




// Função que pausa o timer por 6 segundos e reinicia depois
function pausarETemporizar() {
    clearInterval(timer); 
    setTimeout(timer, 6000); 
    timer = setInterval(moverClasse, 8000); 
}



// Função para verificar se o clique pode ser feito
function podeClicar() {
    let dis = document.getElementById("dis")
    dis.classList.add('off')
    let dis2 = document.getElementById("dis2")
    dis2.classList.add('off')

    setTimeout(on,3000)
}

function on(){
    let dis = document.getElementById("dis")
   dis.classList.remove('off')
   let dis2 = document.getElementById("dis2")
   dis2.classList.remove('off')
   
}   

function moverClasse() {
    
    const divsTopo = document.querySelectorAll('.topo')
    
    
    let divAtiva = document.querySelector('.topo.active')
    
    if (divAtiva) {
        divsTopo.forEach(div => div.classList.remove('last'));

       
        divAtiva.classList.remove('active')
        divAtiva.classList.add('last');
        
        
        let proximaDiv = null;
        for (let i = 0; i < divsTopo.length; i++) {
            if (divsTopo[i] === divAtiva) {
                proximaDiv = divsTopo[(i + 1) % divsTopo.length];
                break
            }
        }

        if (proximaDiv.classList.contains('last')) {
            proximaDiv.classList.remove('last');
        }
        
        if (proximaDiv) {
            proximaDiv.classList.add('active')
        }
    }
}


function moverClasseEsquerda() {
    const divsTopo = document.querySelectorAll('.topo');
    const divAtiva = document.querySelector('.topo.active');

    if (divAtiva) {
        divsTopo.forEach(div => div.classList.remove('last'));

        divAtiva.classList.remove('active');
        divAtiva.classList.add('last');

        // Encontra a div anterior
        let divAnterior = null;
        for (let i = 0; i < divsTopo.length; i++) {
            if (divsTopo[i] === divAtiva) {
                divAnterior = divsTopo[(i - 1 + divsTopo.length) % divsTopo.length]; 
                break;
            }
        }

        if (divAnterior) {
            divAnterior.classList.add('active');
        }
    }
}

