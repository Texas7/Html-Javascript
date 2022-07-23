let cont = 0

function contador(){
    setInterval(function(){
        if (cont < 10){
            res = document.getElementById("x") // colocar o x
            cont = cont + 1
            res.innerHTML += `<br> ${cont} <br>`
        }
        else{
            return
        }
    }, 1000);    
}

function limpar(){
    cont = document.getElementById("x")
    res.innerHTML = null

}