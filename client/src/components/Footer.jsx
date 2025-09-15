import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 py-8 bg-[#f0f0f0] md:py-10">
      <div className="container flex flex-col items-center justify-between gap-6 md:h-20 ml-3 md:flex-row">
        <p className="text-center text-sm text-gray-600 md:text-left">
          Built by{" "}
          <span className="font-semibold text-black hover:text-[#ff9c2f] transition-colors duration-300">
            Sushant
          </span>{" "}
          © {new Date().getFullYear()} AidFind. All rights reserved.
        </p>

        <div className="flex items-center gap-8 text-sm text-gray-500">
          {/* Add relevant links if needed */}
          <Link
            to={"https://www.linkedin.com/in/sushant-shukla-5a895625b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "}
            className="hover:underline text-gray-600 transition-all duration-300"
          >
            Linkdin
          </Link>
          <Link
            to={"https://github.com/sushantshukla45"}
            className="hover:underline text-gray-600 transition-all duration-300"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
