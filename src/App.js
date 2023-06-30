import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
    )
      .then((response) => {
        return response.json();
      })
      .then((d) => {
        setData(d);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <div className="App">
      <div className="mobileView">
        <div className="header">
          <button className="button">&lt;</button>
          <h4>&nbsp;&nbsp;&nbsp;Select Dishes</h4>
        </div>
        <div className="header2">
          <div className="time">
            <span></span>
          </div>
        </div>
        <div className="food-type">
          <div className="food">Indian</div>
          <div className="food">Italian</div>
          <div className="food">Chainees</div>
        </div>
        <div className="popularDishes">
          <h5>Popular Dishes</h5>
          <div
            className="dishes"
            style={{
              backgroundImage: `url(${
                data ? data.popularDishes.map((d) => d.image) : null
              })`,
            }}
          ></div>
          <div className="dishes"></div>
          <div className="dishes"></div>
        </div>
        <div>{data ? data.popularDishes.map((d) => d.name) : "loading..."}</div>
      </div>
    </div>
  );
}

export default App;
