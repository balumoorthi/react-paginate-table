import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Menu } from 'antd';

import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

// submenu keys of first level

const DSidebar = ({ options }) => {
  const { data, subMenuId, multiple } = options;

  const [openKeys, setOpenKeys] = useState([]);

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (subMenuId.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const menuConfig = multiple ? { onOpenChange, openKeys } : {};

  return (
    <Menu mode="inline" {...menuConfig}>
      {data.map(menu => {
        const { link, label, id, icon } = menu;

        return link ? (
          <Menu.Item key={id} id={id}>
            <Link to={link}>
              {icon && <i className={`ant-menu-item-icon ${icon}`} />}
              <span title={label}>{label}</span>
            </Link>
          </Menu.Item>
        ) : (
          <SubMenu title={label} key={id} id={id} icon={<i className={icon} />}>
            {menu.childrens &&
              menu.childrens.map(submenu => {
                const {
                  link: subLink,
                  label: subLabel,
                  id: subId,
                  icon: subIcon,
                } = submenu;
                return subLink ? (
                  <Menu.Item key={subId} id={subId}>
                    <Link to={subLink}>
                      {subIcon && (
                        <i className={`ant-menu-item-icon ${subIcon}`} />
                      )}
                      <span>{subLabel}</span>
                    </Link>
                  </Menu.Item>
                ) : (
                  <SubMenu
                    title={submenu.label}
                    key={subId}
                    id={subId}
                    icon={<i className={icon} />}
                  >
                    {submenu.childrens &&
                      submenu.childrens.map(submenu2 => {
                        const {
                          link: sub2Link,
                          label: sub2Label,
                          id: sub2Id,
                          icon: sub2Icon,
                        } = submenu2;
                        return (
                          <Menu.Item key={sub2Id} id={sub2Id}>
                            <Link to={sub2Link}>
                              {sub2Icon && (
                                <i
                                  className={`ant-menu-item-icon ${sub2Icon}`}
                                />
                              )}
                              <span>{sub2Label}</span>
                            </Link>
                          </Menu.Item>
                        );
                      })}
                  </SubMenu>
                );
              })}
          </SubMenu>
        );
      })}
    </Menu>
  );
};

export default DSidebar;

DSidebar.propTypes = {
  options: PropTypes.objectOf(PropTypes.any).isRequired,
};
