import React from 'react';
import "./Testimonials.css";


const Testimonials = () => {
  const testimonials = [
    {
      // name: 'John Doe',
      // company: 'ABC Company',
      // testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat tristique volutpat.'
    },
    {
      // name: 'Jane Smith',
      // company: 'XYZ Corporation',
      // testimonial: 'Nulla vitae nisl id quam vulputate cursus. Sed non purus rutrum, ullamcorper tortor ac, aliquet ipsum.'
    },
  ];

  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title"></h1>
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

// export default Testimonials;
