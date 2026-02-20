

import styles from "./inicio.module.scss";
import Image from "../../assets/img-tela-inicial.png";




function Inicio() {
  return (
  
    <section className={styles.inicio}>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Alatsi&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
      </style>
    <div className={styles.textos}>
      <h1>Projetos Sociais que transformam</h1>
      <p>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>
    </div>
    <div className={styles.imagemContainer}>
      <div className={styles.imagem}>
        <img src={Image} alt="Imagem de Tela Inicial" />
      </div>
    </div>
  </section>
  
  
  );
  
}


export default Inicio;

