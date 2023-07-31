import ReactDOM from "react-dom/client";
import AuthProvider from "./providers/AuthProvider";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/Routes.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Toaster></Toaster>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);
