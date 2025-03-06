import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import components
import App from "./components/app/App.jsx";

// import store
import store from "./redux/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>
  </StrictMode>
);
