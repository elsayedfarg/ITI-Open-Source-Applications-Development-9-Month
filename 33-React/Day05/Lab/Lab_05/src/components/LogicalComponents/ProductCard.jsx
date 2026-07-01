import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";

// Redux imports
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

const ProductCard = ({ prod }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(prod));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{prod.title}</CardTitle>
        <CardDescription>{prod.category}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <img
          src={prod.image}
          alt={prod.title}
          className="h-48 w-full object-contain mb-2"
        />

        <p className="text-xs text-muted-foreground line-clamp-3">
          {prod.description}
        </p>
      </CardContent>

      <CardFooter className="flex flex-col gap-3">
        <div className="flex justify-between items-center w-full">
          {prod.price > 100 ? (
            <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              Premium
            </Badge>
          ) : (
            <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
              Best Seller
            </Badge>
          )}

          <span className="text-sm">⭐ {prod.rating.rate}</span>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Add to Cart
        </button>

        <Link to={`/product/${prod.id}`} className="w-full">
          <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
            View Details
          </button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
