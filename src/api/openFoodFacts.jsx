const BASE_URL = "https://world.openfoodfacts.org";

export const getProductsByCategory = async (category) => {
  const response = await fetch(`${BASE_URL}/category/${category}.json`);
  return response.json();
};

export const searchProductsByName = async (name) => {
  const response = await fetch(
    `${BASE_URL}/cgi/search.pl?search_terms=${name}&json=true`
  );
  return response.json();
};

export const getProductByBarcode = async (barcode) => {
  const response = await fetch(`${BASE_URL}/api/v0/product/${barcode}.json`);
  return response.json();
};
