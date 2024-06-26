import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/pages/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/pages/Player";
import { useDataLayerValue } from "./components/pages/DataLayer";

//instance of spotifwebapi
const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();

    const _token = hash.access_token;
    if (_token) {
      // setToken(_token);
      //accessing using token endpoint(interaction btw spotify and react)

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
  }, []);

  return (
    <>
      {/* login page as landing page */}
      {/* <Login /> */}
      {/* we use the ternary operator if there is token then player page or else login page */}
      {/* {token ? <h1>i loggged in</h1> : <Login />} */}
      {token ? <Player spotify={spotify} /> : <Login />}
    </>
  );
}

export default App;
