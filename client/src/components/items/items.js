import React, { useState, useEffect, Component } from "react";

function Items() {
  return (
    <div className="Items">
      <section className="p-1">
        <div className="shadow rounded-md bg-gray-200">
        <h2 className="pl-4 text-xl font-semibold px-2 py-1">New Item</h2>
          <div className="pl-4 rounded-full b-2 p-2 bg-green-100 w-52 mb-2 p-2">
            <p className="text-gray-800 items-end text-xs font-semibold">[React Sub-Component "Items"]</p>
          </div>
        </div>
      </section>
      <section className="p-3 items-center">
        <form>
          <label >Username: <input placeholder="username" className="border focus:outline-none hover:shadow-md cursor-pointer p-1 rounded bg-gray-100 shadow" type="text" name="username" /></label>
          <label className="p-1">Latitude: <input placeholder="latitude" className="border focus:outline-none hover:shadow-md cursor-pointer p-1 rounded bg-gray-100 shadow" type="text" name="latitude" /></label>
          <label className="p-1">Longitude: <input placeholder="longitude" className="border focus:outline-none hover:shadow-md cursor-pointer p-1 rounded bg-gray-100 shadow" type="text" name="longitude" /></label>
          <label className="p-1">Image: <input placeholder="http://placekitten.com/100/100"className="border focus:outline-none hover:shadow-md cursor-pointer p-1 rounded bg-gray-100 shadow" type="text" name="image" /></label>
          <label className="p-1">Keywords: <input placeholder="keywords" className="border focus:outline-none hover:shadow-md cursor-pointer p-1 rounded bg-gray-100 shadow" type="text" name="keywords" /></label>
          <label className="p-1">Description: <input placeholder="description" className="border focus:outline-none hover:shadow-md cursor-pointer p-1 rounded bg-gray-100 shadow" type="text" name="description" /></label>
          <input className="hover:bg-green-100 hover:text-gray-800 transition ease-out duration-300 ml-2 font-bold focus:outline-none active:scale-95 hover:shadow-md cursor-pointer bg-gray-200 rounded-md p-2 "type="submit" value="Submit" />
        </form>
      </section>
      <section>
        <h2 className="pl-3 items-start text-l font-semibold">Items</h2>
      </section>
    </div>
    
  );
}

export default Items