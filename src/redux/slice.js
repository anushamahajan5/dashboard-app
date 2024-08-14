import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  categories: []
};

// Create the slice
export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push({ ...action.payload, widgets: [] });
    },
    addWidget: (state, action) => {
      const { categoryName, widget } = action.payload;
      const category = state.categories.find(cat => cat.name === categoryName);
      if (category) {
        category.widgets.push({ ...widget, visible: true });
      }
    },
    removeWidget: (state, action) => {
      const { categoryName, widgetName } = action.payload;
      const category = state.categories.find(cat => cat.name === categoryName);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.name !== widgetName);
      }
    },
    toggleWidget: (state, action) => {
      const { categoryName, widgetName } = action.payload;
      const category = state.categories.find(cat => cat.name === categoryName);
      if (category) {
        const widget = category.widgets.find(widget => widget.name === widgetName);
        if (widget) {
          widget.visible = !widget.visible;
        }
      }
    },
  },
});

// Export the actions and reducer
export const { addCategory, addWidget, removeWidget, toggleWidget } = dashboardSlice.actions;
export default dashboardSlice.reducer;