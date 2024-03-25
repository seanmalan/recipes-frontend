import "./App.css";
import Header from "./components/Header";
import KitchenListPage from "./pages/KitchenListPage";
import RecipesListPage from "./pages/RecipesListPage";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/kitchens" element={<KitchenListPage />} />
          <Route path="/recipes" element={<RecipesListPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
