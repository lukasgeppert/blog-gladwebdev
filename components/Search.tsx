function Header() {
  return (
    <div className="flex items-center justify-end py-3">
      <input
        type="text"
        className="px-4 py-2 w-1/2 md:w-full text-sm md:text-base bg-gray-900 text-white flex items-center rounded-full"
        placeholder="Search..."
      />
    </div>
  );
}

export default Header;
