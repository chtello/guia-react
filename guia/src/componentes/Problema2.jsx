import { useState, useEffect } from "react"
import Cards from './Card';
import './prob2.css'
function Problema2() {
    const [productos, setProductos] = useState([])
    const [busqueda, setBusqueda] = useState("")
    const[categoria, useCategoria] = useState("")
    let categorias = "men's clothing, jewelery, electronics, women's clothing ";

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProductos(json))
        .then(console.log(productos))
        .catch((error) => {
        console.error("Error al cargar los datos:", error);
        setCargando(false);
    });
}, []);

const cambiarCategoria = (res) =>{
    useCategoria(res.target.value)
    console.log(categoria)
}

const busco = (res) =>{
    setBusqueda(res.target.value)
}
const cat = productos.filter(producto => producto.category.includes(busqueda))


const filtro = productos.filter(producto => producto.title.toLowerCase().includes(busqueda.toLowerCase()))

return (
    <>
        <h4>Busca tus productos</h4>
        <input type="text" onChange={busco} value={busqueda} />
        <div>
            <h3>Selecciona una categoria</h3>
            <select value={categoria} onChange={cambiarCategoria}>
                <option value="">categorias</option>
                <option value="ropaDeHombre">Ropa de hombre</option>
                <option value="Joyería">Joyería</option>
                <option value="Electrónica">Electrónica</option>
                <option value="ropaDeMujer">Ropa de mujer</option>
            </select>
        </div>
        <Cards filtro={filtro}/>
    </>
)
  }
  
  export default Problema2
  