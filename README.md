# Connect — Projeto Frontend

**Descrição**
- Projeto de interface para conectar empresas a projetos sociais. Layout responsivo com hero, cards de ações, formulário modal para participar/doar e páginas informativas.

**Tecnologias usadas**
- **React**: biblioteca de UI.
- **Vite**: bundler e dev server rápido.
- **React Router DOM**: roteamento de páginas.
- **Sass / SCSS**: pré-processador para estilos (módulos CSS).
- **Node.js & npm**: execução de scripts e gerenciamento de dependências.
- **Babel / plugins do React** (via Vite): transformação JSX.

**Instalação (local)**
1. Instale dependências:

```bash
npm install
```

2. Rodar servidor de desenvolvimento:

```bash
npm run dev
```

3. Build de produção:

```bash
npm run build
npm run preview
```

**Arquivos importantes**
- **`src/`**: código-fonte React.
- **`src/componentes/Inicio/Inicio.jsx`** e **`src/componentes/Inicio/inicio.module.scss`**: hero inicial.
- **`src/componentes/NavBar/`**: barra de navegação.
- **`src/componentes/Footer/`**: rodapé.
- **`src/componentes/AcoesdaConnect/`**: cards e modal de participação.
- **`src/componentes/Formularios/Formulario.jsx`**: formulário do modal (placeholder de telefone atualizado para `61 999999999`).

**Notas e recomendações**
- Use o `pattern` do input de telefone seguindo `DD 9XXXXXXXX` (ex.: `61 999999999`).
- Estilos principais usam CSS Modules (`*.module.scss`) para escopo local.
- Se houver problemas de layout, cheque estilos com `vh` fixos e dimensões em pixels — preferir `max-width`, `min-height` e unidades responsivas.

**Contribuição**
- Abra uma issue descrevendo o problema e envie um PR com alterações isoladas por arquivo.

**Licença**
- Projeto de demonstração / educativo (ver cabeçalho do rodapé para referências).

---

Se quiser, eu rodo o servidor dev aqui e confirmo visualmente as mudanças agora.
