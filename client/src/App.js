import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <p className="text-red-500">&#128205;</p>
        <h1 className="text-xl font-bold"> FreeCycle</h1>
      </section>
      <section>
        <h2 className="text-l font-semibold">New Item</h2>
      </section>
      <section className="p-1">
        <form>
          <label >Username: <input className="focus:outline-none hover:shadow-md cursor-pointer p-1 rounded bg-gray-100 shadow" type="text" name="username" /></label>
          <label className="p-1">latitude: <input className="focus:outline-none hover:shadow-md cursor-pointer p-1 rounded bg-gray-100 shadow" type="text" name="latitude" /></label>
          <label className="p-1">longitude: <input className="focus:outline-none hover:shadow-md cursor-pointer p-1 rounded bg-gray-100 shadow" type="text" name="longitude" /></label>
          <label className="p-1">image: <input placeholder="http://placekitten.com/100/100"className="focus:outline-none hover:shadow-md cursor-pointer p-1 rounded bg-gray-100 shadow" type="text" name="image" /></label>
          <label className="p-1">keywords: <input className="focus:outline-none hover:shadow-md cursor-pointer p-1 rounded bg-gray-100 shadow" type="text" name="keywords" /></label>
          <label className="p-1">description: <input className="focus:outline-none hover:shadow-md cursor-pointer p-1 rounded bg-gray-100 shadow" type="text" name="description" /></label>
          <input className="focus:outline-none active:scale-95 hover:shadow-md cursor-pointer bg-gray-200 h-12 rounded px-2 "type="submit" value="Submit" />
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