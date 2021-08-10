import plantLogo from "../../assets/images/Global/plant-logo.svg";
import Pin from "../../assets/images/AuthPages/pin.svg";
import Sun from "../../assets/images/AuthPages/sun.svg";
import cultivatePlant from "../../assets/images/AuthPages/cultivate-plant.svg";

import "./styles.css";

export function Register() {
  return (
    <main id="register-page">
      <section className="login">
        <div className="image-container">
          <img src={plantLogo} className="plant-image" alt="Planta" />
        </div>

        <div className="title">
          <h2>Registre-se</h2>
          <div className="welcome-text">
            <span>Olá administrador, seja bem-vindo a tela de registro.</span>
          </div>
        </div>

        <div id="form">
          <form name="form" action="/register" method="post">
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

            <div className="input-group">
              <label htmlFor="confirm">Senha novamente</label>
              <input
                type="text"
                name="confirm"
                id="confirm"
                placeholder="Min. 8 caractéres"
              />
            </div>

            <div className="input-group">
              <label htmlFor="user">Código de registro</label>

              <div className="register">
                <input
                  type="text"
                  name="register-code"
                  id="register-code"
                  placeholder="Código"
                />
                <button type="submit">Registrar</button>
              </div>
            </div>
          </form>
        </div>

        <div className="account">
          <span>Já possui conta?</span>
          <a href="/login" className="create-account">
            Entrar
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
