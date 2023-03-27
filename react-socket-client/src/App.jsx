import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { ContextProvider } from "./context";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";

import io from "socket.io-client";

function App() {
  const [display, setDisplay] = useState(false);
  let socket;
  useEffect(() => {
    // const socket = io("http://localhost:3131");
    // socket.on("connected", () => {
    //   socket.on("question", () => {
    //     setDisplay(true);
    //   });
    // });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/dashboard", element: <Dashboard /> },
  ]);

  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
