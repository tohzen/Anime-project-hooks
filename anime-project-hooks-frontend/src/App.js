import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios"
import React, {useState, useEffect} from "react";

import Spinner from "./components/Spinner/Spinner";
import MainRouter from "./MainRouter";

import AuthContextWrapper from "./context/AuthContext";



function App() {
  
  return (
    <React.Suspense fallback={<Spinner />}>
      <Router>
        <AuthContextWrapper>
          <MainRouter />
        </AuthContextWrapper>
      </Router>
    </React.Suspense>
  );
}

export default App;