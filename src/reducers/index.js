import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "Tossie Drake", duration: "4:05" },
    { title: "Bad Guy", duration: "2:30" },
    { title: "All star", duration: "3:30" },
    { title: "I Want it That Way", duration: "1:30" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
