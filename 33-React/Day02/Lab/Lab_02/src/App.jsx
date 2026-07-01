import { useState, useEffect } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Spinner } from "@/components/ui/spinner";

import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((prod) =>
    prod.title.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Fetch failed</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {loading && !error && (
        <div className="flex justify-center items-center h-[60vh]">
          <Spinner />
        </div>
      )}

      {!loading && !error && (
        <>
          <Field>
            <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
            <ButtonGroup>
              <Input
                value={search}
                id="input-button-group"
                placeholder="Type to search..."
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="outline">Search</Button>
            </ButtonGroup>
          </Field>
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <Card key={prod.id}>
                <CardHeader>
                  <CardTitle>{prod.title}</CardTitle>
                  <CardDescription>{prod.category}</CardDescription>
                </CardHeader>

                <CardContent>
                  <img
                    src={prod.image}
                    className="h-48 w-full object-contain"
                  />
                  <p className="text-sm mt-2">{prod.description}</p>
                </CardContent>

                <CardFooter className="flex justify-between">
                  <span>
                    {prod.price > 100 ? (
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                          Premium
                        </Badge>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                          Best Seller
                        </Badge>
                      </div>
                    )}
                  </span>
                  <span>⭐ {prod.rating.rate}</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
