import PropTypes from "prop-types";
import AuthContext from "../context/AuthContext";

const AuthProvider = ({ children }) => {
  const authInfo = {
    hello: "hello",
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
