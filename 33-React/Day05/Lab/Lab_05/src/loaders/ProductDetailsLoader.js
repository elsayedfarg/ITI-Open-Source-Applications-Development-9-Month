import axios from "axios";

export async function ProductDetailsLoader({ params }) {
  const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
  return res.data;
}
