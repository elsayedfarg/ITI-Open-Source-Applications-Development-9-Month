const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="border-t mt-10 px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-semibold">MyApp</div>

          <div className="flex gap-6 text-sm">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>

          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
