import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Menu } from 'antd';

import Topbar from 'components/topbar/';

import Footer from 'components/Footer'

import DBoard from 'shared/antd/dashboard/';

import { sidebarMenu, subMenuIds, adminSidebarMenu } from 'assets/data/sidebar';

const DashboardLayout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/login');
    window.location.reload();
  };

  const infoMenu = (
    <Menu>
      <Menu.Item
        aria-hidden
        onClick={logout}
      >
        <i className="bi bi-box-arrow-right" style={{ marginRight: "5px" }} />
        <span>Logout</span>
      </Menu.Item>
    </Menu>
  );

  const getRoleBasesSideMenu = (role) => {
    switch (role) {
      case "Admin":
        return adminSidebarMenu;
      default:
        return sidebarMenu;
    }
  }

  return (
    <>
      <DBoard
        sidebarOptions={{
          data: getRoleBasesSideMenu(localStorage.getItem('role')),
          subMenuId: subMenuIds,
          multiple: true,
        }}
        actionBar={<Topbar />}
        topbarOptions={{
          menu: infoMenu,
        }}
      />
      <Footer />
    </>
  );
};

export default DashboardLayout;
