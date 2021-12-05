import logo from './logo.svg';
import './App.css';





function App() {
  return (
    <div className="App">
      <section className="p-2">
        <div className="shadow rounded-md">
        <p className="pl-4 pr-4 pt-2 text-2xl text-red-500">&#128205;</p>
        <h1 className="text-2xl font-bold pl-4 pr-4 pb-4"> FreeCycle</h1>
        </div>
      </section>
      <section className="p-1">
        <div className="shadow rounded-md">
        <h2 className="text-xl font-semibold px-2 py-1">New Item</h2>
        </div>
      </section>
      <section className="p-3 items-center">
        <form>
          <label >Username: <input placeholder="username" className="border focus:outline-none hover:shadow-md cursor-pointer p-1 rounded bg-gray-100 shadow" type="text" name="username" /></label>
          <label className="p-1">Latitude: <input placeholder="latitude" className="border focus:outline-none hover:shadow-md cursor-pointer p-1 rounded bg-gray-100 shadow" type="text" name="latitude" /></label>
          <label className="p-1">Longitude: <input placeholder="longitude" className="border focus:outline-none hover:shadow-md cursor-pointer p-1 rounded bg-gray-100 shadow" type="text" name="longitude" /></label>
          <label className="p-1">Image: <input placeholder="image" placeholder="http://placekitten.com/100/100"className="border focus:outline-none hover:shadow-md cursor-pointer p-1 rounded bg-gray-100 shadow" type="text" name="image" /></label>
          <label className="p-1">Keywords: <input placeholder="keywords" className="border focus:outline-none hover:shadow-md cursor-pointer p-1 rounded bg-gray-100 shadow" type="text" name="keywords" /></label>
          <label className="p-1">Description: <input placeholder="description" className="border focus:outline-none hover:shadow-md cursor-pointer p-1 rounded bg-gray-100 shadow" type="text" name="description" /></label>
          <input className="hover:bg-green-100 hover:text-gray-800 transition ease-out duration-300 ml-2 font-bold focus:outline-none active:scale-95 hover:shadow-md cursor-pointer bg-gray-200 rounded-md p-2 "type="submit" value="Submit" />
        </form>
      </section>
      <section>
        <h2 className="items-start text-l font-semibold">Items</h2>
      </section>
    </div>
  );
}

export default App


//<label for="create_user_id">Username</label><input id="create_user_id" type="text" name="user_id"/>