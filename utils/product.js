function getProductById(id, categories) {
  for (let category of categories) {
    if (category.id === id) {
      return category;
    } else if (category.children) {
      const result = getProductById(id, category.children);
      if (result) {
        return result;
      }
    }
  }
  return null;
}

export { getProductById };
