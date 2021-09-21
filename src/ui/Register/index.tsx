import plantLogo from "../../assets/images/Global/plant-logo.svg";
import Pin from "../../assets/images/AuthPages/pin.svg";
import Sun from "../../assets/images/AuthPages/sun.svg";
import cultivatePlant from "../../assets/images/AuthPages/cultivate-plant.svg";

import "./styles.css";
import { Form } from "@unform/web";
import { Input } from "./components/Input";
import { RegisterCodeInput } from "./components/RegisterCodeInput";
import { Link } from "react-router-dom";
import { FormHandles } from "@unform/core";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useAuthentication } from "src/shared/hooks/useAuthentication";

export function Register() {
  const formRef = useRef<FormHandles>(null);

  const { handleRegister } = useAuthentication();

  function handleSubmit(data: any) {
    toast.promise(handleRegister(data), {
      loading: 'Carregando...',
      success: 'Registro feito com sucesso',
      error: 'Ocorreu um erro interno',
    });
  }

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
            <Input
              title="Senha novamente"
              type="password"
              name="confirm"
              placeholder="Min. 8 caractéres"
            />
            <RegisterCodeInput
              title="Código de registro"
              type="text"
              name="registerCode"
              placeholder="Código"
            />
          </Form>
        </div>

        <div className="account">
          <span>Já possui conta?</span>
          <Link to="/login" className="create-account">
            Entrar
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
