import { useState, useEffect } from "react";

import { Sidebar } from "../../shared/components/Sidebar/";
import fetcher from "../../services/axios/fetcher";

import "./styles.css";
import "../../shared/styles/admin-pages.css";

type LogsType = {
  id: string;
  plant: string;
  admin: string;
  editType: string;
  editDate: Date;
};

export function Dashboard() {
  const [logs, setLogs] = useState<Array<LogsType>>([]);

  useEffect(() => {
    async function fetchLogs() {
      const response = await fetcher.get("/logs");
      console.log(response.data);
      setLogs(response.data);
    }
    fetchLogs();
  }, []);

  return (
    <div className="plant-page">
      <Sidebar page="dashboard" />
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
              {/* <th>Data de alteração</th> */}
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => {
              return (
                <tr key={log.id}>
                  <td>{log.id}</td>
                  <td>{log.admin}</td>
                  <td>{log.editType}</td>
                  <td>{log.plant}</td>
                  {/* <td>{log.editDate}</td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
