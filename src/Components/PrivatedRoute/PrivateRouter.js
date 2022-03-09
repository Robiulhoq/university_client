import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../../App";

// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
    const [login, setLogin] = useContext(LoginContext);
    return login.email ? 
            children
           :  <Navigate
              to={{
                pathname: "/login",

              }}
            />
  }
  export default PrivateRoute