import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Inicio from '../inicio/Inicio.jsx';
import Perfil from '../perfil/Perfil.jsx';
import QuemSomos from '../quemSomos/QuemSomos.jsx';
import AcoesDaConect from '../acoesDaConect/acoesDaConect.jsx';
import logo from '../../assets/logo.png';
import perfil from '../../assets/perfil.webp';
import styles from './NavBar.module.scss';

function NavBar() {
    
    
    return (
        
        <BrowserRouter>
            <nav className={styles.navBar}>
                <Link to='/'><img src={logo} alt="Logo" /></Link>
                
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/acoes'>Ações da Conect</Link></li>
                    <li><Link to='/quemSomos'>Quem Somos</Link></li>
                </ul>
                <Link to='/perfil'><img src={perfil} alt="perfil" className={styles.image}/></Link>
            </nav>
            <Routes>
                <Route path='/' element={<Inicio /> }/>
                <Route path='/acoes' element={<AcoesDaConect /> }/>
                <Route path='/quemSomos' element={<QuemSomos /> }/>
                <Route path='/perfil' element={<Perfil /> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default NavBar;