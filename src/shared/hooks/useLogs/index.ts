import { useContext } from "react";
import { LogContext } from "./context/LogContext";

export function useLogs() {
  const values = useContext(LogContext);
  return values;
}