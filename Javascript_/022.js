let cont = 1
 function contador(){ 
    for (cont = 1; cont <= 10; cont++){
        let res = document.getElementById("x")
        if (cont % 2 == 0){
            res.innerHTML += `<br> --${cont}-- <br>`
         }
         else{
            res.innerHTML += `<br> ${cont} <br>`
         } 
    }
 }