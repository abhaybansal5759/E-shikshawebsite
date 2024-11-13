import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import About from './About';

const Card = ({ imageUrl, title, description }) => (
  <div className="card">
    <img src={imageUrl} alt="Avatar" className="card-img" />
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <button className="card-button">Learn More</button>
    </div>
  </div>
);

const Home = () => {
  
  return (
    <div>
    <div className="container">
      <h1 className="title">Welcome to our eShiksha Website!</h1>
      <p className="description">Explore our courses and services to enhance your learning experience.</p>
      <button className="button">
        <Link to="/course" className="link">
          Start Learning
        </Link>
      </button>
      
     
</div>
<br/><br/>
<div className='AboutUs'>
<h1 className='heading'>About Us</h1>
<hr  className="about-us-hr" />
<About />
</div>
<div>
  <p className='services'>Our Services</p>
  <hr className='about-us-hr'/>
<div className="ag-format-container">
  <div className="ag-courses_box">
    <div className="ag-courses_item">
      <a href="https://www.techgig.com/webinar" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          Free Webinars
        </div>

        <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </a>
    </div>

    <div className="ag-courses_item">
      <a href="/service" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          Free Courses&#160;+ Free Mentorship
        </div>

        <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">
          </span>
        </div>
      </a>
    </div>

    <div className="ag-courses_item">
      <a href="/service" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
        Curated Scholarship Information
        </div>

        <div className="ag-courses-item_date-box">
          Start:
        </div>
      </a>
    </div>

    <div className="ag-courses_item">
      <a href="/service" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          Hand Written Notes
        </div>

        <div className="ag-courses-item_date-box">
          Click to Access
        </div>
      </a>
    </div>

    <div className="ag-courses_item">
      <a href="/service" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
         One to One Mentorship
        </div>

        <div className="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            30.11.2022
          </span>
        </div>
      </a>
    </div>

    <div className="ag-courses_item">
      <a href="/service" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          Solve Your Dooubts&#160;+ Career Guidance
        </div>
      </a>
    </div>


    </div>

  </div>
  <div>
  <h1 className='heading'>Importance of Mentorship</h1>
<hr  className="mentor-us-hr" />
<div className="About-section">
            <div className="About-container">
                <div className="About-text">
                    <p>   
Mentors are essential in our lives for their multifaceted roles: they provide invaluable guidance and advice drawn from their own 
experiences, offering perspectives that broaden our understanding and decision-making abilities; they offer unwavering support and 
encouragement, bolstering our confidence and resilience in the face of challenges; and they facilitate networking opportunities, 
connecting us with valuable contacts and resources that can propel our personal and professional growth. Ultimately, mentors serve as
 trusted allies on our journey, imparting wisdom, fostering development, and empowering us to reach our fullest potential
    
                    </p></div>
                <div className="About-image">
                    <img src="https://source.unsplash.com/400x300/?about-us"
                        alt="About Us" />
                </div>
            </div>
            <button className="know-more" ><a className='mentor_button' href='/Mentors'> Know More About Our Mentors  </a></button>

        </div>
  </div>
</div></div>
  )
};

export default Home;
