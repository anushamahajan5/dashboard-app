import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Category from "./Category";
import WidgetFormModal from "./WidgetFormModal";
import { addWidget, addCategory } from "../redux/slice";
import { FaSync, FaClock } from "react-icons/fa";

const Dashboard = () => {
  const categories = useSelector((state) => state.dashboard.categories);
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter categories based on search query and visibility
  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter(
      (widget) =>
        widget.visible &&
        (widget.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          widget.text.toLowerCase().includes(searchQuery.toLowerCase()))
    ),
  }));

  const handleAddWidget = (widgetData) => {
    if (widgetData.categoryName) {
      // Dispatch to add category if it doesn't exist
      if (
        !categories.some(
          (category) => category.name === widgetData.categoryName
        )
      ) {
        dispatch(addCategory({ name: widgetData.categoryName }));
      }
      dispatch(addWidget(widgetData));
    }
  };

  return (
    <div>
      <h1>CNAPP Dashboard</h1>

      {/* Search Bar */}
      <div
        style={{
          margin: "10px 0",
          padding: "10px",
          borderLeft: "2px solid #ccc",
          borderRight: "2px solid #ccc",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search Widgets"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            border: "none",
            outline: "none",
          }}
        />
      </div>

      {/* Buttons Container */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom: "10px",
          borderLeft: "2px solid #ccc",
          borderRight: "2px solid #ccc",
          padding: "0 10px",
        }}
      >
        <button
          onClick={() => window.location.reload()}
          style={{
            marginRight: "10px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ddd",
            borderRadius: "4px",
            padding: "5px 10px",
            cursor: "pointer",
            color: "#000",
          }}
        >
          <FaSync />
        </button>
        <button
          style={{
            marginRight: "10px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ddd",
            borderRadius: "4px",
            padding: "5px 10px",
            cursor: "pointer",
            color: "#000",
          }}
        >
          <FaClock /> 2 days
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            backgroundColor: "#f0f0f0",
            border: "1px solid #ddd",
            borderRadius: "4px",
            padding: "5px 10px",
            cursor: "pointer",
            color: "#000",
          }}
        >
          Add Widget
        </button>
      </div>

      {/* Display Categories and Widgets */}
      {filteredCategories.map((category) => (
        <Category key={category.name} category={category} />
      ))}

      {/* Widget Form Modal */}
      {isModalOpen && (
        <WidgetFormModal
          categories={categories}
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddWidget}
        />
      )}
    </div>
  );
};

export default Dashboard;
