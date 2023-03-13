import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container flex flex-col px-5 py-8">
        <p className="text-xl font-bold text-center text-purple-600">
          © 2023 NataNoob's Blog
        </p>
        <div className="inline-flex justify-center mt-2">
          <FaTwitter className="text-gray-500 hover:text-purple-600 mx-3" />
          <FaFacebook className="text-gray-500 hover:text-purple-600 mx-3" />
          <FaInstagram className="text-gray-500 hover:text-purple-600 mx-3" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
