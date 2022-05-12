import React from 'react';

import PropTypes from 'prop-types';

import { Layout } from 'antd';

import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';

import DSidebar from './Sidebar';

import DTopbar from './Topbar';

const { Header, Sider, Content } = Layout;

const DBoard = ({ sidebarOptions, topbarOptions, actionBar }) => {

  const app = useSelector(state => state.app);

  return (
    <div className="d-layout">
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={!app.isSidebarOpen}
          collapsedWidth={app.isMobile ? 0 : 60}
          width={250}
        >
          <div className="logo" />
          <DSidebar options={sidebarOptions} />
        </Sider>
        <Layout className="site-layout">
          <Header>
            <DTopbar options={topbarOptions} actionBar={actionBar} />
          </Header>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

DBoard.propTypes = {
  sidebarOptions: PropTypes.objectOf(PropTypes.any).isRequired,
  topbarOptions: PropTypes.objectOf(PropTypes.any).isRequired,
  actionBar: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DBoard;
