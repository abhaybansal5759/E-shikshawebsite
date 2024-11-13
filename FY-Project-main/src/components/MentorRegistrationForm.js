import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

import './Signup.css';

const MentorRegistrationForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [expertise, setExpertise] = useState('');
  const [qualification, setQualification] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [totalDoubtSolveRating, setTotalDoubtSolveRating] = useState(0);
  const [status, setStatus] = useState('Active');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/mentors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          expertise,
          qualification,
          whatsappNumber,
          email,
          companyName,
          totalDoubtSolveRating,
          status
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Mentor registered successfully:', data);
        toast.success('Mentor registered successfully');
        navigate('/');
      } else {
        console.error('Error registering mentor:', response.statusText);
        // Display an error message to the user
        toast.error('Failed to register mentor. Please try again later.');
      }
    } catch (error) {
      console.error('Error registering mentor:', error);
      // Display an error message to the user
      toast.error('Failed to register mentor. Please try again later.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Register as Mentor</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Expertise:</label>
          <input type="text" value={expertise} onChange={(e) => setExpertise(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Qualification:</label>
          <input type="text" value={qualification} onChange={(e) => setQualification(e.target.value)} />
        </div>
        <div className="input-group">
          <label>WhatsApp Number:</label>
          <input type="text" value={whatsappNumber} onChange={(e) => setWhatsappNumber(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Company Name:</label>
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </div>
        {/* You may add more input fields as needed */}
        <button type="submit">Register</button>
      </form>
      <p>
        Already registered? <Link to="/login">Login here</Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default MentorRegistrationForm;
