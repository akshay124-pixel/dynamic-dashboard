import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../App.css";

const SearchWidget = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const categories = useSelector((state) => state.dashboard.categories);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  const filteredWidgets = categories.flatMap((category) =>
    category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    )
  );

  return (
    <div className="search-widget-container">
      <div className="search-bar-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a widget"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button className="clear-button" onClick={() => setQuery("")}>
            ×
          </button>
        )}
      </div>
      <ul className="search-results">
        {filteredWidgets.length > 0 ? (
          filteredWidgets.map((widget) => (
            <li key={widget.id} className="search-result-item">
              {widget.name}
            </li>
          ))
        ) : (
          <li className="no-results">No widgets found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchWidget;
