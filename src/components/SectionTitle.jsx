import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div id={title.toLowerCase()} className="title-container">
      <h1 className="title">{title}</h1>
      <span className="title-bar"></span>
    </div>
  );
};

export default SectionTitle;
