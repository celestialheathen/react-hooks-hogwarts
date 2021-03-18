import React, {useState} from "react";
import Nav from "./Nav";
import MainContainer from "./MainContainer"

import hogs from "../porkers_data";

function App() {

  const [greaseFilter, setGreaseFilter] = useState(false)
  const [sorted, setSorted] = useState(false)

  return (
    <div className="App">
      <Nav />
      <input type="checkbox" value={greaseFilter} onChange={e => setGreaseFilter(!greaseFilter)}/> Filter Greased
      <br></br>
      <input type="checkbox" value={sorted} onChange={e => setSorted(!sorted)}/> Sort by Name
      <br></br>
      {/* <button onClick={}>Click to sort by weight</button> */}
      <MainContainer greaseFilter={greaseFilter} setGreaseFilter={setGreaseFilter} sorted={sorted}/>
    </div>
  );
}

export default App;
