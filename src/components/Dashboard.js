import React, { useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { removeWidget } from "../dashboardSlice";
import SearchWidget from "./SearchWidget";
import AddWidgetModal from "./AddWidgetModal";

const Dashboard = () => {
  const [modalCategoryId, setModalCategoryId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categories = useSelector((state) => state.dashboard.categories);
  const dispatch = useDispatch();

  const handleAddWidgetClick = (categoryId) => {
    setModalCategoryId(categoryId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalCategoryId(null);
  };

  return (
    <div>
      <SearchWidget />
      {categories.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <div>
            {category.widgets.map((widget) => (
              <div key={widget.id}>
                <p>{widget.name}</p>
                <p>{widget.text}</p>
                <button
                  onClick={() =>
                    dispatch(
                      removeWidget({
                        categoryId: category.id,
                        widgetId: widget.id,
                      })
                    )
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button onClick={() => handleAddWidgetClick(category.id)}>
            + Add Widget
          </button>
        </div>
      ))}

      {isModalOpen && modalCategoryId && (
        <AddWidgetModal categoryId={modalCategoryId} onClose={closeModal} />
      )}
    </div>
  );
};

export default Dashboard;
