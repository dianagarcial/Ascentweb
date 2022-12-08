import { Link } from 'react-router-dom'
import '../../styles/navbar.css'

export const NavBar = () => {
    return (
        <div id='navBar'>
            <div id='conte-nav'>
                <div id='conte-logo'>
                    <img id='logo' src='../logo.png'></img>
                </div>

                <div id='links'>
                    <Link to='servicio' id='link-nav'>Servicios</Link>
                    <Link to='proyectos' id='link-nav'>Proyectos</Link>
                    <Link to='servicio' id='link-nav'>Nosotros</Link>
                </div>

                <div id='botones'>
                    <button>
                        <img src='../contacto.png'></img>
                        <h2 id='btn-h2'>Contactanos</h2>
                    </button>
                </div>
            </div>
        </div>
    )
}