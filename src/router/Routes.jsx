import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../page/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <div>404 Not found</div>,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
