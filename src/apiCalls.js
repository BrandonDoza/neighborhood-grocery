const appId = "d320e3d3";
const appKey = "ba0e03c16c7be20ea081a8974a194fde";

export async function fetchFoodItem(foodItem) {
  const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${appId}&app_key=${appKey}&ingr=${foodItem}&nutrition-type=cooking`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("There is a problem getting the item you requsted");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
