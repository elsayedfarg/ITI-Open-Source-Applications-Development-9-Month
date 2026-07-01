import { Outlet } from "react-router";
import Navbar from "@/components/LogicalComponents/Navbar";
import Footer from "@/components/LogicalComponents/Footer";
import { useThemeStore } from "@/store/useThemeStore";

const MainLayout = () => {
  const { mode } = useThemeStore();

  return (
    <div
      className={`${mode === "dark" ? "dark" : ""} min-h-screen flex flex-col transition-colors duration-300 bg-background text-foreground`}
    >
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
