import React from 'react';
import { Link } from 'react-router-dom';
import { Progress } from '@nextui-org/react';
import './Course.css';
import WebDevImage from '../assets/undraw_web_developer_re_h7ie.svg';
import MLImage from '../assets/undraw_source_code_re_wd9m.svg';
import CloudImage from '../assets/undraw_cloud_hosting_7xb1.svg';
import ExcelImage from '../assets/excel.svg.svg';

const Course = () => {
  const courses = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Learn to build websites and web applications. From front-end technologies like HTML, CSS, and JavaScript to back-end frameworks like Node.js and Django, this course covers the full stack of web development.',
      image: WebDevImage,
      progress: 50, // Example: Course completion progress (percentage)
    },
    {
      id: 2,
      title: 'Machine Learning',
      description: 'Explore the concepts and algorithms of machine learning. Dive into supervised and unsupervised learning, neural networks, and deep learning techniques. Gain hands-on experience through real-world projects.',
      image: MLImage,
      progress: 75, // Example: Course completion progress (percentage)
    },
    {
      id: 3,
      title: 'Cloud Computing',
      description: 'Discover cloud computing and its services. Learn about popular cloud platforms like AWS, Azure, and Google Cloud. Explore cloud architecture, virtualization, and containerization technologies.',
      image: CloudImage,
      progress: 30, // Example: Course completion progress (percentage)
    },
    {
      id: 4,
      title: 'Introduction to Microsoft Excel (Coursera)',
      description: 'Learn essential skills for working with spreadsheets using Microsoft Excel. This course covers basic to advanced functions, data analysis, visualization, and more.',
      image: ExcelImage,
      progress: 20, // Example: Course completion progress (percentage)
    },
  ];

  return (
    <div className="course-section">
      <div className="course-container">
        {courses.map(course => (
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
  );
};

export default Course;
