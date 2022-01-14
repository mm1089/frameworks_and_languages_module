import React, { useEffect, useState } from "react";
import Header from "./components/Header"
import Items from "./components/Items";
import Footer from "./components/Footer";


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
      <section className="bg-gray-50">
      <div className="">
          <Header />
          <Items />
        </div>
        <Footer />
      </section>
    )
  }
  
  export default App;
