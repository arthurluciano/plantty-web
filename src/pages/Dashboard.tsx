import { Sidebar } from "../components/Sidebar";
import "../styles/dashboard.css";
import "../styles/admin-pages.css";

export function Dashboard() {
  return (
    <div className="plant-page">
      <Sidebar page="dashboard"/>
      <div className="screen">
        <h2>Olá, administrador</h2>
        <span>Bem vindo ao sistema, você está na Dashboard.</span>

        <h3>Últimas alterações</h3>

        <table className="log-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuário</th>
              <th>Alteração</th>
              <th>Planta</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
