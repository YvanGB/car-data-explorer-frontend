import React from 'react';

const LoadingIndicator = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Chargement en cours...</span>
      </div>
    </div>
  );
};

export default LoadingIndicator;
