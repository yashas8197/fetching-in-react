import useFetch from "./useFetch";
import { useState } from "react";

const App = () => {
  const [showData, setShowData] = useState(false);
  const { data } = useFetch("https://jsonplaceholder.typicode.com/todos/1");
  return (
    <div>
      <h1>Todo API</h1>
      <button onClick={() => setShowData(true)}>Get Todo</button>
      {showData && (
        <div>
          {data ? (
            <p>{JSON.stringify(data)}</p>
          ) : (
            <p>An error occured while fetching data.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
