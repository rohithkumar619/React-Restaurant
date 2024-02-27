import "./App.css";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Menu",
      element: <Menu />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}>
        <NavBar />
      </RouterProvider>
      <Footer />
    </div>
  );
}

export default App;
