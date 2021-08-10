import {
  plantIcon,
  arrow,
  palmPlant,
  dibble,
  reap,
  vase,
  app,
  avaliation1,
  avaliation2,
  avaliation3,
  appleStore,
  googlePlay,
  miStore,
  huaweiStore,
  contact,
  instagram,
  twitter,
  facebook,
  email,
} from "../../assets/images";

import "./styles.css";

export function LandingPage() {
  return (
    <>
      <header>
        <div className="nav">
          <div className="gradient"></div>

          <div className="logo">
            <img src={plantIcon} alt="Logo" />
            <span>Plantty</span>
          </div>

          <div className="links">
            <a href="#">Início</a>
            <a href="#">Sobre</a>
            <a href="#">Contato</a>
          </div>

          <button className="download-button header">Baixe Agora</button>
        </div>

        <div className="nav mobile">
          <div className="gradient"></div>

          <div className="logo">
            <img src={plantIcon} alt="Logo" />
            <span>Plantty</span>
          </div>
        </div>
      </header>
      <main className="animation">
        <section className="introduction">
          <div className="introduction-text">
            <h1>Nós adoramos proteger o nosso planeta</h1>
            <p>
              Ajudamos você a fazer o seu jardim, reunindo as informações da
              flora do nosso planeta. Vamos pensar em pequenas coisas que mudam
              o mundo!
            </p>
            <div className="download-now">
              <button className="download-button">Baixe Agora</button>

              <div className="how-works">
                <small>Como funciona</small>
                <img src={arrow} alt="Seta" />
              </div>
            </div>
          </div>

          <div className="plant-image">
            <img src={palmPlant} alt="Planta" />
          </div>
        </section>

        <section className="introduction-mobile">
          <h1>Nós adoramos proteger o nosso planeta</h1>
          <p>
            Ajudamos você a fazer o seu jardim, reunindo as informações da flora
            do nosso planeta. Vamos pensar em pequenas coisas que mudam o mundo!
          </p>
        </section>

        <section className="instructions">
          <h1>Passos para melhorar o planeta</h1>
          <h2>Siga as intruções</h2>

          <div className="plant-instructions">
            <div className="dibble instruction">
              <img src={dibble} alt="Plantar" />
              <h1>Plantar</h1>
              <span>Pegue a muda e plante-a</span>
            </div>
            <div className="reap instruction">
              <img src={reap} alt="Colher" />
              <h1>Colha-a</h1>
              <span>Cuide da muda e depois colha-a</span>
            </div>
            <div className="vase instruction">
              <img src={vase} alt="Vaso" />
              <h1>Coloque em um vaso</h1>
              <span>Pegue uma muda e plante-a</span>
            </div>
          </div>
        </section>

        <section className="app-description">
          <div className="app-image">
            <img src={app} alt="Aplicativo" />
          </div>

          <div className="informations">
            <h1>Informações de uma forma simplificada</h1>
            <p>
              Você verá as informações das plantas de forma simples e completa.
              Também pode deixar algum comentário na planta para ajudar outras
              pessoas que não à conheçam!
            </p>
          </div>
        </section>

        <section className="avaliations">
          <h1>Usuários que já usaram nosso aplicativo</h1>
          <h2>Ajude-nos! Avalie nosso aplicativo em sua loja</h2>
          <div className="avaliation-cards">
            <img src={avaliation1} alt="Avaliação" />
            <img src={avaliation2} alt="Avaliação" />
            <img src={avaliation3} alt="Avaliação" />
          </div>
        </section>

        <section className="download">
          <div className="download-text">
            <h1>Faça o download do aplicativo agora mesmo!</h1>
            <p>
              Ao lado você pode escolher a loja de aplicativo do seu smartphone
              e será direcionado à ela
            </p>
          </div>

          <div className="stores-images">
            <img src={appleStore} alt="Loja da Apple" />
            <img src={googlePlay} alt="Loja da Google" />
            <img src={miStore} alt="Loja da Xiaomi" />
            <img src={huaweiStore} alt="Loja da Huawei" />
          </div>
        </section>
      </main>

      <footer className="animation">
        <div className="footer-container">
          <div className="contact-image">
            <img src={contact} alt="Contato" />
          </div>
          <div className="about-us">
            <div className="social-networks">
              <h1>Redes Sociais</h1>
              <div className="social-images">
                <img src={instagram} alt="Instagram" />
                <img src={twitter} alt="Twitter" />
                <img src={facebook} alt="Facebook" />
              </div>
            </div>
            <div className="contact-us">
              <h1>Fale Conosco</h1>
              <p>
                <img src={email} alt="Email" />
                <span>contato@plantty.com.br</span>
              </p>
            </div>
          </div>
        </div>

        <div className="credits">
          <h1>Ilustrações: undraw.co</h1>
          <h1>Ícones: website.com</h1>
        </div>
      </footer>
    </>
  );
}
