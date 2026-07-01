import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-6">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-foreground">404</h1>

        <p className="text-muted-foreground">
          Oops! The page you're looking for doesn't exist.
        </p>

        <Link to="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
