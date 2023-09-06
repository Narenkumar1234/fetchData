import axios from "axios";
import { useState } from "react";
import ReactJson from "react-json-view";
function App() {
  const [baseURL, setBaseUrl] = useState<string>(
    "https://dummyjson.com/products/category/smartphones"
  );
  const [res, setRes] = useState<any>({});
  // const [loading,setLoading] = useState<boolean>(false);

  const fetchData = () => {
    // setLoading(true);
    axios.get(baseURL).then((response) => {
      setRes(response.data);
    });
    // setLoading(false);
  };

  return (
    <div className="m-10 space-y-4">
      <h1 className=" font-bold text-2xl ">API Response:</h1>
        <>
          <div>
            <input
              type="text"
              value={baseURL}
              onChange={(e) => setBaseUrl(e.target.value)}
              placeholder="Enter API URL"
            />
            <button
              onClick={fetchData}
            >
              Fetch Data
            </button>
          </div>
          <div>
            <ReactJson src={res} />
          </div>
        </>
    </div>
  );
}

export default App;
