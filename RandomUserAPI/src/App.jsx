import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [user, steUser] = useState([]);
  const url = "https://randomuser.me/api/?results=5";

  const ApiCall = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      steUser(data.results);
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    ApiCall(url);
  }, []);


  return (
    <div className="App">
      <h1>Random User API</h1>
      {user.map((item,index) => {
        return (
          <div key={index}>
            <span>Name: {`${item.name.title} ${item.name.first} ${item.name.last}`}</span>
            <span>Gender: {item.gender}</span>
            <span>Number: {item.cell}</span>
            <span>Email: {item.email}</span>
            <span>Country: {item.location.country}</span>
            <span>City: {`${item.location.state}, ${item.location.city}`}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
