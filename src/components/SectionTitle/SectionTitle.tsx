import React from 'react'
import './SectionTitle.css';

const SectionTitle = ({ title, path }: { title: string, path: string }) => {
    return (
        <div id={path.toLowerCase()} className="title-container">
            <h1 className="title">{title}</h1>
        </div>
    );
};

export default SectionTitle;
