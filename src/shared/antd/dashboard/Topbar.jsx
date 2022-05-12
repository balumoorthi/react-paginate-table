import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { Dropdown } from 'antd';

import { useSelector, useDispatch } from 'react-redux';

import { openSidebar } from 'shared/store/reducers/app';

const DTopbar = ({ options, actionBar }) => {
  const { menu } = options;

  const [loggedInUser, setLoggedInUser] = useState('');

  const app = useSelector(state => state.app);

  const { isSidebarOpen } = app;

  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(openSidebar(!isSidebarOpen));
  };

  useEffect(() => {
    const role = localStorage.getItem('role');
    setLoggedInUser(role);
  }, [])

  return (
    <div className="topbar">
      <div className="sidebar-toggler">
        <span
          role="button"
          className="toogle-sidebar"
          onClick={toggleSidebar}
          onKeyDown={toggleSidebar}
          tabIndex={0}
        >
          <i className="bi bi-text-indent-right" />
        </span>
      </div>
      <div className="action-bar-section"
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div style={{ paddingRight: '1em' }}>{actionBar}</div>
      </div>
      <div className="sign-in-section">
        <div className="user-info">
          <div className="img-wrapper">
            <i className="bi bi-person-circle" style={{ marginRight: "5px" }} />
          </div>
          <Dropdown overlay={menu} placement="bottomLeft" arrow>
            <div className="info">
              <span className="role">{loggedInUser}</span>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

DTopbar.propTypes = {
  options: PropTypes.objectOf(PropTypes.any).isRequired,
  actionBar: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DTopbar;
