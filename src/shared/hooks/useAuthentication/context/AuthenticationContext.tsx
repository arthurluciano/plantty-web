import { useState } from "react";
import { useEffect } from "react";
import { createContext, ReactNode } from "react";
import history from "../../../history";

import api from "../../../../services/axios/api";
import toast from "react-hot-toast";

type User = {
  id: string;
  username: string;
  created_at: Date;
};

type AuthenticationContextProvidersProps = {
  children: ReactNode;
};

type AuthenticationContextType = {
  user: User | null;
  loading: boolean;
  handleLogin: (data: any) => Promise<void>;
  handleLogOut: () => Promise<void>;
  handleRegister: (data: any) => Promise<void>;
};

export const AuthenticationContext = createContext(
  {} as AuthenticationContextType
);

export function AuthenticationContextProvider({
  children,
}: AuthenticationContextProvidersProps) {

  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const retriveUser = () => {
  
      const storagedUser = localStorage.getItem("user");
      const storagedToken = localStorage.getItem("token");
  
      if (storagedToken && storagedUser) {
        setUser(JSON.parse(storagedUser) as User);
        setToken(storagedToken);
  
        api.defaults.headers["authorization"] = `Bearer ${storagedToken}`;
      }
  
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }

    retriveUser();
  }, []);

  async function handleRegister(data: any) {
    const {
      data: { token, user },
    } = await api.post("/sessions/admin/register", data);

    setUser(user);
    setToken(token);

    api.defaults.headers["authorization"] = `Bearer ${token}`;

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    
    history.push("/dashboard");
  }

  async function handleLogin(data: any) {
    const {
      data: { token, user },
    } = await api.post("/sessions/admin/authenticate", data);

    setUser(user);
    setToken(token);

    api.defaults.headers["authorization"] = `Bearer ${token}`;

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    
    history.push("/dashboard");
  }

  async function handleLogOut() {
    api.defaults.headers["authorization"] = undefined;

    setUser(null);
    setToken(null);

    localStorage.clear();

    history.push("/login");

    toast.success(`Você se desconectou do sistema`);
  }

  return (
    <AuthenticationContext.Provider value={{ user, loading, handleLogin, handleLogOut, handleRegister }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
