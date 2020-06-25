import React from 'react';
import "./NewsFiltersBar.css";
import CategoryDropdown from './CategoryDropdown';
import { Input } from 'semantic-ui-react';

const NewsFiltersBar = (props) => (
  <div className="NewsFiltersBar">
    <div>
      <Input
        icon="search"
        placeholder = "Search..."
        onChange = { e => e.target.value.length > 2 ? props.onSearchQueryChange(e.target.value) : props.onSearchQueryChange(null)} />
    </div>
    <div className="CategoryDropdown">
      <CategoryDropdown 
        onCategoryChange={props.onCategoryChange}
        category={props.category} />
    </div>
  </div>
);

export default NewsFiltersBar;