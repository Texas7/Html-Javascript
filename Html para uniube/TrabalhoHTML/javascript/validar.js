function validar(){
    window.location.assign("pacesso.html");
}

function mostra(){
    if(document.getElementById('mostrar').style.display =='none'){
       document.getElementById('mostrar').style.display='block';
    }
    else{
        document.getElementById('mostrar').style.display = 'none'
    }
}


function PaginaS(){
    window.location.assign("simetrica.html");
}

function PaginaA(){
    window.location.assign("assimetrica.html");
}

function PaginaH(){
    window.location.assign("hash.html");
}