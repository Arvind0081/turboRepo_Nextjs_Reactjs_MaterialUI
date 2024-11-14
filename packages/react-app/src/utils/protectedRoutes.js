import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  
  const token = Cookies.get('token'); // Get the token from cookies
 
 // const decodedToken = jwtDecode(token); // Decode the JWT token
  const currentTime = Date.now() / 1000; // Get current time in seconds
  const redirectUrl= process.env.REACT_APP_REDIRECT_URL;
 
  if (!token || jwtDecode(token).exp < currentTime) {
    window.location.href = redirectUrl; // Redirect if no token or expired
    return null;
  }else{
    return children;
  }

};

export default ProtectedRoute;
