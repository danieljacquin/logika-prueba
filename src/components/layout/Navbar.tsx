const Navbar = () => {
  return (
    <nav className="h-16 w-full bg-[#1E1B4D] shadow flex items-center justify-between px-6 fixed">
      <div className="flex items-center">
        <img src="/navbar-logo.svg" alt="logo" />
      </div>

      <div className="flex items-center">
        <img src="/navbar-avatar.svg" alt="avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
