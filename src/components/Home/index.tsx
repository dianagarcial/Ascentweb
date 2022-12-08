import { NavBar } from "../Navbar"
import { ConteServicios } from "./conteServicios"
import { ConteTecnogias } from "./conteTecnologias"
import '../../styles/index.css'

export const HomePage = () => {
  return (
    <div id="contenido">
    <NavBar/>
    <ConteServicios/>
    <ConteTecnogias/>
    </div>
    
    
  )
}
