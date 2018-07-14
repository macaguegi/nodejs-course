// Se hace el import del módulo que está en el mismo directorio
var rect = require('./rectangle');

function solveRect(l, b) {
    console.log("Solving for rectangle with l =" + l + "and b =" + b);

    rect(l,b, (err, rectangle)=> {

        if (err) {
            console.log("ERROR :",err.message);
        } else {
            console.log("The area of the rectangle of dimensions L = "+ l + " and b = " + b + "is",rectangle.area());
            console.log("The perimeter of the rectangle of dimensions L = "+ l + " and b = " + b + "is",rectangle.perimeter());
        }
    });

    console.log("Esta instruccion está despues de la llamada a rect() ");
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);