var xturn = false;
var oturn = false;
var won = false;
function setTurn(str) {
    if (str === "o") {
        oturn = true
        xturn = false
        let oBtn = document.getElementById('ooo')
        let xBtn = document.getElementById('xxx')
        oBtn.setAttribute('class', 'btn btn-white border text-danger bg-warning')
        xBtn.setAttribute('class', 'btn btn-white border text-danger')
    }

    if (str === "x") {
        xturn = true
        oturn = false
        let oBtn = document.getElementById('ooo')
        let xBtn = document.getElementById('xxx')
        xBtn.setAttribute('class', 'btn btn-white border text-danger bg-warning')
        oBtn.setAttribute('class', 'btn btn-white border text-danger')
    }
}

function setLabel(btnId) {
    let box = document.getElementById(btnId)
    box.setAttribute('class', 'btn btn-white border m-2')
    if (oturn) {
        box.innerText = "O"
        box.style.color = 'red'
        // xturn = false;
        // oturn = false;
        checkWinning()
    }

    if (xturn) {
        box.innerText = "X"
        box.style.color = 'blue'
        // xturn = false;
        // oturn = false;
        checkWinning()
    }
}

function checkWinning() {
    let scoreEle = document.getElementsByName('score')
    
    //verticals
    let a1 = document.getElementById('a1')
    let b1 = document.getElementById('b1')
    let c1 = document.getElementById('c1')

    let a2 = document.getElementById('a2')
    let b2 = document.getElementById('b2')
    let c2 = document.getElementById('c2')

    let a3 = document.getElementById('a3')
    let b3 = document.getElementById('b3')
    let c3 = document.getElementById('c3')

    if (a1.innerText == b1.innerText && b1.innerText == c1.innerText){
        console.log(true)
        a1.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
        b1.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
        c1.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
    }

    if (a2.innerText == b2.innerText && b2.innerText == c2.innerText){
        console.log(true)
        a2.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
        b2.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
        c2.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
    }

    if (a3.innerText == b3.innerText && b3.innerText == c3.innerText){
        console.log(true)
        a3.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
        b3.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
        c3.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
    }

    //Horizontals

    if (a1.innerText == a2.innerText && a1.innerText == a3.innerText){
        console.log(true)
        a1.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
        a2.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
        a3.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
    }

    if (b1.innerText == b2.innerText && b1.innerText == b3.innerText){
        console.log(true)
        b1.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
        b2.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
        b3.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
    }

    if (c1.innerText == c2.innerText && c1.innerText == c3.innerText){
        console.log(true)
        c1.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
        c2.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
        c3.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
    }

    //Diagonals

    if (a1.innerText == b2.innerText && a1.innerText == c3.innerText){
        console.log(true)
        a1.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
        b2.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
        c3.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
    }

    if (c1.innerText == b2.innerText && c1.innerText == a3.innerText){
        console.log(true)
        c1.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
        b2.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
        a3.setAttribute('class', 'bg-success bg-opacity-25 btn btn-white border m-2')
    }
    
}