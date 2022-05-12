import React from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

const ErrorPage = ({ gotoPage, btnText }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Sorry, page not found!</h3>
      <p>
        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
        mistyped the URL? Be sure to check your spelling.
      </p>
      <button
        type="button"
        onClick={() => {
          navigate(gotoPage);
        }}
      >
        {btnText}
      </button>
    </div>
  );
};

ErrorPage.propTypes = {
  gotoPage: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default ErrorPage;
