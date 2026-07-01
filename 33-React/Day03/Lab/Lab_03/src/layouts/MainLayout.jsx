import { Outlet } from "react-router";
import Navbar from "@/components/LogicalComponents/Navbar";
import Footer from "@/components/LogicalComponents/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      {/* Dynamic Content */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
