import React from "react";
import ReactDOM from "react-dom/client";
import Resume from "./Resume";
import { v4 as uuidv4 } from "uuid";

import "./style/index.scss";

const resumeKey = uuidv4();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Resume key={resumeKey} />
  </React.StrictMode>
);
