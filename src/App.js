import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <PageNotFound />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
