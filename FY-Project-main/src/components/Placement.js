import React from 'react';
import { Link } from 'react-router-dom';
import { Progress } from '@nextui-org/react';
import './Course.css';
import WebDevImage from '../assets/undraw_web_developer_re_h7ie.svg';
import MLImage from '../assets/undraw_source_code_re_wd9m.svg';
import CloudImage from '../assets/undraw_cloud_hosting_7xb1.svg';
import './Placement.css';


const Course = () => {
  const Aptitude = [
    {
      id: 1,
      title: 'Aptitude For Placement',
      description: 'Aptitude is innate talent or potential in specific areas, such as cognitive abilities, creativity, or problem solving skills Its often revealed through performance or tests. Aptitude influences career choices and academic pursuits. Nurturing aptitude through practice and education can lead to mastery and success in various fields, shaping individuals paths and contributions to society.',
      progress: 50, // Example: Course completion progress (percentage)
    },
    {
      id: 2,
      title: 'TCS NQT Aptitude',
      description: 'TCS NQT stands for Tata Consultancy Services National Qualifier Test Its an exam conducted by TCS for recruiting fresh graduates from various disciplines for entry-level positions in the company The test assesses candidates aptitude coding skills and English proficiency Clearing the NQT is a prerequisite for further rounds in TCS recruitment',
      image: MLImage,
      progress: 75, // Example: Course completion progress (percentage)
    },
    
  ];
  const DSA = [
    {
      id: 1,
      title: 'DSA For Placement',
      description: 'DSA, or Data Structures and Algorithms, form the backbone of computer science and programming. They involve organizing and manipulating data efficiently to solve problems. Understanding DSA helps in writing efficient code, optimizing solutions, and tackling complex computational tasks. Mastery of DSA is crucial for software development, algorithm design, and competitive programming.',
      progress: 50, // Example: Course completion progress (percentage)
    },
    {
      id: 2,
      title: 'TCS NQT DSA',
      description: 'TCS NQT stands for Tata Consultancy Services National Qualifier Test Its an exam conducted by TCS for recruiting fresh graduates from various disciplines for entry-level positions in the company The test assesses candidates aptitude coding skills and English proficiency Clearing the NQT is a prerequisite for further rounds in TCS recruitment',
      progress: 75, // Example: Course completion progress (percentage)
    },
    
  ];
  const OOPS = [
    {
      id: 1,
      title: 'Object Oriented Programming For Placement',
      description: 'OOPS, or Object-Oriented Programming, is a programming paradigm centered around objects rather than actions. It emphasizes data encapsulation, inheritance, polymorphism, and abstraction. OOP promotes modular design, code reusability, and scalability, making it popular in software development. Languages like Java, C++, and Python heavily utilize OOP principles for building robust and flexible applications.',
      progress: 50, // Example: Course completion progress (percentage)
    },
    {
      id: 2,
      title: 'Object Oriented Programming',
      description: 'OOPS, or Object-Oriented Programming, is a programming paradigm centered around objects rather than actions. It emphasizes data encapsulation, inheritance, polymorphism, and abstraction. OOP promotes modular design, code reusability, and scalability, making it popular in software development. Languages like Java, C++, and Python heavily utilize OOP principles for building robust and flexible applications.',
      progress: 75, // Example: Course completion progress (percentage)
    },
    
  ];

  return (
    <div>
        <h1 className='mainheading'> Placement Material</h1>
    <div className="course-section">
    <p className='Aptitude'>Aptitude</p>
        <hr/>
      <div className="course-container">
        {Aptitude.map(course => (
            
          <div className="course-card" key={course.id}>
            <div className="course-details">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <Link to={`/course/${course.id}`} className="course-button">
                Let's Learn
              </Link>
              <Progress
                aria-label={`${course.title} Completion`}
                size="sm"
                value={course.progress}
                color="success"
                showValueLabel={true}
                className="progress-bar"
              />
            </div>
            
          </div>
        ))}
      </div>
      </div> 
      <div>
        <p className='Aptitude'>Data Structures and algorithms</p>
        <hr/>
    <div className="course-section">
      <div className="course-container">
        {DSA.map(course => (
            
          <div className="course-card" key={course.id}>
            <div className="course-details">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <Link to={`/course/${course.id}`} className="course-button">
                Let's Learn
              </Link>
              <Progress
                aria-label={`${course.title} Completion`}
                size="sm"
                value={course.progress}
                color="success"
                showValueLabel={true}
                className="progress-bar"
              />
            </div>
            
          </div>
        ))}
      </div>
      </div>  
    </div> 
    <div>
        <p className='Aptitude'>Object Oriented Programming</p>
        <hr/>
    <div className="course-section">
      <div className="course-container">
        {OOPS.map(course => (
            
          <div className="course-card" key={course.id}>
            <div className="course-details">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <Link to={`/course/${course.id}`} className="course-button">
                Let's Learn
              </Link>
              <Progress
                aria-label={`${course.title} Completion`}
                size="sm"
                value={course.progress}
                color="success"
                showValueLabel={true}
                className="progress-bar"
              />
            </div>
            
          </div>
        ))}
      </div>
      </div>  
    </div> 
    </div>
    
  );
};

export default Course;
