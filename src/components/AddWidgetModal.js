import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../dashboardSlice";

const AddWidgetModal = ({ categoryId, onClose }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      text: widgetText,
    };
    dispatch(addWidget({ categoryId, widget: newWidget }));
    onClose(); // Close the modal after adding the widget
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
        <textarea
          placeholder="Widget Text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
        />
        <button onClick={handleSubmit}>Add Widget</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddWidgetModal;
