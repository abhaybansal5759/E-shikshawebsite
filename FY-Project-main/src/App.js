import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Service';
import Navigation from './components/Navigation';
import Content from './components/Content'
import GlobalProvider from './GlobalProvider';
import Login from './components/Login';
import Signup from './components/Signup';
import Course from './components/Course';
import SingleCourse from './components/SingleCourse';
import Footer from './components/Footer';
import Mentors from './components/Mentors';
import MentorDetailPage from './components/MentorDetailPage';
import EligibilityCheck from './components/EligibleorNot';
import EnquiryForm from './components/EnquiryForm';
import Placement from './components/Placement';
import Engineering from './components/Engineering';

const 
App = () => {
  return (
    <Router>
      <GlobalProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/course" element={<Course />} />
          <Route path="/course/:id" element={<PrivateRoute><SingleCourse/></PrivateRoute>} />
          <Route path="/service" element={<Services />} />
          <Route path="/Content" element={<Content />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/signin" element={<Signup />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/mentordetail/:id" element={<MentorDetailPage />} /> 
          <Route path="/loan" element={<EligibilityCheck />} />
          <Route path="/course/Placement" element={<Placement/>} />
          <Route path="/course/Engineering" element={<Engineering/>} />
        </Routes>
        <Footer />
      </GlobalProvider>
    </Router>
  );
};

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const redirectURL = '/login';

  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to={redirectURL} />;
  }
}

export default App;
