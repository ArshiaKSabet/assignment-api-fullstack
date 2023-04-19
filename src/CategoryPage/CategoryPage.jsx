import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ClickMe from "../Extras/ClickMe";

function CategoryPage() {
  const { id } = useParams();
  const [category, setCategory] = useState({});

  useEffect(() => {
    fetch(id ? `http://localhost:3001/api/categories/${id}` : "http://localhost:3001/api/categories")
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);


  return (
    <div className="wrapper">
      <ul>
      <h3>{category.name}</h3>
      {category.children && (
        <ul>
          {category.children.map((child) => (
            <li key={child.id}>
              <a href={`/category/${child.id}`}>{child.name}</a>
            </li>
          ))}
        </ul>
      )}
      </ul>
      <div><ClickMe/></div>
    </div>
  );
}

export default CategoryPage;