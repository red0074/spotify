import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayerValue } from "./components/DataLayer";

//instance of spotifwebapi
const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      // setToken(_token);
      //accessing using token endpoint(interaction btw spotify and react)

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      //imp to set the token so that you can access them in future without them you can't access the user information
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("37i9dQZEVXcL2rVZBxNaYk").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
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
