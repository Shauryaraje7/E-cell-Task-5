// src/My Components/Footer.js
import React from 'react';
import Card from './card'; // Adjust path if necessary
import '../styles/footer.css'; // Adjust path if necessary


const Footer = () => {
  const teamMembers = [
    {
      image: `/assets/user-img.png`,



      name: 'John Doe',
      position: 'Team Leader',
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      instagram: 'https://instagram.com/johndoe',
    },
    {
      image: 'path/to/image2.jpg',
      name: 'Jane Smith',
      position: 'Developer',
      linkedin: 'https://linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
      instagram: 'https://instagram.com/janesmith',
    },
    {
      image: 'path/to/image2.jpg',
      name: 'Jane Smith',
      position: 'Developer',
      linkedin: 'https://linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
      instagram: 'https://instagram.com/janesmith',
    },
    {
      image: 'path/to/image2.jpg',
      name: 'Jane Smith',
      position: 'Developer',
      linkedin: 'https://linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
      instagram: 'https://instagram.com/janesmith',
    },
    {
      image: 'path/to/image2.jpg',
      name: 'Jane Smith',
      position: 'Developer',
      linkedin: 'https://linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
      instagram: 'https://instagram.com/janesmith',
    },
    {
      image: 'path/to/image2.jpg',
      name: 'Jane Smith',
      position: 'Developer',
      linkedin: 'https://linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
      instagram: 'https://instagram.com/janesmith',
    },
    {
      image: 'path/to/image2.jpg',
      name: 'Jane Smith',
      position: 'Developer',
      linkedin: 'https://linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
      instagram: 'https://instagram.com/janesmith',
    },
    // Add more team members as needed
  ];

  return (
    <div className="footer">
      <h2>Meet Our Team</h2>
      <div className="card-grid">
        {teamMembers.map((member, index) => (
          <Card 
            key={index}
            image={member.image}
            name={member.name}
            position={member.position}
            linkedin={member.linkedin}
            twitter={member.twitter}
            instagram={member.instagram}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
