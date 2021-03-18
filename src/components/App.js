import React, {useState} from "react";
import Nav from "./Nav";
import MainContainer from "./MainContainer"

import hogs from "../porkers_data";

function App() {

  const [greaseFilter, setGreaseFilter] = useState(false)

  return (
    <div className="App">
      <Nav />
      <input type="checkbox" value={greaseFilter} onChange={e => setGreaseFilter(!greaseFilter)}/> Filter Greased
      <br></br>
      {/* <button onClick={}>Click to sort by name</button> */}
      <br></br>
      {/* <button onClick={}>Click to sort by weight</button> */}
      <MainContainer greaseFilter={greaseFilter} setGreaseFilter={setGreaseFilter}/>
    </div>
  );
}

export default App;
