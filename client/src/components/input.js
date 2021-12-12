import React from "react";
import { useState } from "react";
import ReactDOM from 'react-dom';

function Input() {
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
        <section className="text-gray-600 body-font relative ">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                <p className="pl-4 pr-4 pt-2 text-2xl text-red-500">&#128205;</p>
                <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900">FreeCycle</h1>
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
                        defaultValue={input.username || "" }
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
                        defaultValue={input.username || "" }
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
                        defaultValue={input.username || "" }
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
                        defaultValue={input.username || "" }
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
                        defaultValue={input.username || "" }
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </label>
                    </div>
                    </div>
                    </div>
                </div>

                


        </form>
        </div>
        </section>
    )
}

export default Input;
ReactDOM.render(<Input />, document.getElementById('root'));