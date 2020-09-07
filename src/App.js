import React,{useState} from 'react';
import './App.css';
import CardList from "./components/CardList/CardList";
import Search from "./components/search";
import Scroll from "./components/Scroll";
function App() {
    const [searchField, setSearchField] = useState("");
    function onSearchChange(e)
    {
      setSearchField(e.target.value);
    }
  return (
    <div className="tc Container">
        <div className="header">
          <img src="https://fontmeme.com/permalink/200906/b1faf2feb858b16f78e1f8a75da3adf1.png" alt="sega-font" border="0" />
          <Search onSearchChange={onSearchChange}/>
        </div>
        <hr/>
        <Scroll>
          <CardList searchField={searchField}/>
        </Scroll>
        
    </div>
  );
}

export default App;
