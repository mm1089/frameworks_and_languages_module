import React, { useEffect, useState } from "react";
import Header from "./components/Header"
import Items from "./components/Items";
import Footer from "./components/Footer";
import Card from "./components/Card";


//    SETUP   //
//Importing React useState and useEffect
//Importing Components

//    FETCH REQUEST   //
//Fetch from Express Server as the page loads
//Fetch items from Express Server
//Get and Set State
//Convert data from array

function App() {

    useEffect(() => {
      const getItems = async() =>{
        const items = await fetchItems();
        setItems(items)
      }
      getItems()
    }, [])
  
    const fetchItems = async() =>{
      const res = await fetch('https://8000-orange-cricket-qlupjq9k.ws-eu27.gitpod.io/items')
      const data = await res.json()
      const dataArray = []
      for (let item of Object.values(data)) {
        dataArray.push(item)
      }
      setItems(dataArray)
    }
    const [items, setItems] = useState([])
//    DELETE    //
//Deletes an item from the server
//Fetches from the Express Backend
//Need to update state check for errors
      const delItem = async(id) =>{
        const delItem = await fetch(`https://8000-orange-cricket-qlupjq9k.ws-eu27.gitpod.io/item/${id}`, {
          method: 'DELETE'
        })
      }
//    POST    //
//Add an item to the server
//Fetches from Express Backend
//Add items and update the client state
//Method declared to fix an issue
      const postItem = async (item) => {
        await fetch ("https://8000-orange-cricket-qlupjq9k.ws-eu27.gitpod.io/item", {
          method: 'POST'
        })
      }
      fetchItems()
    
//    PLACEHOLDER CARDS   //
//Created "Dummy" Cards
//Supplied with filler info
//Styled with Tailwind
    return (
      <section className="bg-gray-100">
        <Header />
      <div className="">
      <h1 className="text-center sm:text-4xl text-2xl font-medium title-font text-gray-900">Cards</h1>
            <section className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 border">
              <Card image="http://placekitten.com/g/400/400" id="6" user_id="Michael" longitude="0.1821" latitude="0.2981" keywords="1, 2, 3" description="Description" date_from="2019-08-24"/>
              <Card image="http://placekitten.com/g/600/600" id="7" user_id="Allan" longitude="1.0812" latitude="0.2971" keywords="3, 2, 1" description="Information" date_from="2022-08-24"/>
              <Card image="http://placekitten.com/g/500/500" id="8" user_id="Alex" longitude="1.8262" latitude="0.2315" keywords="4, 2, 1" description="Testing Cards" date_from="2022-08-24"/>
              <Card image="http://placekitten.com/g/700/700" id="9" user_id="Freya" longitude="1.3511" latitude="0.0363" keywords="4, 4, 4" description="Testing Cards" date_from="2022-08-24"/>
            </section>
          <Items/>
        </div>
        <Footer />
      </section>
    )
  }

    export default App
