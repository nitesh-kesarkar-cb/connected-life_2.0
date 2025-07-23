// src/routes.tsx
import { createRoute, createRootRoute, redirect, Outlet, Navigate } from '@tanstack/react-router';
import SignIn from '../auth/pages/sign-in/SignIn';
import SignUp from '../auth/pages/sign-up/SignUp';
import Dashboard from '../dashboard/Dashboard';

const NotFoundComponent = () => {
  // You can redirect to sign-in here or just render a message
  return <Navigate to="/sign-in" replace />; // If you have a Navigate component or use router's redirect method
};


const IndexRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/",
  loader: () => {
    throw redirect({ to: "/sign-in", replace: true });
  }
});

const SignInRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/sign-in",
  component: SignIn
});

const SignUpRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/sign-up",
  component: SignUp
});

const DashboardRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/dashboard",
  component: Dashboard
});

const NotFoundRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "*",
  loader: () => {
    throw redirect({ to: "/sign-in", replace: true });
  }
});

const RootRoute = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: NotFoundComponent
});

// Export the route tree
export const routeTree = RootRoute.addChildren([
  IndexRoute,
  SignInRoute,
  SignUpRoute,
  DashboardRoute,
  NotFoundRoute
]);
