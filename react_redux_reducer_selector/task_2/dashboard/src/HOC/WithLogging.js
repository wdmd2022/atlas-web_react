import React from 'react';

const WithLogging = (WrappedComponent) => {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  return class extends React.Component {
    static displayName = `WithLogging(${displayName})`;
    componentDidMount() {
      console.log(`Component ${displayName} is mounted`);
    }
    componentWillUnmount() {
      console.log(`Component ${displayName} is going to unmount`);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default WithLogging;
