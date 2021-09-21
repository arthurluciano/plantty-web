import { useContext } from "react";
import { AuthenticationContext } from "./context/AuthenticationContext";

export function useAuthentication() {
  const values = useContext(AuthenticationContext);
  return values;
}