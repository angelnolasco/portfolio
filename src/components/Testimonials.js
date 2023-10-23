import React from 'react';
import "./Testimonials.css";


const Testimonials = () => {
  const testimonials = [
    {
      name: 'Josue Romero',
      company: 'nonprofit organizations',
      testimonial: " Angel's expertise shone through as he swiftly addressed and resolved multiple bugs on my website. His coding proficiency is truly impressive, and his solutions were both effective and efficient"
    },
    {
      name: ' Gillian Fitzgerald',
      company: 'general assembly student ',
      testimonial: "Collaborating with Angel on a Django web application was a valuable experience. He provided excellent support, actively listened, and offered valuable feedback throughout our teamwork."
    },
  ];

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <div className="testimonial" key={index}>
          <h2>{testimonial.name}</h2>
          <p>{testimonial.company}</p>
          <blockquote>{testimonial.testimonial}</blockquote>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
