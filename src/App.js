import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import KitchenListPage from "./pages/KitchenListPage";
import RecipesListPage from "./pages/RecipesListPage";
import RecipeItem from "./components/RecipeItem";
import KitchenItem from "./components/KitchenItem";

function App() {
  return (
    <div className="App">
      <Header />

      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/kitchens" element={<KitchenListPage />} />
          <Route path="/kitchens/:id" element={<KitchenItem />} />
          <Route path="/recipes" element={<RecipesListPage />} />
          <Route path="/recipes/:id" element={<RecipeItem />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
