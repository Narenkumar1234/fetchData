import axios from "axios";
import { useState } from "react";
import ReactJson from "react-json-view";

function App() {
  const [baseURL, setBaseUrl] = useState<string>(
    "https://dummyjson.com/products/category/smartphones"
  );
  const [res, setRes] = useState<any>({});

  const fetchData = () => {
    axios.get(baseURL).then((response) => {
      setRes(response.data);
    });
  };

  return (
    <div className="m-10 space-y-4">
      <h1 className=" font-bold text-2xl ">API Response:</h1>
      <div className="flex space-x-3"><input
        className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
        type="text"
        value={baseURL}
        onChange={(e) => setBaseUrl(e.target.value)}
        placeholder="Enter API URL"
      />
      <button className="bg-blue-500 rounded-lg text-white p-2 text-sm" onClick={fetchData}>Fetch Data</button>
      </div>

      <div className="mt-10">
        <ReactJson src={res} />
      </div>
    </div>
  );
}

export default App;
