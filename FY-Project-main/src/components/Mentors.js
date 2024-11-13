import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Image, Button } from '@nextui-org/react';

function Mentors() {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/mentors')
      .then(response => {
        setMentors(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching mentors:', error);
        setError('Error fetching mentors. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Mentors</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {mentors.map(mentor => (
          <Card key={mentor._id} isFooterBlurred radius="lg" className="border-none">
            <div className="relative">
              <Image
                alt={`Avatar for ${mentor.name}`}
                className="object-cover"
                height={200}
                src={`https://i.pravatar.cc/150?u=${mentor._id}&male=true`}

                width={200}
              />
            </div>
            <div className="p-4">
              <p className="text-center font-bold mb-2">{mentor.name}</p>
              <div className="flex justify-center">
                <Link to={`/mentordetail/${mentor._id}`}>
                  <Button variant="flat" color="default" radius="lg" size="sm">
                    View Profile
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Mentors;
