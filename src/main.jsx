import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import 'remixicon/fonts/remixicon.css';
import 'react-toastify/dist/ReactToastify.css';
import { FirebaseProvider } from "./contexts/firebase.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </StrictMode>
);
