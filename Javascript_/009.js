let x = 0
let res = document.querySelector('section#quantidade')
function cliques(){
    x ++
    res.innerHTML = `<b>Contador:<mark>${x}</mark></b>`
}

function zerar(){
    x = 0
    res.innerHTML = `<b>Contador:<mark>${x}</mark></b>`
}