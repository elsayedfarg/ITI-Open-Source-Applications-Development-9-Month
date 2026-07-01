import { useLoaderData, useParams, useNavigate } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProductDetails = () => {
  const product = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="text-sm text-muted-foreground">
        Product ID: <span className="font-medium">{id}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex items-center justify-center border rounded-lg p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
          />
        </div>

        <div className="space-y-5">
          <h1 className="text-2xl font-bold leading-snug">{product.title}</h1>

          <p className="text-muted-foreground">{product.category}</p>

          <div className="flex items-center gap-3">
            <Badge>⭐ {product.rating?.rate}</Badge>

            <Badge variant="outline">{product.rating?.count} reviews</Badge>
          </div>

          <p className="text-sm text-gray-600">{product.description}</p>

          <div className="text-2xl font-semibold">${product.price}</div>

          <div className="flex gap-3 pt-2">
            <Button className="flex-1">Add to Cart</Button>

            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="flex-1"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
