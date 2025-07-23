import React from 'react';
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routes/routes";
import './App.css'

declare module '@tanstack/react-router' {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router
  }
}

const router = createRouter({
  routeTree
});

const App: React.FC = () => (
  <RouterProvider router={router} />
);

export default App;
