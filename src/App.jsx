import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import { ToastContainer, Bounce } from "react-toastify";
import HomePage from "./pages/HomePage";
import Map from "./pages/map";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
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
    <div className="w-full overflow-x-hidden">
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            {allRoutes.map((el) => {
              return <Route path={el.path} element={el.element} />;
            })}
          </Routes>
          <Footer />
        </BrowserRouter>
      </LoadScript>
      <ToastContainer
        position="top-center"
        autoClose={13}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
