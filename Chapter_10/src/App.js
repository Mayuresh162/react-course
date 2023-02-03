import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import Shimmer from "./components/Shimmer";

const Instamart = lazy(() => import("./components/Instamart")); 
const About = lazy(() => import("./components/About"));

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about", // parentPath/{path} => localhost:1244/about
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        )
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
