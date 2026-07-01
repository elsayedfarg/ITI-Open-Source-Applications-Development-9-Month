import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { useThemeStore } from "@/store/useThemeStore";

import { useSelector } from "react-redux";

import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const { mode, toggleTheme } = useThemeStore();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="w-full flex items-center justify-between p-4 border-b">
      <div className="w-1/3 flex items-center gap-2">
        <h1 className="font-bold text-lg">MyApp</h1>
        <span className="text-sm text-gray-500">
          {language === "en" ? "Welcome" : "مرحبا"}
        </span>
      </div>

      <div className="w-1/3 flex justify-center gap-6 items-center">
        <Link to="/" className="hover:underline">
          Home
        </Link>

        <Link to="/cart" className="hover:underline flex items-center gap-1">
          Cart
          <span className="text-sm bg-black text-white px-2 py-0.5 rounded-full">
            {cartItems.length}
          </span>
        </Link>
      </div>

      <div className="w-1/3 flex justify-end gap-3 items-center">
        <Button variant="outline" onClick={toggleLanguage}>
          {language === "en" ? "EN 🇺🇸" : "AR 🇪🇬"}
        </Button>

        <Button variant="outline" onClick={toggleTheme}>
          {mode === "light" ? "🌙 Dark" : "☀️ Light"}
        </Button>

        <Button variant="outline">Login</Button>
        <Button>Sign up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
