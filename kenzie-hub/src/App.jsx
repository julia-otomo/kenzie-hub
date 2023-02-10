import { GlobalStyles } from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppRoutes } from "./Routes";
import { StyledApp } from "./styles";
import { useState } from "react";

function App() {
  return (
    <StyledApp className="App">
      <GlobalStyles />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ fontSize: "1.6rem" }}
      />
      <AppRoutes />
    </StyledApp>
  );
}

export default App;
