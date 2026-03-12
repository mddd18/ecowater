import { Outlet, Link, useLocation } from "react-router";
import { Home, Map, FlaskConical, Bell, User } from "lucide-react";

export function MobileLayout() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Asosiy" },
    { path: "/map", icon: Map, label: "Xarita" },
    { path: "/inspection", icon: FlaskConical, label: "Tekshirish" },
    { path: "/notifications", icon: Bell, label: "Xabarlar" },
    { path: "/profile", icon: User, label: "Profil" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="pb-20">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? "scale-110" : ""}`} />
                <span className={`text-xs mt-1 ${isActive ? "font-semibold" : ""}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
