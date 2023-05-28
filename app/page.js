import React from 'react';

const HomePage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img src='https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1600' style={{ width: '100%' }} />

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          fontSize: '150px',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
        }}
      >
        Welcome here, we are waiting for you to see our material
      </div>
    </div>
  );
};

export default HomePage;
