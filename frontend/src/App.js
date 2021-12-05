import React, { Component } from 'react';
import Items from './components/items/items'

function App() {
  return (
    <div className="App">
      <section className="p-2">
        <div className="shadow rounded-md bg-gray-100">
        <p className="pl-4 pr-4 pt-2 text-2xl text-red-500">&#128205;</p>
        <h1 className="text-2xl font-bold pl-4 pr-4 pb-4"> FreeCycle</h1>
        </div>
      </section>
{/* Items Component */}

      <Items />

    </div>
  );
}



export default App