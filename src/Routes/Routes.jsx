import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "/admin",
      element: (
        <>
          <h1 className="text-3xl font-bold underline">admin</h1>
        </>
      ),
    },
    {
      path: "/teacher",
      element: <div>teacher</div>,
    },
    {
      path: "/",
      element: <div>user</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
