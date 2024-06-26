export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: null,
  token:
    "BQAzApDf6ES6XJEvwmGmLZOSHKoV6zc0O--qXeg9qU_ZCsXF5Ow2BriqrZdTvNMPEkOm9eUDK3ksmAcm7-g3LFXLYdf4tcqBJ9boGwpghK9wekZNnzv0h4RNjLm64Tr-im_Bugk75ja0Extsx2ZJcTu3c6xGO57AFjgXC4qRXsz71wWWTYpZGq2GxsTTrqSfLZr9cpwwHv2t7pW4",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
