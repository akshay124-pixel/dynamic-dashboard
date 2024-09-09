// dashboardSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 101, name: "Widget 1", text: "This is widget 1 content" },
        { id: 102, name: "Widget 2", text: "This is widget 2 content" },
      ],
    },
    {
      id: 2,
      name: "Security Overview",
      widgets: [
        { id: 201, name: "Widget 3", text: "This is widget 3 content" },
      ],
    },
  ],
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      category.widgets.push(widget);
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      category.widgets = category.widgets.filter(
        (widget) => widget.id !== widgetId
      );
    },
  },
});

export const { addWidget, removeWidget } = dashboardSlice.actions;
export default dashboardSlice.reducer;
