import React, { Component } from 'react';
import Items from './components/items/items';
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="App">
      <section className="p-2">
        <div className="shadow rounded-md bg-gray-200">
        <p className="pl-4 pr-4 pt-2 text-2xl text-red-500">&#128205;</p>
        <h1 className="text-2xl font-bold pl-4 pr-4 pb-4"> FreeCycle</h1>
          <div className="pl-4 rounded-full b-2 p-2 bg-green-100 w-52 mb-2 p-2">
            <p className="text-gray-800 font-semibold items-end text-xs ">[React Main-Component "App"]</p>
          </div>
        </div>
      </section>
{/* Items Component */}

      <Items />

    </div>
  );
}



export default App