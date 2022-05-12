import React, { lazy } from 'react';

import { Navigate, useRoutes } from 'react-router-dom';

// -------- LAYOUTS AND COMPONENTS START --------

import DashboardLayout from 'layout/DashboardLayout';

import LoginLayout from 'layout/LoginLayout';

import Login from 'components/login/index';

import HomePage from 'components/home/index';

import ErrorPage from 'components/404/index';

import Dashboard from 'components/dashboard/index';

import DemoForm from 'components/demo/form';

// -------- LAYOUTS AND COMPONENTS END --------

// Demo components
import DLoadable from 'shared/core/lazy-loader';

import PrivateRoute from 'shared/core/auth-guard';

const Editor = DLoadable(lazy(() => import('components/editor')));

const Users = DLoadable(lazy(() => import('components/cms/users')));

const Projects = DLoadable(lazy(() => import('components/cms/projects')));

const Pages = DLoadable(lazy(() => import('components/cms/pages')));

const Menus = DLoadable(lazy(() => import('components/cms/menus')));

const MenuItems = DLoadable(lazy(() => import('components/cms/menuItems')));

const Accordion = DLoadable(lazy(() => import('components/cms/accordian')));

const Panel = DLoadable(lazy(() => import('components/cms/panel')));

const Slider = DLoadable(lazy(() => import('components/cms/slider')));

// Demo components

const Router = () =>
  useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        {
          path: '',
          element: (
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          ),
        },
        {
          path: 'home',
          element: (
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          ),
        },
        {
          path: 'editor',
          element: (
            <PrivateRoute>
              <Editor />
            </PrivateRoute>
          ),
        },
        {
          path: 'users',
          element: (
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          ),
        },
        {
          path: 'projects',
          element: (
            <PrivateRoute>
              <Projects />
            </PrivateRoute>
          ),
        },
        {
          path: 'pages',
          element: (
            <PrivateRoute>
              <Pages />
            </PrivateRoute>
          ),
        },
        {
          path: 'menus',
          element: (
            <PrivateRoute>
              <Menus />
            </PrivateRoute>
          ),
        },
        {
          path: 'menuItems',
          element: (
            <PrivateRoute>
              <MenuItems />
            </PrivateRoute>
          ),
        },
        {
          path: 'accordian',
          element: (
            <PrivateRoute>
              <Accordion />
            </PrivateRoute>
          ),
        },
        {
          path: 'panel',
          element: (
            <PrivateRoute>
              <Panel />
            </PrivateRoute>
          ),
        },
        {
          path: 'slider',
          element: (
            <PrivateRoute>
              <Slider />
            </PrivateRoute>
          ),
        },
        {
          path: 'form',
          element: (
            <PrivateRoute>
              <DemoForm />
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: '/',
      element: <LoginLayout />,
      children: [
        { path: 'login', element: <Login /> },
        {
          path: '404',
          element: (
            <ErrorPage gotoPage="/dashboard" btnText="Go To Dashboard" />
          ),
        },
        { path: '', element: <Navigate to="/Login" /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);

export default Router;
