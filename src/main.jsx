import React from "react";
import ReactDOM from "react-dom/client";
import Resume from "./Resume";
import { v4 as uuidv4 } from "uuid";
import { resumeInfo } from "./data";
import "./index.scss";

const resumeKey = uuidv4();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>Resume Builder 1.0</h1>
    <main>
      <div className="inputs">here goes the inputs</div>
      <div className="showoff">
        <Resume key={resumeKey} data={resumeInfo} />
      </div>
    </main>
  </React.StrictMode>
);
