let cont = 1
 function contador(){ 
    for (cont = 1; cont <= 10; cont++){
        let res = document.getElementById("x")
        res.innerHTML += `<br> ${cont} <br>`
    }
 }