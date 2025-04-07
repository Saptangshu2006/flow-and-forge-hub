
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-productivity-purple">
            <Link to="/">Flow&Forge</Link>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground/80 hover:text-productivity-purple transition-colors">
            Dashboard
          </Link>
          <Link to="/tasks" className="text-foreground/80 hover:text-productivity-purple transition-colors">
            Tasks
          </Link>
          <Link to="/calendar" className="text-foreground/80 hover:text-productivity-purple transition-colors">
            Calendar
          </Link>
          <Link to="/notes" className="text-foreground/80 hover:text-productivity-purple transition-colors">
            Notes
          </Link>
        </nav>
        <div className="flex items-center space-x-3">
          <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </button>
          <div className="h-8 w-8 rounded-full bg-productivity-purple text-white flex items-center justify-center">
            <span className="font-medium text-sm">US</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
