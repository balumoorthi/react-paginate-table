import React, { useState, useMemo, useCallback, useRef } from 'react';

// import PropTypes from 'prop-types';

import DTable from 'shared/core/datatable/index';

import DModal from 'shared/antd/modal';

import modalPopup from 'shared/utils/modal';

import { confirmRemove, addItem, updateItem } from 'shared/utils/response';

import { addProject, removeProject, updateProject } from 'services/cms/projects';

import ProjectForm from '../form';

import ProjectTableSchema from './schema';

const ProjectListing = () => {
  const [isEdit, setIsEdit] = useState(false);

  const [projectFormInitValue, setProjectFormInitValue] = useState({});

  const projectTableRef = useRef();

  const openAddProjectModal = useCallback(() => {
    setIsEdit(false);
    setProjectFormInitValue({});
    modalPopup.custom({ title: 'Add Project', visible: true });
  }, []);

  const openEditProjectModal = useCallback(({ project_name, description, project_id, status }) => {
    setIsEdit(true);
    setProjectFormInitValue({ project_name, description, project_id, status: status === "Active" ? 1 : 0 });
    modalPopup.custom({ title: 'Edit Project', visible: true });
  }, []);

  const createProject = useCallback(data => {
    addItem({
      method: addProject,
      payload: data,
      tableRef: projectTableRef.current.reloadDTable,
      toaster: {
        success: 'Project added successfully',
        error: 'Project not added',
      },
    });
  }, []);

  const modifyProject = useCallback((data) => {
    const project_id = projectFormInitValue?.project_id;
    updateItem({
      method: updateProject,
      payload: data,
      projId: project_id,
      tableRef: projectTableRef.current.reloadDTable,
      toaster: {
        success: 'Project updated successfully',
        error: 'Project not updated',
      },
    });
  }, [projectFormInitValue]);

  const deleteProject = useCallback((id) => {
    confirmRemove(removeProject, id, projectTableRef.current.reloadDTable, {
      confirmOptions: {
        title: 'Confirmation',
        content: 'Are you sure you want to remove this Project?',
      },
      toasterOptions: {
        success: 'Project removed successfully',
        error: 'Project not removed',
      },
    });
  }, []);

  const projectTable = useMemo(() => {
    ProjectTableSchema.toolbar.addBtnOnClick = openAddProjectModal;

    ProjectTableSchema.table.actions.edit.onClick = openEditProjectModal;

    ProjectTableSchema.table.actions.remove.onClick = deleteProject;

    ProjectTableSchema.service.params = {
      'filters[user][id][$eq]': 8,
    };

    return ProjectTableSchema;
  });

  return (
    <>
      <DTable tableConfig={projectTable} ref={projectTableRef} />
      <DModal options={{ formName: 'projectForm' }}>
        <ProjectForm
          isEdit={isEdit}
          initValue={projectFormInitValue}
          onSubmit={isEdit ? modifyProject : createProject}
        />
      </DModal>
    </>
  );
};

// ProjectListing.propTypes = {};

export default ProjectListing;
