import React from "react";
import ReactDOM from "react-dom/client";
import Resume from "./Resume";
import { v4 as uuidv4 } from "uuid";
import { resumeInfo } from "./data";
import Modal from "./modules/Modal";
import "./style/index.scss";

const resumeKey = uuidv4();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <header>
      <h1>Resume Builder 1.0</h1>
      <nav>
        <Modal type="new" section="Education" />
        <Modal type="new" section="Experience" />
      </nav>
    </header>
    <main>
      <Resume key={resumeKey} resumeInfo={resumeInfo} />
    </main>
  </React.StrictMode>
);
