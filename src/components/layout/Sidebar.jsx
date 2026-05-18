import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart2,
  Package,
  FileText,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Overview", path: "/overview", icon: LayoutDashboard },
  { label: "Analytics", path: "/analytics", icon: BarChart2 },
  { label: "Products", path: "/products", icon: Package },
  { label: "Reports", path: "/reports", icon: FileText },
];

const bottomLinks = [{ label: "Settings", path: "/settings", icon: Settings }];

export default function Sidebar({ mobileOpen, onClose }) {
  return (
    <aside
      className={cn(
        "flex flex-col w-60 h-screen bg-card border-r border-border shrink-0",
        "fixed inset-y-0 left-0 z-50 transition-transform duration-300",
        "md:relative md:translate-x-0",
        mobileOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="flex items-center gap-3 px-6 py-5 border-b border-border">
        <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shrink-0">
          <LayoutDashboard size={15} className="text-primary-foreground" />
        </div>

        <span className="font-semibold text-sm text-foreground tracking-tight">
          Dashboard
        </span>
      </div>
      <nav className="flex flex-col gap-1 p-3 flex-1">
        {navLinks.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors duration-200",
                isActive
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )
            }
          >
            <Icon size={17} />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="p-3 border-t border-border">
        {bottomLinks.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors duration-200",
                isActive
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )
            }
          >
            <Icon size={17} />
            {label}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
