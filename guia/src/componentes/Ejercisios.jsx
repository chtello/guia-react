import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Contactos from "./Contactos"
import Problema2 from "./Problema2"

function Ejercisios() {
  return (
    <>
      <Router>
          <Link to="/"/><Link/>
          <Link to="/Contactos"/><Link/>
            <div>
                <Routes>
                    <Route path='/' element={<Problema2/>} />
                    <Route path='/Contactos' element={<Contactos/>} />
                </Routes>
            </div>
        </Router>
    </>
  )
}

export default Ejercisios
