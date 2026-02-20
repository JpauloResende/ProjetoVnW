import image from '../../assets/fotoPerfil.jpg';
import styles from '../Perfil/perfil.module.scss';


function Perfil() {
  return (
    
    <section className={styles.container}>
    <div className={styles.perfilContainer}>
      <img src={image} alt="Foto de Perfil" />
      <div className={styles.info}>
    <div className={styles.perfil}>
      <h1>João Paulo</h1>
      <h3>CEO</h3>
      <p>Sou João Paulo, CEO dedicado a conectar pessoas e recursos para gerar impacto social. Lidero projetos em educação, inclusão digital e sustentabilidade, focando em soluções práticas e parcerias que transformam comunidades.</p>
    </div>
    <div className={styles.local}>
      <a>Goiás</a>
      <a>joao.paulorcsilva@gmail.com</a>
      <a>CEO</a>
    </div>
    <div className={styles.atividades}>
      <a>Educação</a>
      <a>Inclusão Digital</a>
      <a>Sustentabilidade</a>
      <a>Voluntariado</a>
    </div>
    </div>
    </div>

    <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    </style>

    </section>
  );
}

export default Perfil;