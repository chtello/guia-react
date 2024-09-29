import './prob1.css'
import { useState } from 'react'
function Problema1() {
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const mail = (res) =>{
        setCorreo(res.target.value)
    }
    const nom = (res) =>{
        setNombre(res.target.value)
    }
    const imp = () =>{
        console.log("tu mail es:",correo,"y tu nombre es:",nombre)
    }
    return (
        <>
        <p>ingrese su nombre:</p>
            <input type="text" value={nombre} onChange={nom} />
            <p>ingrese su mail</p>
            <input type="email" value={correo} onChange={mail} />
            <p>Presione para imprimir por consola sus datos</p>
            <button onClick={imp}>imprimir</button>
        </>
    )
  }
  
  export default Problema1
  