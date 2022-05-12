const DropdownStyle = {
  control: () => ({
    display: 'flex',
    border: '1px solid #ced4da',
    borderRadius: '5px',
  }),
  menu: provided => ({
    ...provided,
    zIndex: 2,
  }),
};

const DatatableConfig = {
  table: {
    lazy: false,

    header: {
      title: '',
      WrappeprClassNames: 'table-title',
    },

    layout: {
      wrapperClassNames: 'd-table-wrapper',
      sectionClassNames: 'd-table-section',
      loaderClassNames: 'd-table-overlay',
      gloablFilterWrapperClassName: 'global-filter',
      classNames: '',
    },

    options: {},

    columns: [],

    pageSize: {
      isVisible: true,
      classNames: 'page-size',
      labelText: 'Rows per page',
      size: [
        { label: '5', value: 5 },
        { label: '10', value: 10 },
        { label: '25', value: 25 },
        { label: '50', value: 50 },
      ],
      defaultSize: 5,
      dropdownStyle: DropdownStyle,
    },

    globalSearch: {
      isVisible: true,
      wrapperClassNames: 'global-search',
      labelClassNames: '',
      classNames: 'ant-input',
    },

    filter: {
      wrapperClassNames: 'filter-section',
      filterWrapperClassNames: 'filter',
      sortWrapperClassNames: 'sort',
      fieldClassNames: 'ant-input',
      sortUpIcon: 'icon-caret-up-fill',
      sortDownIcon: 'icon-caret-down-fill',
    },

    actions: {
      next:{
        type: 'next',
        classNames: 'next',
        icon: 'bi bi-arrow-right-square',
        isVisible: false,
        isDisable: false,
        onClick: () => {},
      },
      view: {
        type: 'view',
        classNames: 'view',
        icon: 'bi bi-eye-fill',
        isVisible: false,
        isDisable: false,
        onClick: () => {},
      },
      edit: {
        type: 'edit',
        classNames: 'edit',
        icon: 'bi bi-pencil',
        isVisible: true,
        isDisable: false,
        onClick: () => {},
      },
      remove: {
        type: 'remove',
        classNames: 'remove',
        icon: 'bi bi-trash',
        isVisible: true,
        isDisable: false,
        onClick: () => {},
      }
    },

    pagination: {
      isVisible: true,
      wrapperClassNames: 'pagination-wrapper',
      pageRangeDisplayed: 1,
      firstPageIcon: 'bi bi-chevron-double-right',
      firstPageClassNames: 'page-link first-page-link',
      lastPageIcon: `bi bi-chevron-double-left`,
      lastPageClassNames: 'page-link last-page-link',
      previousLabelIcon: `bi bi-chevron-left`,
      nextLabelIcon: `bi bi-chevron-right`,
      breakLabelText: `...`,
      breakLabelClassNames: `break-label`,
      pageLinkClassNames: 'nav-link',

      result: {
        isVisible: true,
        wrapperClassNames: 'result',
        firstLabel: {
          classNames: 'bold',
          labelText: 'Showing',
        },
        centerLabel: {
          classNames: 'bold',
        },
        lastLabel: {
          classNames: 'result',
          labelText: 'entries',
        },
      },

      gotoPage: {
        isVisible: true,
        wrapperClassNames: 'go-to-page',
        labelText: 'Go to page:',
        labelClassNames: 'label',
        inputClassNames: 'ant-input',
      },
    },

    selection: {
      isVisible: true,
      wrapperClassNames: 'selection-checkbox',
    },
  },

  service: {
    method: '',
    responseFormat: {
      data: 'data',
      total: '',
    },
  },

  toolbar: {
    isVisible: true,

    wrapperClassNames: 'toolbar-wrapper',

    bulkActionIsVisible: true,

    bulkActionWrapperClassNames: 'bulk-action-section',

    selectWrapperClassNames: 'select-section',

    selectLabelIsVisible: true,

    selectLabelText: 'Bulk Action:',

    selectOptions: {
      placeholder: 'select status',
      isClearable: true,
      options: [
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'In Active',
          value: 'in-active',
        },
      ],
    },

    btnWrapperClassNames: 'btn-section',

    actionBtn: {
      edit: {
        type: 'edit',
        isVisible: true,
        isDisable: false,
        text: 'Update',
        classNames: 'ant-btn ant-btn-primary',
        icon: '',
      },
      remove: {
        type: 'remove',
        isVisible: true,
        isDisable: false,
        text: 'Remove',
        classNames: 'ant-btn ant-btn-danger',
        icon: '',
      },
      view: {
        type: 'view',
        isVisible: true,
        isDisable: false,
        text: 'View',
        classNames: 'ant-btn ant-btn-primary',
        icon: '',
      },
      next: {
        type: 'next',
        isVisible: true,
        isDisable: false,
        text: 'Next',
        classNames: 'ant-btn ant-btn-primary',
        icon: '',
      },
    },

    addBtnIsVisible: true,

    addBtnWrapperClassNames: 'add-edit-section',

    addBtnClassNames: 'ant-btn ant-btn-primary',

    addBtnText: 'Add New',

    addBtnIcon: '',

    addBtnOnClick: () => {},
  },
};

const ToasterConfig = {
  position: 'top-right',
  autoClose: '3000',
  closeOnClick: true,
  pauseOnHover: true,
};

export { DropdownStyle, DatatableConfig, ToasterConfig };
