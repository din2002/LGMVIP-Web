import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import { Loader } from "./components/Loader";
import "./App.css";

function App() {
  const [personData, setpersonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState({ minPage: 1, maxPage: 6 });
  const personDataPresent = personData.length !== 0;

  const url = "https://reqres.in/api/users?";

  async function apifetch(page) {
    const users = await fetch(`${url}page${page}`).then((res) =>
      res.json().catch((err) => {
        console.log("Fetching Data unsuccessful", err.message);
      })
    );
    return users;
  }

  const getpersonData = async (minPage) => {
    if (personData.length !== 0 && minPage === 1) {
      return;
    }
    setLoading(true);
    const users = await apifetch(minPage);
    setPage({ minPage, maxPage: personData.total_pages });
    setpersonData([...personData, ...users.data]);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="App">
      <Navbar getpersonData={getpersonData} />
      {!loading && !personDataPresent && (
        <div className="container">
          <div className="typewriter">
            <div className="mt-5 text-success fs-3 fw-bold">Show User Data</div>
          </div>
        </div>
      )}

      {loading && <Loader />}

      {!loading && personData && <Users personData={personData} />}
    </div>
  );
}

export default App;
