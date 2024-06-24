import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/pages/Login";
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
    console.log("i have token : ", token);
  }, []);
  return (
    <>
      {/* login page as landing page */}
      {/* <Login /> */}
      {/* we use the ternary operator if there is token then player page or else login page */}
      {token ? <h1>i loggged in</h1> : <Login />}
    </>
  );
}

export default App;
