import React, { useEffect, useState } from 'react';

import Select from 'react-select';

import { getMenu } from 'services/cms/menu';

const MenuSelect = () => {
  const [adminMenuItems, setAdminMenuItems] = useState();

  const customStyles = {
    container: provided => ({
      ...provided,
      width: '100%',
    }),
    singleValue: provided => ({
      ...provided,
      overflow: 'initial',
    }),
    option: provided => ({
      ...provided,
      padding: '15px',
    }),
  };

  const reload = () => {
    window.location.reload();
  }

  const setMenuItemName = (ev) => {
    const menu_id = ev.value
    localStorage.setItem("menu_id", `${menu_id}`);
    localStorage.setItem("menu-ev", `${JSON.stringify(ev)}`);
    reload();
  };

  useEffect(() => {
    getMenu().then(res => {
      const menuItems = res?.data?.data.map((option) => {
        return {
          label: option?.title,
          value: option?.menu_id,
        }
      }
      )
      setAdminMenuItems(menuItems);
    });
  }, [])


  return (
    <div>
      <div className="project-select-wrapper">
        <span>Select Menu : </span>
        <div className="project-select">
          <Select
            defaultValue={JSON.parse(localStorage.getItem('menu-ev'))}
            styles={customStyles}
            options={adminMenuItems}
            onChange={setMenuItemName}
          />
        </div>
      </div>
    </div>
  );
};

MenuSelect.propTypes = {};

export default MenuSelect;
