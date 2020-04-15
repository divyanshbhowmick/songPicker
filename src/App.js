import React from "react";
import SongList from "./components/SongList/SongList";
import SongDetail from "./components/SongDetail/SongDetail";
const App = () => {
  return (
    <div className="ui container grid" style={{ marginTop: "20px" }}>
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
