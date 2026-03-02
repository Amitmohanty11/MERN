import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Todo({ todo }) {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
    </div>
  );
}

function App() {
  
  const [count, setCount] = useState(0);
  const [showBtn, setshowBtn] = useState(false);
  const [todos, settodos] = useState([
    {
      title: "Hey",
      desc: "I am good todo",
    },
    {
      title: "Hey agrym",
      desc: "I am also a good todo",
    },
    {
      title: "Hey yryzn",
      desc: "I am also a good todo and grocery todo",
    },
  ]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showBtn && <button>I will be true when second button is clicked</button>}
      {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      <div className="card">
        <button onClick={() => setshowBtn(!showBtn)}>Toogle Button</button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
