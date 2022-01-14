import React, { useEffect, useState } from "react";
import Header from "./components/Header"
import Items from "./components/Items";
import Footer from "./components/Footer";
import Card from "./components/Card";


function App() {

    useEffect(() => {
      const getItems = async() =>{
        const items = await fetchItems();
        setItems(items);
      }
      getItems();
    }, [])
  
    const fetchItems = async() =>{
      const res = await fetch('https://8000-orange-cricket-qlupjq9k.ws-eu27.gitpod.io/items');
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

        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 border">
        <Card image="http://placekitten.com/g/300/300" id="6" user_id="Michael" longitude="0" latitude="0" description="Description" date_from="date"/>
        </div>
        <Footer />
      </section>
    )
  }

    export default App;
