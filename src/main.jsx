import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import components
import App from "./components/app/App.jsx";

// import store
import store from "./redux/store.js";
import { Provider } from "react-redux";
import ContainerForm from "./components/containerForm/ContainerForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "form", element: <ContainerForm /> }],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
