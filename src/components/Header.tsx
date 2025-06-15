
const Header = () => {
  return (
    <header className="bg-android-dark-green text-white shadow-md">
      <div className="container mx-auto max-w-4xl">
        <nav className="flex items-center justify-center py-4">
          <ul className="flex space-x-8 text-sm font-medium">
            <li>
              <a href="#" className="hover:text-android-green transition-colors px-3 py-2 rounded">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-android-green transition-colors px-3 py-2 rounded">
                Notícias
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-android-green transition-colors px-3 py-2 rounded">
                Curiosidades
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-android-green transition-colors px-3 py-2 rounded">
                Fale Conosco
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
