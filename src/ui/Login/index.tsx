import plantLogo from "../../assets/images/Global/plant-logo.svg";
import Pin from "../../assets/images/AuthPages/pin.svg";
import Sun from "../../assets/images/AuthPages/sun.svg";
import cultivatePlant from "../../assets/images/AuthPages/cultivate-plant.svg";

import "./styles.css";
import { Form } from "@unform/web";
import { Input } from "./components/Input";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { FormHandles } from "@unform/core";
import { useAuthentication } from "src/shared/hooks/useAuthentication";

import toast from "react-hot-toast";

export function Login() {

  const formRef = useRef<FormHandles>(null);

  const { handleLogin } = useAuthentication();

  async function handleSubmit(data: any) {
    toast.promise(handleLogin(data), {
      loading: 'Carregando...',
      success: 'Login feito com sucesso',
      error: 'Ocorreu um erro interno',
    });
  }

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
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              title="Usuário"
              type="text"
              name="username"
              placeholder="Nome de usuário"
            />
            <Input
              title="Senha"
              type="password"
              name="password"
              placeholder="Min. 8 caractéres"
            />
            <div className="input-group actions">
              <button type="submit">Login</button>
            </div>
          </Form>
        </div>

        <div className="account">
          <span>Sua conta ainda não foi criada?</span>
          <Link to="/register" className="create-account">
            Crie uma conta
          </Link>
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
