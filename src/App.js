import { useState } from "react";
import "./App.css";
import { list, list2 } from "./assets/cards-list";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Map2 from "./components/Map2";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className="App">
      <Header />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      /><div className="content">
      <div className="Cards">
      {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
      </div>
      <div className="Maps">
        <Map2/>
      </div>
      </div>
    </div>
  );
}

export default App;
