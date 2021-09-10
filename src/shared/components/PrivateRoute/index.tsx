import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuthentication } from "src/shared/hooks/useAuthentication";
import { Loading } from "src/ui/Loading";

export function PrivateRoute({ ...rest }: RouteProps) {
  const { user, loading } = useAuthentication();

  if (loading) {
    return <Loading />;
  }
  
  if (!user) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
}