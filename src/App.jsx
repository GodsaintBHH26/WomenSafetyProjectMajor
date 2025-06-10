import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import HomePage from "./pages/HomePage";
import Map from "./pages/map";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";

function App() {
  const allRoutes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/maps",
      element: <Map />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Signup",
      element: <SignUp />,
    },
  ];

  return (
    <>
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            {allRoutes.map((el) => {
              return <Route path={el.path} element={el.element} />;
            })}
          </Routes>
          <Footer/>
        </BrowserRouter>
      </LoadScript>
    </>
  );
}

export default App;
