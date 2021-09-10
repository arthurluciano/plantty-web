import { Router } from "react-router";
import { Routes } from "./shared/components/Routes";
import { AuthenticationContextProvider } from "src/shared/hooks/useAuthentication/context/AuthenticationContext";
import { LogContextProvider } from "src/shared/hooks/useLogs/context/LogContext";
import history from "./shared/history";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthenticationContextProvider>
      <LogContextProvider>
        <Router history={history}>
          <Routes />
        </Router>
        <Toaster toastOptions={{ style: {fontFamily: 'Montserrat, sans-serif'} }} />
      </LogContextProvider>
    </AuthenticationContextProvider>
  );
}

export default App;
