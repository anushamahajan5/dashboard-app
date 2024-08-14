import React, { useState } from 'react';
import '../App.css';

const WidgetFormModal = ({ categories, onClose, onSave }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleSave = () => {
    if (widgetName && widgetText && (selectedCategory || newCategoryName)) {
      onSave({
        categoryName: selectedCategory || newCategoryName,
        widget: { name: widgetName, text: widgetText }
      });
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Widget</h2>

        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Widget Text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Or New Category Name"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />

        <div className="modal-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default WidgetFormModal;

