import image from "../../assets/backgroundQuemSomos.png";
import styles from "../../componentes/QuemSomos/quemsomos.module.scss";


function QueSomos() {
  return (
    <section className={styles.quemSomos}>
      <div className={styles.imagem}>
      </div>
      <section className={styles.textos}>
        <div className={styles.titulo}>
        <h1>Como a Connect atua em projetos sociais</h1>
        </div>
      <section className={styles.conteudo}>
        <div>
        <p>A Connect é uma iniciativa que conecta empresas, pessoas e organizações sociais com um propósito em comum: gerar impacto positivo e transformar realidades. Atuamos no desenvolvimento e apoio a projetos sociais nas áreas de educação, inclusão, tecnologia, esporte e assistência social, sempre com foco em impacto real e sustentável.</p>
        </div>
        <div>
        <p>Há anos, trabalhamos aproximando quem quer ajudar de quem precisa, promovendo ações sociais estruturadas, transparentes e alinhadas às necessidades das comunidades. Acreditamos que a transformação acontece quando propósito, colaboração e responsabilidade caminham juntos.</p>
        </div>
        <div>
        <p>Nosso compromisso é conectar boas causas a quem deseja fazer a diferença, criando pontes entre empresas, voluntários e projetos sociais que realmente transformam vidas.</p>
        </div>
      </section>

      </section>

      <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
      </style>
      
    </section>
  );
}

export default QueSomos;