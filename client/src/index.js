import React from 'react';
import Input from './components/input';

function Index() {
  return (
    <div className="Client-Main">
      <section className="p-2">
        <div className="shadow rounded-md bg-gray-200 border">
        <span role="img" aria-label="loc-pin" className="pl-4 pr-4 pt-2 text-2xl text-red-500">&#128205;</span>
        <h1 className="text-2xl font-medium pl-4 pr-4 pb-4"> FreeCycle</h1>
          <div className="pl-4 rounded-full b-2 p-2 bg-green-100 w-52 mb-2 p-2">
            <p className="text-gray-800 font-medium items-end text-xs m-1">[React Main-Component "App"]</p>
          </div>
          <div>
          </div>
        </div>
      </section>
{/* Items Component */}

      {/* Input component used for displaying form */}

      <div className='Client-Form'>
        <Input />
      </div>
    </div>
    
  );
}



export default Index