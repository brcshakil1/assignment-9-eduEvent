import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="h-[70vh] grid place-items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
