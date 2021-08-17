import { createContext, ReactNode, useEffect, useState } from "react";
import { LogModel } from "src/models/LogModel/Log";
import { LogRepository } from "src/repositories/list/LogRepository";

type LogContextType = {
  logs: Array<LogModel>;
};

type LogContextProviderProps = {
  children: ReactNode;
};

export const LogContext = createContext({} as LogContextType);

export function LogContextProvider({ children }: LogContextProviderProps) {
  const [logs, setLogs] = useState<Array<LogModel>>([]);

  useEffect(() => {
    async function fetchLogs() {
      const repo = new LogRepository();

      const data = await repo.listAll();

      setLogs(data);
    }
    fetchLogs();
  }, []);

  return <LogContext.Provider value={{ logs }}>{children}</LogContext.Provider>;
}