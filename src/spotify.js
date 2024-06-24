//this uses the spotify api and authorize the users
export const authEndpoint = "https://accounts.spotify.com/authorize";

//redirecturi
const redirectUri = "http://localhost:5173/";

//clientId
const clientId = "e83a7c9fe7124c449b7d81b770b65a81";

//declaring the scopes
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//breaking the url that we had gotten from soptify and getting the access token
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce(
      initial,
      (item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      },
      {}
    );
};

//url
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
