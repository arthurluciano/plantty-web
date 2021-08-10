import plantLogo from "../../assets/images/Global/plant-logo.svg";
import Pin from "../../assets/images/AuthPages/pin.svg";
import Sun from "../../assets/images/AuthPages/sun.svg";
import cultivatePlant from "../../assets/images/AuthPages/cultivate-plant.svg";

import "./styles.css";

export function Login() {
  return (
    <main id="login-page">
      <section className="login">
        <div className="image-container">
          <img src={plantLogo} className="plant-image" alt="Planta" />
        </div>

        <div className="title">
          <h2>Login</h2>
          <div className="welcome-text">
            <span>Olá administrador, seja bem-vindo a tela de login.</span>
          </div>
        </div>

        <div id="form">
          <form name="form" action="/login" method="post">
            <div className="input-group">
              <label htmlFor="user">Usuário</label>
              <input
                type="text"
                name="user"
                id="user"
                placeholder="Nome de usuário"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Senha</label>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Min. 8 caractéres"
              />
            </div>

            <div className="input-group actions">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>

        <div className="account">
          <span>Sua conta ainda não foi criada?</span>
          <a href="/register" className="create-account">
            Crie uma conta
          </a>
        </div>
      </section>

      <section className="informations">
        <div className="card-images">
          <img src={Pin} className="pin-image" alt="Local PIN" />
          <img src={Sun} className="sun-image" alt="Sol" />
          <img
            src={cultivatePlant}
            className="cultivate-image"
            alt="Cultivar"
          />
        </div>
        <div className="cultivate-message">
          <h2>Cultive plantas ao redor do mundo</h2>
          <small>O planeta agradece!</small>
        </div>
      </section>
    </main>
  );
}
