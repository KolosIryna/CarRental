// import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Catalog } from "./pages/Catalog/Catalog";
import { Favorite } from "./pages/Favorites/Favorites";

export const App = () => {
  return (
    // <Routes>
    //   <Route index element={<Home />}></Route>
    //   <Route path="catalog" element={<Catalog />}></Route>
    //   <Route path="favorites" element={<Favorite />}></Route>
    // </Routes>
    <div>
      <Home />
      <Catalog />
      <Favorite />
    </div>
  );
};

export default App;
