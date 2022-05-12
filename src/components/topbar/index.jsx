import React, { useEffect, useState } from 'react';

import Select from 'react-select';

import appDetails from 'shared/utils/app';

const Topbar = () => {
  const [adminProjectOptions, setAdminProjectOptions] = useState();
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [defaultProject, setDefaultProject] = useState();

  const projectOptions = adminProjectOptions;

  const selectedProject = defaultProject;

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

  const setProjectName = (ev) => {
    const project_id = ev.value
    localStorage.setItem("project_id", `${project_id}`);
    localStorage.setItem("ev", `${JSON.stringify(ev)}`);
    appDetails.project(ev);
    reload();
  };

  useEffect(() => {
    if (selectedProject === null && !localStorage.getItem('project_id')) {
      localStorage.setItem("project_id", `${adminProjectOptions?.[0]?.value}`);
      reload();
    }
  })

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === "Super Admin") {
      setIsSuperAdmin(true);
    }
    else if (role === "Admin") {
      setIsSuperAdmin(false);
    }
  }, [])

  useEffect(() => {
    if (!isSuperAdmin) {
      const options = JSON.parse(localStorage.getItem('AdminProject'))?.map((option) => {
        return {
          label: option?.project_name,
          value: option?.project_id,
        }
      }
      )
      setAdminProjectOptions(options);
    }
  }, [])

  useEffect(() => {
    if (!isSuperAdmin) {
      const dropdownSelectedProject = JSON.parse(localStorage.getItem('ev'))
      setDefaultProject(dropdownSelectedProject);
    }
  }, [])

  return (
    <div>
      {!isSuperAdmin &&
        projectOptions?.length > 1 &&
        <div className="project-select-wrapper">
          <span>Select Project : </span>
          <div className="project-select">
            <Select
              defaultValue={selectedProject || adminProjectOptions?.[0]}
              styles={customStyles}
              options={adminProjectOptions}
              onChange={setProjectName}
            />
          </div>
        </div>
      }
    </div>
  );
};

Topbar.propTypes = {};

export default Topbar;
