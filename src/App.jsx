import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <body>
      <div className="box-shadow">
        <div>
          <Header />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </body>
  );
}

export default App;
