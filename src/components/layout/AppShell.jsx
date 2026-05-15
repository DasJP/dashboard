import { Outlet } from "react-router-dom";
export default function AppShell() {
  return (
    <div>
      <p>Sidebar placehoder</p>
      <p>Topbar placehoder</p>
      <Outlet />
    </div>
  );
}
