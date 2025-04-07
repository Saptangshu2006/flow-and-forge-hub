
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-border bg-white hidden md:block">
      <div className="p-4">
        <div className="mb-8">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">MAIN</h4>
          <nav className="space-y-1">
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard">
                <rect width="7" height="9" x="3" y="3" rx="1" />
                <rect width="7" height="5" x="14" y="3" rx="1" />
                <rect width="7" height="9" x="14" y="12" rx="1" />
                <rect width="7" height="5" x="3" y="16" rx="1" />
              </svg>
              <span>Dashboard</span>
            </Link>
            <Link
              to="/tasks"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-square">
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <span>Tasks</span>
            </Link>
            <Link
              to="/calendar"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              <span>Calendar</span>
            </Link>
            <Link
              to="/notes"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
                <line x1="10" x2="8" y1="9" y2="9" />
              </svg>
              <span>Notes</span>
            </Link>
          </nav>
        </div>
        
        <div className="mb-8">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">CATEGORIES</h4>
          <div className="space-y-1">
            <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-foreground cursor-pointer">
              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
              <span>Work</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-foreground cursor-pointer">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span>Personal</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-foreground cursor-pointer">
              <div className="h-3 w-3 rounded-full bg-purple-500"></div>
              <span>Education</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-2">FAVORITES</h4>
          <div className="space-y-1">
            <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-foreground cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>Project Alpha</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-foreground cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>Weekly Review</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
