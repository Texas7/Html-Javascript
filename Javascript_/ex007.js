
function btn_click() {

    let n1 = parseInt(document.getElementById('n1').value)
    let n2 = parseInt(document.getElementById('n2').value)
    let n3 = parseInt(document.getElementById('n3').value)
    let n4 = parseInt(document.getElementById('n4').value)
    let res = document.getElementById('resultado')

    res.innerHTML = 'Media: ' + (n1 + n2 + n3 + n4) / 4
}