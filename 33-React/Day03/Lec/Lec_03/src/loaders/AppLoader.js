import axios from "axios";
export async function productsLoader() {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
}
