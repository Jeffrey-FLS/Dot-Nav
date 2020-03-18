import React from "react";
import logo from "./logo.svg";
import "./App.scss";

const App = () => {
  const numOfSections = 6;

  const renderSections = num => {
    let arr = new Array(num);

    for (let i = 1; i < num; i++) {
      arr[i] = `section-${i}`;
    }

    return arr;
  };

  const randColorGenerator = () => {
   return "#" + Math.floor(Math.random()*16777215).toString(16);
  }

  return (
    <div className="App">
      <main>
        {renderSections(numOfSections).map(ele => (
          <div id={ele} style={{backgroundColor: randColorGenerator()}}>
            <h1>{ele}</h1>
          </div>
        ))}
        <div className="dot-nav">
          <ul>
            {renderSections(numOfSections).map(ele => (
              <li>
                <h2><a href={`#${ele}`}>{ele}</a></h2>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
