import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { userContext } from "./context/userContext";

//importamos browserRouter para hacer redirecciones
import { BrowserRouter } from "react-router-dom";

function App() {
  const [user, setUser] = useState({ name: "" });
  const Login = (name) => setUser({ name });
  const logOut = () => setUser({ name: "" });

  const enter = { user, Login, logOut };

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={enter}>
          <Header />
          <Main />
        </userContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
