// src/routes.tsx
import { createRoute, createRootRoute, redirect, Outlet, Navigate } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';

const SignIn = lazy(() => import('../pages/auth/sign-in/SignIn'));
const SignUp = lazy(() => import('../pages/auth/sign-up/SignUp'));
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'));

const NotFoundComponent = () => <Navigate to="/sign-in" replace />;


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
  component: () => <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>,
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
