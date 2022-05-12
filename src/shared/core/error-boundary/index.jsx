import React from 'react';

import PropTypes from 'prop-types';

// config
import config from '../../../assets/config';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      errorInfo: null,
      mailURL: config.basicMailURL + new Date(),
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  goToDashboard = () => {
    const { navigate, redirectURL } = this.props;
    this.setState({ error: null, errorInfo: null }, () => {
      navigate(redirectURL);
    });
  };

  render() {
    const { error, errorInfo, mailURL } = this.state;
    const { logo, children } = this.props;

    if (errorInfo) {
      return (
        <div className="error-boundary-section">
          <div className="img-section">
            <img src={logo} alt="heartfulness" />
          </div>
          <div className="content-section">
            <p>Oops! Something went wrong</p>
            <button
              type="button"
              label="Go To Home"
              className="goto-home-button p-mt-2 p-mr-3"
              onClick={this.goToDashboard}
            />
            <a className="issue" href={mailURL}>
              Report Issue
            </a>
          </div>
          <div className="development-issue">
            {!config.NODE_ENV || config.NODE_ENV === 'development' ? (
              <details style={{ whiteSpace: 'pre-wrap' }}>
                {error && error.toString()}
                <br />
                {errorInfo.componentStack}
              </details>
            ) : (
              ''
            )}
          </div>
        </div>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  navigate: PropTypes.func.isRequired,
  redirectURL: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.objectOf(PropTypes.any),
  ]).isRequired,
};

export default ErrorBoundary;
