import React from 'react';
import { useState } from 'react';

import './Content.css';


const studyMaterialsData = [
    {
      id: 1,
      title: 'Database Managenment',
      description: 'Learn the dbms',
      category: 'CS Fundamentals',
      downloadLink: 'https://drive.google.com/drive/shared-with-me',
    },
    {
      id: 2,
      title: 'Machine Learning',
      description: 'Foundational concepts in algebra',
      category: 'Mathematics',
      downloadLink: 'https://drive.google.com/drive/shared-with-me',
    },
    {
        id: 2,
        title: 'Artifical Intelligence',
        description: 'Foundational concepts in algebra',
        category: 'Mathematics',
        downloadLink: 'https://drive.google.com/drive/shared-with-me',
      },
      {
        id: 2,
        title: 'How to make Good tea',
        description: 'Foundational concepts in algebra',
        category: 'Mathematics',
        downloadLink: 'https://drive.google.com/drive/shared-with-me',
      },
      {
        id: 2,
        title: 'Coffee Basics',
        description: 'Foundational concepts in algebra',
        category: 'Mathematics',
        downloadLink: 'https://drive.google.com/drive/shared-with-me',
      },
      {
        id: 2,
        title: 'Different types of wines',
        description: 'Foundational concepts in algebra',
        category: 'Mathematics',
        downloadLink: 'https://drive.google.com/drive/shared-with-me',
      },
      
    // Add more study materials as needed
  ];
  
  function Content() {
    const [studyMaterials, setStudyMaterials] = useState(studyMaterialsData);
  
    return (
      <div className="App">
        <div className="study-materials">
          {studyMaterials.map(material => (
            <div key={material.id} className="material-card">
              <h2>{material.title}</h2>
              <p>{material.description}</p>
              <p>Category: {material.category}</p>
              <a href={material.downloadLink} target="_blank" rel="noopener noreferrer">Download</a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Content;