let res = document.getElementById("x")

function idade(){
    idadev = document.getElementById("anon").value
    agora = new Date
    z = agora.getFullYear()
    y = z - idadev 


    res.innerHTML = `<br><b>Você nasceu em ${idadev} e atualmente possui ${y} anos </b>`
}