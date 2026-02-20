
//Importações de Componentes
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Inicio from '../Inicio/Inicio.jsx';
import AcoesdaConnect from '../AcoesdaConnect/Acoes.jsx';
import QueSomos from '../QuemSomos/QuemSomos.jsx';
import Perfil from '../Perfil/Perfil.jsx';

//Importações de Estilos e Imagens
import Logo from '../../assets/logo.png';
import fotoperfil from '../../assets/fotoPerfil.jpg';
import styles from './navbar.module.scss';

function NavBar() {
    return(
        <BrowserRouter>
        <nav className={styles.navbar}>
            <div className={styles.inner}>
                <Link to="/">
                    <img src={Logo} alt="Logo da Connect" className={`${styles.logo} ${styles.logoAnimated}`} />
                </Link>

                <div className={styles.navLinks}>
                    <p><Link to="/">Início</Link></p>
                    <p><Link to="/acoes">Ações da Connect</Link></p>
                    <p><Link to="/quemsomos">Quem Somos</Link></p>
                </div>

                <Link to="/perfil">
                    <img src={fotoperfil} alt="Foto de Perfil" className={styles.fotoperfil} />
                </Link>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/acoes" element={<AcoesdaConnect />} />
            <Route path="/quemsomos" element={<QueSomos />} />
            <Route path="/perfil" element={<Perfil />} />
        </Routes>
        </BrowserRouter>
    )
}



export default NavBar;