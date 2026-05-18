import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";


const pageTitles = {
  "/overview": "Overview",
  "/analytics": "Analytics",
  "/products": "Products",
  "/reports": "Reports",
};

export default function TopBar() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  const title = pageTitles[location.pathname] || "Dashboard";

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark((prev) => !prev);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-card border-b border-border shrink-0">
      <div>
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
        <p className="text-xs text-muted-foreground mt-0.5">
          Welcome back, Jaya Prakash
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-colors duration-200"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shrink-0">
          <span className="text-xs font-semibold text-primary-foreground">
            JP
          </span>
        </div>
      </div>
    </header>
  );
}
