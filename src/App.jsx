import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Lebao from "./components/Lebao/Lebao";
import Aibao from "./components/Aibao/Aibao";
import Fubao from "./components/Fubao/Fubao";
import Twins from "./components/Twins/Twins";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lebao" element={<Lebao />} />
          <Route path="aibao" element={<Aibao />} />
          <Route path="fubao" element={<Fubao />} />
          <Route path="twins" element={<Twins />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
