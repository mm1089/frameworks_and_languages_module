import React from "react"

function Header() {
    return(
        <div className="container py-5 mx-auto">
            <div className="flex flex-col text-center w-full mb-4">
                <div className="rounded-xl border bg-gray-200 p-4 relative w-128 text-center">
                    <span role="img" aria-label="loc-pin" className="pl-4 pr-4 text-2xl text-red-500">&#128205;</span>
                    <h1 className="sm:text-4xl text-2xl font-medium title-font text-gray-900">FreeCycle</h1>
                </div>
            </div>
        </div>
    )
  }

export default Header