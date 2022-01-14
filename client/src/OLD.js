import React from "react";
import { useState } from "react";
import ReactDOM from 'react-dom';

function Index() {
    const [input, setInput] = useState({});

    const EnterItem = (event) => {
        const username = event.target.username;
        const rest = event.target.rest;

        setInput(restI =>({...restI, [username]: rest}))
    }

    const SubmitItem = (event) => {
        event.preventDefault();
        alert(input)
    }
    return(
        <section className="rounded border ml-12 mr-12 mb-8 bg-gray-100 text-gray-600 body-font relative ">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-4">
                    <div className="lg:w-1/2 md:w-2/3 mx-auto rounded-xl border bg-gray-200 p-4 relative w-64 text-center">
                        <span role="img" aria-label="loc-pin" className="pl-4 pr-4 text-2xl text-red-500">&#128205;</span>
                        <h1 className="sm:text-4xl text-2xl font-medium title-font text-gray-900">FreeCycle</h1>
                    </div>
                </div>

            <form onSubmit={SubmitItem}>
                
                <div className="lg:w-1/2 md:w-2/3 mx-auto ">
                    <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                    <div className="relative">
                    <label className="p-1 uppercase leading-7 text-sm text-gray-600 mb-2">Username : 
                    <input type="text"
                        name="username"
                        onChange= {EnterItem}
                        defaultValue={input.username || "" }
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
                    <label className="p-1 uppercase leading-7 text-sm text-gray-600 mb-2">Latitude : 
                    <input type="text"
                        name="username"
                        onChange= {EnterItem}
                        defaultValue={input.latitude || "" }
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
                    <label className="p-1 uppercase leading-7 text-sm text-gray-600 mb-2">Longitude : 
                    <input type="text"
                        name="username"
                        onChange= {EnterItem}
                        defaultValue={input.longitude || "" }
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
                    <label className="p-1 uppercase leading-7 text-sm text-gray-600 mb-2">Image : 
                    <input type="text"
                        name="username"
                        onChange= {EnterItem}
                        defaultValue={input.image || "" }
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
                    <label className="p-1 uppercase leading-7 text-sm text-gray-600 mb-2">Keywords : 
                    <input type="text"
                        name="username"
                        onChange= {EnterItem}
                        defaultValue={input.keywords || "" }
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
                    <label className="p-1 uppercase leading-7 text-sm text-gray-600 mb-2">Description : 
                    <input type="text"
                        name="username"
                        onChange= {EnterItem}
                        defaultValue={input.description || "" }
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </label>
                    <div className="pt-5">
                    <input className="w-32 hover:bg-yellow-200 hover:text-gray-800 transition ease-out duration-300 ml-2 font-bold focus:outline-none active:scale-95 hover:shadow-md cursor-pointer bg-gray-200 rounded-md p-2 "type="submit" value="Prev Record"/>
                    <input className="w-32 hover:bg-green-200 hover:text-gray-800 transition ease-out duration-300 ml-2 font-bold focus:outline-none active:scale-95 hover:shadow-md cursor-pointer bg-gray-200 rounded-md p-2 "type="submit" value="Next Record"/>
                    </div>
                    <div className="pt-5">
                    <input className="w-32 hover:bg-red-300 hover:text-gray-800 transition ease-out duration-300 ml-2 font-bold focus:outline-none active:scale-95 hover:shadow-md cursor-pointer bg-gray-200 rounded-md p-2 "type="submit" value="Delete Record"/>
                    <div className="pt-5"></div>
                    <input className="w-32 hover:bg-green-300 hover:text-gray-800 transition ease-out duration-300 ml-2 font-bold focus:outline-none active:scale-95 hover:shadow-md cursor-pointer bg-gray-200 rounded-md p-2 "type="submit" value="Submit Record"/>
                    </div>
                    </div>
                    </div>
                    </div>

                    <section>
                        <h1>TESTING</h1>
                    </section>
                </div>
        </form>
        </div>
        </section>
    )
}

export default Index;
ReactDOM.render(<Index />, document.getElementById('root'));