
import "./App.css";

function App() {
    
  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <span>&lt;/&gt;</span>
          SENAI <strong>DS</strong>
        </div>

        <nav className="nav">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#aprendizados">Aprendizados</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#areas">Áreas</a>
          <a href="#projetos">Projetos</a>
        </nav>
      </header>

    

      {/* HERO */}
      <section className="hero" id="inicio">

        <div className="hero-text">
          <p className="hero-subtitle">CURSO TÉCNICO SENAI</p>

          <h1>
            Transforme ideias em
            <span> sistemas.</span>
          </h1>

          <p className="hero-description">
            Aprenda a criar sites, aplicações, sistemas e soluções
            tecnológicas no curso Técnico em Desenvolvimento de Sistemas.
          </p>

          <div className="hero-buttons">
            <a href="#sobre" className="btn-primary">
              Conheça o curso
            </a>

            <a href="#tecnologias" className="btn-secondary">
              Ver tecnologias
            </a>
          </div>
        </div>

        {/* FOTO */}
        <div className="hero-image">
          <div className="image-container">

            <img
              src="https://i.pinimg.com/736x/fc/fe/28/fcfe28b786b7cfc6ab40986b0251d80a.jpg"
              alt="Tecnologia e desenvolvimento de sistemas"
            />

          </div>

          <div className="floating-card card-one">
            <strong>React</strong>
            <span>Frontend</span>
          </div>

          <div className="floating-card card-two">
            <strong>SQL</strong>
            <span>Banco de dados</span>
          </div>
        </div>

      </section>

      {/* SOBRE O CURSO */}
      <section className="section about" id="sobre">
        <div className="section-title">
          <p>01 — SOBRE O CURSO</p>
          <h2>O que é Desenvolvimento de Sistemas?</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              O Desenvolvimento de Sistemas é a área responsável pela criação
              de sistemas, sites, aplicativos e outras soluções tecnológicas.
            </p>

            <p>
              No curso Técnico em Desenvolvimento de Sistemas, você aprende
              conceitos e ferramentas para desenvolver soluções utilizando
              diferentes tecnologias.
            </p>

            <p>
              O profissional da área pode atuar no desenvolvimento,
              manutenção e suporte de sistemas e aplicações.
            </p>
          </div>

          <div className="about-highlight">
            <span>&lt;/&gt;</span>
            <h3>Desenvolva o futuro.</h3>
            <p>
              Transforme conhecimento em projetos e soluções para o mundo real.
            </p>
          </div>
        </div>
      </section>

      {/* APRENDIZADOS */}
      <section className="section" id="aprendizados">
        <div className="section-title">
          <p>02 — APRENDIZADOS</p>
          <h2>O que você aprende</h2>
          <span>
            Conhecimentos fundamentais para começar sua jornada na tecnologia.
          </span>
        </div>

        <div className="cards-grid learning-grid">

          <div className="info-card">
            <div className="card-number">01</div>
            <h3>Lógica de programação</h3>
            <p>
              Desenvolva o raciocínio necessário para criar soluções através
              da programação.
            </p>
          </div>

          <div className="info-card">
            <div className="card-number">02</div>
            <h3>Desenvolvimento Web</h3>
            <p>
              Aprenda a desenvolver páginas e aplicações para a web.
            </p>
          </div>

          <div className="info-card">
            <div className="card-number">03</div>
            <h3>Frontend</h3>
            <p>
              Crie interfaces modernas, interativas e responsivas.
            </p>
          </div>

          <div className="info-card">
            <div className="card-number">04</div>
            <h3>Backend</h3>
            <p>
              Trabalhe com a parte responsável pelo funcionamento dos sistemas.
            </p>
          </div>

          <div className="info-card">
            <div className="card-number">05</div>
            <h3>Banco de dados</h3>
            <p>
              Aprenda a armazenar, organizar e consultar informações.
            </p>
          </div>

          <div className="info-card">
            <div className="card-number">06</div>
            <h3>Desenvolvimento de APIs</h3>
            <p>
              Entenda como diferentes sistemas podem se comunicar.
            </p>
          </div>

          <div className="info-card">
            <div className="card-number">07</div>
            <h3>Aplicativos</h3>
            <p>
              Conheça conceitos utilizados no desenvolvimento de aplicações.
            </p>
          </div>

          <div className="info-card">
            <div className="card-number">08</div>
            <h3>Versionamento de código</h3>
            <p>
              Aprenda a utilizar ferramentas como Git e GitHub.
            </p>
          </div>

        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section className="section technologies-section" id="tecnologias">
        <div className="section-title">
          <p>03 — TECNOLOGIAS</p>
          <h2>Tecnologias utilizadas</h2>
          <span>
            Algumas das principais tecnologias presentes na formação.
          </span>
        </div>

        <div className="technology-grid">

          <div className="tech-card">
            <span className="tech-icon">HTML</span>
            <h3>HTML</h3>
            <p>Estrutura das páginas web.</p>
          </div>

          <div className="tech-card">
            <span className="tech-icon">CSS</span>
            <h3>CSS</h3>
            <p>Estilização e aparência das interfaces.</p>
          </div>

          <div className="tech-card">
            <span className="tech-icon">JS</span>
            <h3>JavaScript</h3>
            <p>Interatividade e funcionalidades.</p>
          </div>

          <div className="tech-card">
            <span className="tech-icon">⚛</span>
            <h3>React</h3>
            <p>Criação de interfaces utilizando componentes.</p>
          </div>

          <div className="tech-card">
            <span className="tech-icon">N</span>
            <h3>Node.js</h3>
            <p>Desenvolvimento de aplicações no backend.</p>
          </div>

          <div className="tech-card">
            <span className="tech-icon">SQL</span>
            <h3>SQL</h3>
            <p>Manipulação e consulta de bancos de dados.</p>
          </div>

          <div className="tech-card">
            <span className="tech-icon">GIT</span>
            <h3>Git</h3>
            <p>Controle e versionamento do código.</p>
          </div>

          <div className="tech-card">
            <span className="tech-icon">GH</span>
            <h3>GitHub</h3>
            <p>Hospedagem e colaboração em projetos.</p>
          </div>

        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section className="section" id="areas">
        <div className="section-title">
          <p>04 — MERCADO</p>
          <h2>Áreas de atuação</h2>
          <span>
            Depois da formação, existem diferentes possibilidades na área de
            tecnologia.
          </span>
        </div>

        <div className="areas-grid">

          <div className="area-card">
            <span>01</span>
            <h3>Frontend</h3>
            <p>Desenvolvimento das interfaces que os usuários utilizam.</p>
          </div>

          <div className="area-card">
            <span>02</span>
            <h3>Backend</h3>
            <p>Desenvolvimento da lógica e funcionamento dos sistemas.</p>
          </div>

          <div className="area-card">
            <span>03</span>
            <h3>Full Stack</h3>
            <p>Atuação tanto no frontend quanto no backend.</p>
          </div>

          <div className="area-card">
            <span>04</span>
            <h3>Aplicações</h3>
            <p>Desenvolvimento de diferentes tipos de aplicações.</p>
          </div>

          <div className="area-card">
            <span>05</span>
            <h3>Banco de dados</h3>
            <p>Organização, gerenciamento e manutenção de dados.</p>
          </div>

          <div className="area-card">
            <span>06</span>
            <h3>Suporte e manutenção</h3>
            <p>
              Manutenção e suporte para sistemas e soluções tecnológicas.
            </p>
          </div>

        </div>
      </section>

      {/* PROJETOS */}
      <section className="section projects-section" id="projetos">
        <div className="section-title">
          <p>05 — PROJETOS</p>
          <h2>O que você pode criar?</h2>
          <span>
            Durante a formação, diferentes tipos de projetos podem ser
            desenvolvidos.
          </span>
        </div>

        <div className="projects-grid">

          <div className="project-card">
            <span>01</span>
            <h3>Sistema de clientes</h3>
            <p>Cadastro e gerenciamento de clientes.</p>
          </div>

          <div className="project-card">
            <span>02</span>
            <h3>Sistema de estoque</h3>
            <p>Controle e organização de produtos.</p>
          </div>

          <div className="project-card">
            <span>03</span>
            <h3>Agendamentos</h3>
            <p>Sistemas para organização de horários.</p>
          </div>

          <div className="project-card">
            <span>04</span>
            <h3>Loja virtual</h3>
            <p>Aplicações voltadas para comércio eletrônico.</p>
          </div>

          <div className="project-card">
            <span>05</span>
            <h3>Dashboard</h3>
            <p>
              Painéis para visualização e acompanhamento de informações.
            </p>
          </div>

          <div className="project-card">
            <span>06</span>
            <h3>Aplicativo de tarefas</h3>
            <p>
              Aplicações para organização de tarefas e atividades.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div>
          <p>SEU FUTURO NA TECNOLOGIA</p>

          <h2>
            Seu futuro na tecnologia
            <span> pode começar aqui.</span>
          </h2>

          <p>
            Conheça o curso Técnico em Desenvolvimento de Sistemas.
          </p>
        </div>

        <a href="#inicio" className="btn-primary">
          Voltar ao início ↑
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div>
          <div className="logo">
            <span>&lt;/&gt;</span>
            SENAI <strong>DS</strong>
          </div>

          <p>
            Técnico em Desenvolvimento de Sistemas
          </p>
        </div>

        <div className="footer-right">
          <p>SENAI • 2026</p>

          <p>
            Desenvolvido por <strong>[Betina Pierri Flores]</strong>
          </p>
        </div>

      </footer>

    </div>
  );
}

export default App;