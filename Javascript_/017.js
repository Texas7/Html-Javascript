
function teste(){
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random() //valor aleatorio entre 0 e 1
    let num = min + Math.trunc(dif * aleatorio) //maht.trunc() retira as casas decimais dos valores 


    let res = document.querySelector("section#x")
    res.innerHTML += `<p>Número gerado: ${num}</p>`

}

function limp(){
    let res = document.querySelector("section#x")
    res.innerHTML = null
}
