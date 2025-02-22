import React from "react"
import { useState } from "react"

//Importing React
function Items({ items}) {

    const Item = ({items}) => {
            /*
    const user_id, user_id = useState("")
    const latitude = useState("")
    const longitude = useState("")
    const image = useState("")
    const keywords = useState([])
    const description = useState("")
    */
//Update State
    }
//      INPUTS      //
//Visual Elements for Input
//Styled with Tailwind
//Including Animations and Events
    return(
        <section className="rounded border ml-12 mr-12 mb-8 bg-gray-100 text-gray-600 body-font relative ">
        <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-col text-center w-full mb-4">
                <div className="lg:w-1/2 md:w-2/3 mx-auto rounded-xl border bg-gray-200 p-4 relative w-64 text-center">
                    <h1 className="sm:text-4xl text-2xl font-medium title-font text-gray-900">Items</h1>
                </div>
            </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto mb-12">
            <div className="pt-5">
                <input className="w-32 hover:bg-yellow-200 hover:text-gray-800 transition ease-out duration-300 ml-2 font-bold focus:outline-none active:scale-95 hover:shadow-md cursor-pointer bg-gray-200 rounded-md p-2 "type="submit" value="Prev Record"/>
                <input className="w-32 hover:bg-green-200 hover:text-gray-800 transition ease-out duration-300 ml-2 font-bold focus:outline-none active:scale-95 hover:shadow-md cursor-pointer bg-gray-200 rounded-md p-2 "type="submit" value="Next Record"/>
                </div>
        </div>

        <form onSubmit="">
            <div className="lg:w-1/2 md:w-2/3 mx-auto ">
                <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                <div className="relative">
                <label className="p-1 uppercase leading-7 text-sm text-gray-600 mb-2">Username : {Item.user_id}
                <input type="text"
                    name="username"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </label>
                </div>
                </div>
                </div>
            </div>

            <div className="lg:w-1/2 md:w-2/3 sm:w-30px mx-auto">
                <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                <div className="relative">
                <label className="p-1 uppercase leading-7 text-sm text-gray-600 mb-2">Latitude : {Item.latitude}
                <input type="text"
                    name="username"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </label>
                </div>
                </div>
                </div>
            </div>

            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                <div className="relative">
                <label className="p-1 uppercase leading-7 text-sm text-gray-600 mb-2">Longitude : {Item.longitude} 
                <input type="text"
                    name="username"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </label>
                </div>
                </div>
                </div>
            </div>

            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                <div className="relative">
                <label className="p-1 uppercase leading-7 text-sm text-gray-600 mb-2">Image : {Item.image}
                <input type="text"
                    name="username"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </label>
                </div>
                </div>
                </div>
            </div>

            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                <div className="relative">
                <label className="p-1 uppercase leading-7 text-sm text-gray-600 mb-2">Keywords : {Item.keywords}
                <input type="text"
                    name="username"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </label>
                </div>
                </div>
                </div>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                <div className="relative">
                <label className="p-1 uppercase leading-7 text-sm text-gray-600 mb-2">Description : {Item.description}
                <input type="text"
                    name="username"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </label>
                </div>
                </div>
                </div>
                <input className="mt-4 mb-4 w-48 hover:bg-green-500 hover:text-gray-800 transition ease-out duration-300 ml-2 font-bold focus:outline-none active:scale-95 hover:shadow-md cursor-pointer bg-gray-200 rounded-md p-2 "type="submit" value="Create New Item"/>
            </div>
    </form>
    </div>
    </section>
)
}


export default Items