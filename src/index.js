import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
//Removed strict mode so that parent and child are rendered once(though strict mode is useful for debugging in developer environment)
