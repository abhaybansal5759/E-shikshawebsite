import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, Image, Button, Slider } from '@nextui-org/react';
import { PhoneCall, MessageCircle as WhatsApp } from 'lucide-react';
import {Chip} from "@nextui-org/react";
import {CheckIcon} from "./CheckIcon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

function MentorDetailPage() {
  const { id } = useParams(); 
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(0); // Set default rating value to match the Slider's defaultValue

  useEffect(() => {
    axios.get(`http://localhost:5000/mentors/${id}`)
      .then(response => {
        setMentor(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching mentor details:', error);
        setError('Error fetching mentor details. Please try again later.');
        setLoading(false);
      });
  }, [id]); 

  const handleRateMentor = () => {
    axios.post(`http://localhost:5000/mentors/${id}/rating`, { rating })
      .then(response => {
        // Assuming the response contains the updated mentor data
        setMentor(response.data.mentor);
         toast.success("rating done");
      })
      .catch(error => {
        console.error('Error rating mentor:', error);
        // Handle error, show error message to the user, etc.
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleScheduleMeeting = () => {
    const googleCalendarLink = `https://calendar.google.com/calendar/u/0/r/eventedit?vcon=meet&dates=now&hl=en&pli=1`;
    window.open(googleCalendarLink, '_blank');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <Card key={mentor._id} isFooterBlurred radius="lg" className="border-none" style={{ maxWidth: '600px', width: '90%' }}>
        <div className="flex justify-center">
          <div className="relative">
            <Image
              alt={`Avatar for ${mentor.name}`}
              className="object-cover rounded-full"
              height={200}
              src={`https://i.pravatar.cc/150?u=${mentor._id}`}
              width={200}
            />
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-center font-bold text-xl mb-4">{mentor.name}</h2>
          <div className="mb-4">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Expertise:</h2>
              <h2>{mentor.expertise}</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Qualification:</h2>
              <h2>{mentor.qualification}</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">WhatsApp Number:</h2>
              <h2>{mentor.whatsappNumber}</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Email:</h2>
              <h2>{mentor.email}</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Company Name:</h2>
              <h2>{mentor.companyName}</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Total Doubt Solve Rating:</h2>
              <h2>{mentor.totalDoubtSolveRating}</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Status:</h2>
              <Chip
        startContent={<CheckIcon size={18} />}
        variant="faded"
        color="success"
      >
        {mentor.status}
      </Chip>
            </div>
          </div>
          <div className="flex justify-center">
            <h2 color="primary" font="heading" className="mr-2">Have Doubts? Solve them in a go!</h2>
            <a href={`https://wa.me/${mentor.whatsappNumber}`} className="text-green-500">
              <WhatsApp size={24} />
            </a>
            {mentor.status === 'Active' && (
              <Button variant="flat" color="primary" radius="lg" size="sm" onClick={handleScheduleMeeting} className="ml-2">
              Schedule Meeting
            </Button>
            )}
          </div>
        </div>
      </Card>
      <div className="flex justify-center mt-4">
        {/* Rating input */}
        <Slider 
          label="Rate this mentor"
          value={rating}
          onChange={setRating}
          showTooltip={true}
          step={1}
          maxValue={5} // Set the maximum value of the slider to 5
          minValue={0} // Set the minimum value of the slider to 0
          marks={[
            {
              value: 0,
              label: "0",
            },
            {
              value: 1,
              label: "1",
            },
            {
              value: 2,
              label: "2",
            },
            {
              value: 3,
              label: "3",
            },
            {
              value: 4,
              label: "4",
            },
            {
              value: 5,
              label: "5",
            },
          ]}
          className="max-w-md mt-4" // Add margin top to create space between the card and the slider
        />
        {/* Submit button */}
        <Button variant="flat" color="primary" radius="lg" size="sm" onClick={handleRateMentor}>
          Rate Mentor
        </Button>
      </div>
    </div>
  );
}

export default MentorDetailPage;
