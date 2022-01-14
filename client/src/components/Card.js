import React from "react"

function Card({ image, id, user_id, latitude, longitude, keywords, description, date_from }) {
    return (
<div class="m-12 flex justify-center">
  <div class="rounded-lg shadow-lg bg-gray-50 max-w-sm">
    <a href="#!">
      <img class="rounded-lg object-fill" src={image} alt=""/>
    </a>
    <div class="p-3">
      <h5 class="text-gray-900 text-xl font-medium">ID: {id}</h5>
      <h5 class="text-gray-900 text-l font-medium mb-2">User ID: {user_id}</h5>
      <p class="text-gray-700 text-thin mb-2">Lat: {latitude}</p>
      <p class="text-gray-700 text-thin mb-2">Lon: {longitude}</p>
      <p class="text-gray-700 text-thin mb-2">Keywords: {keywords}</p>
      <p class="text-gray-700 text-thin mb-2">Description: {description}</p>
      <p class="text-gray-700 text-thin mb-2">Date: {date_from}</p>
      <button type="button" class=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete Item</button>
    </div>
  </div>
</div>
    )
}

export default Card