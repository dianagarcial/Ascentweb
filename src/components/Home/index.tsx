import { NavBar } from "../Navbar"
import { ConteServicios } from "./conteServicios"
import { ConteTecnogias } from "./conteTecnologias"

export const HomePage = () => {
  return (
    <div id="contenido">
    <NavBar/>
    <ConteServicios/>
    <ConteTecnogias/>
    </div>
    
    
  )
}
