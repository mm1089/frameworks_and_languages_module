import React, { useEffect, useState } from "react";
import Items from "./components/Item";


function App() {

    useEffect(() => {
      const getItems = async() =>{
        const items = await fetchItems();
        setItems(items);
      }
      getItems();
    }, [])
  
    const fetchItems = async() =>{
      const res = await fetch('/items');
      const data = await res.json();
      const dataArray = [];
      for (let item of Object.values(data)) {
        dataArray.push(item);
      }
      return dataArray;
    }
  
    const [items, setItems] = useState([]);
  
    return (
      <div>
          <Items />
      </div>
    );
  }
  
  export default App;
