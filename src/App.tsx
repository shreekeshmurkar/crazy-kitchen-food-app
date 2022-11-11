import { Suspense } from "react";
import "./App.css";
import Header from "./component/layout/Header";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoute";
import Footer from "./component/layout/Footer";

function App() {
  return (
    <div className="App">
      <Suspense>
        <Router>
          <Header></Header>
          <AppRoutes />          
          <Footer></Footer>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
