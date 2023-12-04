import { useEffect, useState } from "react";
import "./App.css";
import Detailcard from "./components/Card/Detailcard";
import SearchInput from "./components/Search/Search";
import "./App.css"
import { debounce } from "./Functions/debouncing";

function App() {
  const [drink, setdrink] = useState(null);
  const [filtered,setFiltereddrinks] = useState(null)
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setdrink(res);
        setFiltereddrinks(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch = debounce((items)=> {
    // If the search term is empty, show all drinks
    if (items === '') {
      setFiltereddrinks(drink);
    } else {
      // Filter drinks based on the search term
      const filtered = drink.filter((drink) =>
        drink.name.toLowerCase().includes(items.toLowerCase())
      );
      setFiltereddrinks(filtered);
  }
  },300)

  
  const handleInputChange = (e) => {
    const searchItem = e.target.value
    setSearchTerm(searchItem);
    handleSearch(searchItem)  // Filter results as the user types
  };

  return (
    <div className="App">
      <h1>Drinks & Brew</h1>
      <div className="inputbox">
      <SearchInput
        searchTerm={searchTerm}
        onChange={handleInputChange}
      />
      </div>
      <div className="filteritems">
      {filtered?.map((val, id) => {
       return <Detailcard drink={val} key={id} />;
      })}
      </div>
    </div>
  );
}

export default App;
