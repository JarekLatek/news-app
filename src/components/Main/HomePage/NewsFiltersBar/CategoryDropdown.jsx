import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import "./CategoryDropdown.css";

const options = [
  { key: 1, text: "Ogólne", value: "general" },
  { key: 2, text: "Rozrywka", value: "entertainment" },
  { key: 3, text: "Biznes", value: "business" },
  { key: 4, text: "Zdrowie", value: "health" },
  { key: 5, text: "Nauka", value: "science" },
  { key: 6, text: "Sport", value: "sports" },
  { key: 7, text: "Technologia", value: "technology" }
];

const CategoryDropdown = ({ category, onCategoryChange }) => (
  <Menu compact>
    <Dropdown
      placeholder="Select category"
      options={options}
      selection
      onChange={(event, data) => onCategoryChange(data.value)}
    />
  </Menu>
);

export default CategoryDropdown;
