import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget, toggleWidget } from '../redux/slice';

const Widget = ({ widget, categoryName }) => {
  const dispatch = useDispatch();

  const handleRemoveWidget = () => {
    dispatch(removeWidget({ categoryName, widgetName: widget.name }));
  };

  const handleToggleWidget = () => {
    dispatch(toggleWidget({ categoryName, widgetName: widget.name }));
  };

  return (
    <div 
      style={{ 
        border: '1px solid #ddd', 
        padding: '15px', 
        margin: '10px', 
        borderRadius: '8px',  // Rounded corners
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',  // Subtle shadow
        display: widget.visible ? 'block' : 'none',
        width: 'calc(50% - 40px)',  // Two widgets per row, with margins considered
        minHeight: '150px',  // Minimum height for consistency
        boxSizing: 'border-box',
        textAlign: 'center',  // Center align text and buttons
        backgroundColor: '#f9f9f9',  // Light background color
      }}
    >
      <h3>{widget.name}</h3>
      {widget.text ? (
        <p>{widget.text}</p>
      ) : (
        <div style={{ marginTop: '20px', color: '#888' }}>
          <p>No data available!</p>
        </div>
      )}
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={handleToggleWidget} 
          style={{ 
            padding: '8px 16px', 
            marginRight: '10px', 
            backgroundColor: widget.visible ? '#ff6961' : '#77dd77',
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}
        >
          {widget.visible ? 'Hide' : 'Show'}
        </button>
        <button 
          onClick={handleRemoveWidget} 
          style={{ 
            padding: '8px 16px', 
            backgroundColor: '#f39c12', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Widget;