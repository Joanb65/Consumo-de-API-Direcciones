const Dir1 = "https://apis.datos.gob.ar/georef/api/direcciones?direccion=Sarmiento 1247&departamento=Uruguay&provincia=Entre Rios"
const Dir2 = "https://apis.datos.gob.ar/georef/api/direcciones?direccion=Lucilo B. López 1289&departamento=Uruguay&provincia=Entre Rios"

async function getDireccion1() {
    try {
        const response = await fetch(Dir1);
        const direcciones = await response.json();

        console.log(direcciones);
    } catch (error) {
        console.error(error);
    }
}

getDireccion1();

async function getDireccion2() {
    try {
        const response = await fetch(Dir2);
        const direcciones = await response.json();

        console.log(direcciones);
    } catch (error) {
        console.error(error);
    }
}

getDireccion2();