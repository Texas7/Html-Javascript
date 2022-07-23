let res = document.querySelector("section#v")

function validador(){
    numero = document.getElementById("numero").value 
    if (numero % 2 == 0){
       z = "Par" 
    }
    else{
        z = "Impar"
    }

    res.innerHTML = `<p>O numero digita é <mark>${z}</mark par</p>`
}