import { useState, useEffect } from "react";

import { Sidebar } from "../../shared/components/Sidebar/";
import fetcher from "../../services/axios/api";

import { LogRepository } from "src/repositories/list/LogRepository";
import { LogModel } from "src/models/LogModel/Log";

import "./styles.css";
import "../../shared/styles/admin-pages.css";
import { useLogs } from "src/shared/hooks/useLogs";
import { useAuthentication } from "src/shared/hooks/useAuthentication";

export function Dashboard() {
  // const { logs } = useLogs();
  const { user } = useAuthentication();

  const [logs, setLogs] = useState<Array<LogModel>>([]);

  useEffect(() => {
    async function fetchLogs() {
      const response = await fetcher.get(`/logs`);

      setLogs([...response.data]);
    }
    fetchLogs();
  }, []);

  return (
    <div className="plant-page">
      <Sidebar page="dashboard" />
      <div className="screen">
        <h2>Olá, {user?.username}</h2>
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
