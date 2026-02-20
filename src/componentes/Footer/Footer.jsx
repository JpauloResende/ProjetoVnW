import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import whatsapp from '../../assets/whatsapp.png';
import styles from './footer.module.scss';


function Footer() {
    return (
        <footer className={styles.footer}>
    <BrowserRouter>
        <section className={styles.navBarFooter}>
            <div className={styles.logoContainer}>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
            </style>
            <img src={logo} alt="Logo da Connecta" className={`${styles.logo} ${styles.logoAnimated}`} />
            <p className={styles.nomeLogo}>Connect</p>
            </div>
            <div className={styles.direitos}>
            <p>© 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.</p>
            </div>

            <div className={styles.redesSociais}>
            <Link to="https://wa.me/5561998278558">
            <img src={whatsapp} alt="Ícone do WhatsApp" className={styles.iconeRedeSocial} />
            </Link>
            <Link to="#">
            <img src={instagram} alt="Ícone do Instagram" className={styles.iconeRedeSocial} />
            </Link>
            <Link to="https://www.linkedin.com/in/joaopauloresende/">
            <img src={linkedin} alt="Ícone do LinkedIn" className={styles.iconeRedeSocial} />
            </Link>
            
            </div>
        </section>
    </BrowserRouter>
        </footer>
    );


}

export default Footer;


