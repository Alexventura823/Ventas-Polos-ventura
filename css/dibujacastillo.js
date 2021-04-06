function dibujacastillo() {
    var c = document.getElementById("micanvas");
    var cxt = c.getContext("2d");

// Dijujamos un castillo
cxt.fillStyle = "orange";
cxt.beginPath();
cxt.moveTo(60,60);
cxt.lineTo(70,60);
cxt.lineTo(70,70);
cxt.lineTo(80,70);
cxt.lineTo(80,60);
cxt.lineTo(90,60);
cxt.lineTo(90,70);
cxt.lineTo(100,70);
cxt.lineTo(100,60);
cxt.lineTo(110,60);
cxt.lineTo(110,70);
cxt.lineTo(120,70);
cxt.lineTo(120,60);
cxt.lineTo(130,60);
cxt.lineTo(130,120);
cxt.lineTo(60,120);
cxt.closePath();
cxt.fill();

//dibujamos una puerta
cxt.fillStyle = "red";
cxt.beginPath();
cxt.moveTo(85,120);
cxt.lineTo(85,106);
cxt.lineTo(95,95);
cxt.lineTo(105,106);
cxt.lineTo(105,120);
cxt.closePath(); 
cxt.fill(); 

// Dibujamos el palo de la bandera
cxt.strokeStyle = "brown";
cxt.beginPath();
cxt.moveTo(125,60);
cxt.lineTo(125,20);
cxt.stroke();

//dibujamos la bandera
cxt.fillStyle = "rojo";
cxt.beginPath();
cxt.moveTo(125,20);
cxt.lineTo(150,30);
cxt.lineTo(125,40);
cxt.fill();
}
