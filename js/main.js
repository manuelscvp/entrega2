const cursoShortBoard = 30;
const cursoLongBoard = 30;
const alquiler = 15;

const lista = prompt(`Elija el producto: 
                        1. Curso shortboard ${cursoShortBoard} €uros
                        2. Curso longboard ${cursoLongBoard} €uros
                        3. Alquiler ${alquiler} €uros
                        0. Volver`);

const noProducts = () => {
    alert("No ha elegido un producto valido");
};

const caculateTotal = (precio, cantidad) => {

    if (precio > 100) {
        alert(`El total de sucompra es ${precio * cantidad - precio * cantidad * 0.05 }`);
    } else {
        alert(`El total de sucompra es ${precio * cantidad} €uros`);
    }

}


const unidades = parseInt(prompt("¿Cuántas unidads necesita?"));

if (lista === "1" || lista === "2" || lista === "3" || lista === "0" ) {
    switch (lista) {
        case "1":
            caculateTotal(cursoShortBoard, unidades) ;
            break;
        case "2":
            caculateTotal(cursoLongBoard, unidades) ;
            break;
        case "3":
            caculateTotal(alquiler, unidades) ;
            break;
        case "":
            noProducts();
            break;
        case "0":
            alert('ha decidido salir de la lista')
            break;

        default:
            noProducts();
            break;
    }




} else {
    noProducts();
}
1
pages/contacto.html

