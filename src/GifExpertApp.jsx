import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Midnight gospel",
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* titulo de la aplicacion */}
      <h1>Gif Expert App</h1>

      {/* Formulario de busqueda */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {/* Listado de gifs */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* Gif Item */}
    </>
  );
};
