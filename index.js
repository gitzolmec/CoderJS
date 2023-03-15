//Variables globales
const Menu = [1, 2, 3, 4]
let continuar = 0
let continuarAD = 0
let continuarDel = 0
let opcionValida
let opcion = 0
let opcionBorrar


//array de productos
let inventariojuegos = [
    { id: 1, nombre: "Mario Party", precio: 40990, cantidad: 10, estado: true },
    { id: 2, nombre: "Pokemon Leyendas: Arceu", precio: 40990, cantidad: 7, estado: true },
    { id: 3, nombre: "Super Smash Bros Ultimate", precio: 42990, cantidad: 12, estado: true },
    { id: 4, nombre: "Mario Kart 8 Deluxe", precio: 43990, cantidad: 5, estado: true },
];

//clase constructora
class Producto {
    constructor(id, nombre, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.valorCompra = precio;
        this.cantidad = cantidad
        this.estado = true
    }
}
//======================Funcion que agrega productos al array===================================
function agregarProductos() {
    let id = parseInt(prompt("ingrese el ID del producto:"));

    let idExistente = inventariojuegos.some((elemento) => elemento.id === id); //validacion de id existente en array


    if (idExistente === false) {
        //si el id ingresado es nuevo o no existe en el inventario entonces se solicitan los datos del producto a ingresar
        let nombre = prompt("ingrese nombre del producto")
        let valor = parseFloat(prompt("ingrese valor del producto"))
        let cantidad = parseInt(prompt("ingrese cantidad del producto"))
        let newProducto = new Producto(id, nombre, valor, cantidad)
        inventariojuegos.push(newProducto)
        inicio()
    } else {
        //si el id ya existe no se continua agregando ese producto

        validarOpcion();
    }




}
//funcion que valida si se quiere seguir agregando productos o volver al menu principal 
function validarOpcion(opcion) {
    let opcionAd = parseInt(prompt("ID existente, seleccione una opcion para continuar: \n\n 1.continuar agregando productos \n 2.volver al menu principal"))
    if (opcionAd === 1) {
        agregarProductos();
    } else if (opcionAd === 2) {
        opcionValida = false;
        inicio();
    } else {
        alert("opcion invalida")
        validarOpcion()
    }

}
//funcion para eliminar productos ingresando el id 
function borrarProductos() {
    let idEliminar = parseInt(prompt("ingrese el id del producto a eliminar:"))
    let opcionBorrar = inventariojuegos.some((elemento) => elemento.id === idEliminar);

    if (opcionBorrar === true) {
        let indiceBorrar = inventariojuegos.findIndex(
            (inventariojuegos) => Number(inventariojuegos.id) === Number(idEliminar));

        inventariojuegos.splice(indiceBorrar, 1)
    } else {
        validarOpcionBorrar();
    }
}

function validarOpcionBorrar() {

    let opcion = parseInt(prompt("el ID ingresado no existe, seleccione una opcion para continuar: \n\n 1.continuar borrando productos \n 2.volver al menu principal"))
    if (opcion === 1) {
        borrarProductos();
    } else if (opcion === 2) {
        opcionValida = false;
        inicio();
    } else {
        alert("opcion invalida")
        validarOpcionBorrar()
    }
}
//funcion que muestra el inventario por consola
function mostrarInventario() {
    console.log(inventariojuegos)

}

//valida si se quiere continuar utilizando la app
function continuarOperando() {

    continuar = parseInt(prompt("Marque la opcion para continuar: \n \n 1.volver al menu \n 2.salir"));
    if (continuar === 1) {
        inicio()
    } else if (continuar === 2) {
        mostrarInventario()
    } else {
        alert("opcion invalida")
        continuarOperando()
    }
}

function volverAlMenu(elemento) {
    if (elemento < 3) {
        inicio()
    } else { }
}


//funcion que inicia el menu
function inicio() {
    opcion = parseInt(prompt("seleccione la opcion que necesita, marque solo el numero: \n \n 1. Agregar Producto \n 2. Borrar Producto \n 3. Mostrar Inventario \n 4. Salir"))
    opcionValida = Menu.some((elemento) => elemento === opcion) //valida si la opcion ingresada es una opcion valida segun el menu comparando la opcion ingresada por el usuario con el array menu

    if (opcionValida) {
        switch (opcion) {
            case 1:
                agregarProductos();
                continuar = 1
                break;
            case 2:
                borrarProductos();
                continuar = 1
                break;
            case 3:
                mostrarInventario()
                alert("inventario mostrado en consola")

                break;
            case 4:

                opcionValida = false;
                break;
        }

        volverAlMenu(opcion);
    } else {
        alert("opcion invalida")
        inicio()
    }


}

inicio();


