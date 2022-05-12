import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import dropdownOptions from 'shared/utils/dropdowns';

import { usersProject } from 'services/cms/projects';

// components
import ErrorBoundary from 'shared/core/error-boundary';

import OptionsTool from 'shared/antd/options-tool';

// images
import logo from 'assets/images/react-logo.png';

// routes
import Router from './routes';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    dropdownOptions.setOptions({
      method: usersProject,
      // params: { 'filters[user][id][$eq]': 8 },
      label: 'project_name',
      value: 'project_id'
    });
  }, []);

  return (
    <ErrorBoundary redirectURL="" navigate={navigate} logo={logo}>
      <main className="hfn">
        <Router />
      </main>
      <OptionsTool />
      <ToastContainer />
    </ErrorBoundary>
  );
};

export default App;
