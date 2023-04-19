import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClickMe from "../Extras/ClickMe"
import "./CategoryTree.css"

function CategoryTree() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  

  const renderCategory = (category) => (
    <div key={category.id}>
      <h3>
        <Link to={`/category/${category.id}`}>{category.name}</Link>
      </h3>
      {category.children && (
        <ul>
          {category.children.map((child) => (
            <li key={child.id}>{renderCategory(child)}</li>
          ))}
        </ul>
      )}
    </div>
  );

  return (<div className="wrapper"><div className="category">{categories.map((category) => renderCategory(category))}</div><div className="clickable"><ClickMe /></div></div>);
}

export default CategoryTree;