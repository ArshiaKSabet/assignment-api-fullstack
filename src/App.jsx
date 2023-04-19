import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoryTree from "./CategoryTree/CategoryTree";
import CategoryPage from "./CategoryPage/CategoryPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<CategoryTree />} />
        <Route path="/category/:id" element={<CategoryPage />} />
      </Routes>
  );
}

export default App;