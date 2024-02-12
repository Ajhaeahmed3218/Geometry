function canculateingArea(params) {
    const triangleBaseInput = document.getElementById("triangle-base")
    const triangle=triangleBaseInput.value 
    const base = parseFloat(triangle)

    const triangleHigthInput =document.getElementById("triangle-higth")
    const triangleHigth = triangleHigthInput.value
    const higth = parseFloat(triangleHigth)

    const area = 0.5 * base * higth 

    let triangleSquer =document.getElementById("triangle-area")
    triangleSquer.innerText=area
}

function canculateingRectangleArea() {
    const RectanglewhideInput = document.getElementById("Rectangle-whide")
    const Rectangle=RectanglewhideInput.value 
    const whide = parseFloat(Rectangle)

    const RectanglelenInput =document.getElementById("Rectangle-len")
    const Rectanglelen = RectanglelenInput.value
    const len = parseFloat(Rectanglelen)

    const area =whide * len

    let Rectanglen =document.getElementById("rectangle-area")
    Rectanglen.innerText=area
    
}