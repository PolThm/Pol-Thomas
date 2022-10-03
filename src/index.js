import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);