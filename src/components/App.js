import React, {useState} from "react";
import Nav from "./Nav";
import MainContainer from "./MainContainer"

import hogs from "../porkers_data";

function App() {

  const [greaseFilter, setGreaseFilter] = useState(false)
  const [sorted, setSorted] = useState(false)
  const [sortedWeight, setSortedWeight] = useState(false)
  
  return (
    <div className="App">
      <Nav />
      <input type="checkbox" value={greaseFilter} onChange={e => setGreaseFilter(!greaseFilter)}/> Filter Greased
      <br></br>
      <input type="checkbox" value={sorted} onChange={e => setSorted(!sorted)}/> Sort by Name
      <br></br>
      <input type="checkbox" value={sortedWeight} onChange={e => setSortedWeight(!sortedWeight)} /> Sort by Weight
      {/* <button onClick={}>Click to sort by weight</button> */}
      <MainContainer greaseFilter={greaseFilter} setGreaseFilter={setGreaseFilter} sorted={sorted} sortedWeight={sortedWeight}/>
    </div>
  );
}

export default App;
