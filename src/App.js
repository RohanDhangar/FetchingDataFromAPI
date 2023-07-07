import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.gyanibooks.com/library/get_dummy_notes/"
      );
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  return (
    <div className="table-container">
      <h1 className="heading">Fetching Data from the API</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
          </tr>
        </thead>
        {data ? (
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.user}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <p>Loading...</p>
        )}
      </table>
    </div>
  );
}

export default App;
