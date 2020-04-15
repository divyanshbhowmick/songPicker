//Action creator
export const selectSong = (song) => {
  //Return an action
  return {
    type: "SONG_SELECTED", //It must alwys contain a type
    payload: song,
  };
};
