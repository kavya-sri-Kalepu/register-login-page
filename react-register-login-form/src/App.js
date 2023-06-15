import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import reducer from "./reducer";

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;