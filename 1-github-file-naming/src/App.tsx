import React, { useState } from "react";
import "./App.css";

function App() {
  const [path, setPath] = useState<string[]>(["app", "controllers", ""]);

  const lastValue: string = path[path.length - 1];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.includes("/")) {
      setPath((prevPath) => [...prevPath, ""]);
      e.target.value = "";
    } else {
      setPath((prevPath) => [...prevPath.slice(0, -1), value]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && path[path.length - 1] === "") {
      e.preventDefault();
      setPath((prevPath) => [...prevPath.slice(0, -1)]);
    }
  };

  return (
    <div>
      <h3>React Ornek</h3>
      <nav>
        {path.slice(0, -1).map((name, index) => (
          <React.Fragment key={index}>
            <a>{name}</a> <span> / </span>
          </React.Fragment>
        ))}
        <input
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={lastValue}
        />
        <button disabled={!lastValue}>Commit Changes</button>
      </nav>

      <pre>{JSON.stringify(path, null, 2)}</pre>
    </div>
  );
}

export default App;
