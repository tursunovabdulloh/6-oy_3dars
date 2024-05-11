import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import Photos from "./pages/Photos";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />}>
          <Route path="/todos" element={<Todos />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/photos" element={<Photos />}></Route>
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
