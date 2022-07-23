let res = document.querySelector("section#maior")
parseInt(numero1, numero2)

function nmaior(){
    numero1 = document.getElementById("numero1").value
    numero2 = document.getElementById("numero2").value

    if (numero1 > numero2){
        res.innerHTML = `O numero ${numero1} é o maior`
    }
    else{
        res.innerHTML = `O numero ${numero2} é o maior`
    }

}