import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <div className="flex items-center border-b px-6 py-3">
        <div className="w-1/3 font-bold">MyApp</div>

        <div className="w-1/3 flex justify-center gap-6">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </div>

        <div className="w-1/3 flex justify-end gap-3">
          <button className="px-3 py-1 border rounded-md">Login</button>

          <button className="px-3 py-1 bg-black text-white rounded-md">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
