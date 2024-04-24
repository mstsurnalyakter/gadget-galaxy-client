import { createContext } from "react"
import PropTypes from "prop-types";

export const AuthContext = createContext(null);


const FirebaseProvider = ({children}) => {

    const authInfo = {
        name:"alex"
    }
  return (
    <AuthContext value={authInfo}>
        {children}
    </AuthContext>
  )
}

FirebaseProvider.propTypes = {
  children: PropTypes.node,
};

export default FirebaseProvider