import { useState } from "react";
import Formulario from "../Formularios/Formulario.jsx";
import multirao from "../../assets/mutirao.png";
import futuro from "../../assets/futuro.png";
import conecta from "../../assets/conecta.png";
import esporte from "../../assets/esporte.png";
import familia from "../../assets/familia.png";
import aulas from "../../assets/aulas.png";
import perfil from "../../assets/fotoPerfil.jpg";
import styles from "./acoes.module.scss";

function Acoes() {
  const [modalAberto, setModalAberto] = useState(false);
  const [acaoSelecionada, setAcaoSelecionada] = useState(null); // opcional: guarda qual card clicou

  function abrirModal(acao) {
    setAcaoSelecionada(acao);
    setModalAberto(true);
    document.body.style.overflow = "hidden"; // trava scroll
  }

  function fecharModal() {
    setModalAberto(false);
    setAcaoSelecionada(null);
    document.body.style.overflow = "auto"; // libera scroll
  }

  return (
    <section className={styles.acoesContainer}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Alatsi&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
        `}
      </style>

      <div className={styles.introAcoes}>
        <h1>Ações da Connect</h1>
        <p>
          Junte-se a quem acredita na mudança. Apoie, participe e transforme vidas
          através de ações sociais que geram impacto real nas comunidades.
        </p>
      </div>

      <div className={styles.acoesCards}>
        <div className={styles.card}>
          <img className={styles.thumb} src={multirao} alt="Mutirão de reciclagem" />
          <div className={styles.body}>
            <h2>Mutirão de reciclagem</h2>
            <p>Coletar materiais recicláveis e orientar sobre descarte consciente.</p>
            <button
              className={styles.button}
              onClick={() =>
                abrirModal({ titulo: "Mutirão de reciclagem", tipo: "Participar", imagem: multirao })
              }
            >
              Quero Participar
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.thumb} src={aulas} alt="Aulas de Tecnologia" />
          <div className={styles.body}>
            <h2>Aulas de Tecnologia</h2>
            <p>
              Ensinar noções básicas de informática, internet segura e programação.
              Preparar jovens para o mercado de trabalho digital.
            </p>
            <button
              className={styles.button}
              onClick={() =>
                abrirModal({ titulo: "Aulas de Tecnologia", tipo: "Participar", imagem: aulas })
              }
            >
              Quero Participar
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.thumb} src={esporte} alt="Esporte e Inclusão" />
          <div className={styles.body}>
            <h2>Esporte e Inclusão</h2>
            <p>
              Organizar treinos e jogos que incentivem a participação de todos.
              Promover disciplina, saúde e trabalho em equipe entre jovens.
            </p>
            <button
              className={styles.button}
              onClick={() =>
                abrirModal({ titulo: "Esporte e Inclusão", tipo: "Participar", imagem: esporte })
              }
            >
              Quero Participar
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.thumb} src={familia} alt="Instituto Grande Familia" />
          <div className={styles.body}>
            <h2>Instituto Grande Familia</h2>
            <p>
              Contribua com alimentos não perecíveis e ajude famílias em situação de
              vulnerabilidade.
            </p>
            <button
              className={styles.button}
              onClick={() =>
                abrirModal({ titulo: "Instituto Grande Familia", tipo: "Doar", imagem: familia })
              }
            >
              Quero Doar
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.thumb} src={futuro} alt="Projeto Futuro na Escola" />
          <div className={styles.body}>
            <h2>Projeto Futuro na Escola</h2>
            <p>
              Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a
              continuarem seus estudos com mais estrutura.
            </p>
            <button
              className={styles.button}
              onClick={() =>
                abrirModal({ titulo: "Projeto Futuro na Escola", tipo: "Doar", imagem: futuro })
              }
            >
              Quero Doar
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.thumb} src={conecta} alt="Instituto Conecta Jovem" />
          <div className={styles.body}>
            <h2>Instituto Conecta Jovem</h2>
            <p>
              Doe computadores usados, tablets ou celulares em bom estado para
              permitir que jovens tenham acesso ao mundo digital.
            </p>
            <button
              className={styles.button}
              onClick={() =>
                abrirModal({ titulo: "Instituto Conecta Jovem", tipo: "Doar", imagem: conecta })
              }
            >
              Quero Doar
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {modalAberto && (
        <div className={styles.backdrop} onClick={fecharModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={fecharModal}
              aria-label="Fechar"
            >
              ✕
            </button>

            {/* você pode ignorar as props se não quiser mexer no Formulario */}
            <Formulario
              projeto={acaoSelecionada?.titulo}
              tipo={acaoSelecionada?.tipo}
              imagem={acaoSelecionada?.imagem}
              perfil={perfil}
              onClose={fecharModal}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Acoes;