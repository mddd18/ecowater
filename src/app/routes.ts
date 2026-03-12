import { createBrowserRouter } from "react-router";
import { MobileLayout } from "./components/MobileLayout";
import { Home } from "./pages/Home";
import { Map } from "./pages/Map";
import { Inspection } from "./pages/Inspection";
import { Notifications } from "./pages/Notifications";
import { Profile } from "./pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MobileLayout,
    children: [
      { index: true, Component: Home },
      { path: "map", Component: Map },
      { path: "inspection", Component: Inspection },
      { path: "notifications", Component: Notifications },
      { path: "profile", Component: Profile },
    ],
  },
]);
