import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [college, setCollege] = useState('');
  const [course, setCourse] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch countries
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data.map(country => country.name.common));
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          mobileNumber,
          email,
          password,
          college,
          course,
          country,
          state,
          city,
          pincode,
          address,
          dob
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User registered successfully:', data);
        toast.success('registererd');
      } else {
        console.error('Error registering user:', response.statusText);
        // Display an error message to the user
        toast.error('Failed to register. Please try again later.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      // Display an error message to the user
      toast.error('Failed to register. Please try again later.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Mobile Number:</label>
          <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="input-group">
          <label>College:</label>
          <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Course:</label>
          <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Country:</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">Select Country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label>State:</label>
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
        </div>
        <div className="input-group">
          <label>City:</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Pincode:</label>
          <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Date of Birth:</label>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        </div>
        <button type="submit">Sign up</button>
      </form>
      <p>
        Already signed up? <Link to="/login">Login here</Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Signup;
