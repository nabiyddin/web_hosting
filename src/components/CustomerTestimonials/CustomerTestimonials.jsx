import "./CustomerTestimonials.css";

const CustomerTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jenny wilson",
      role: "Chief marketing officer",
      image: "../../../src/assets/images/jenny-wilson.png",
      quote:
        "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and faster and easier to work & increases our exposure.",
    },
    {
      id: 2,
      name: "Jacob jones",
      role: "Co-founder",
      image: "../../../src/assets/images/jacob-jones.png",
      quote:
        "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and faster and easier to work & increases our exposure.",
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">
          See what these Customers have to say
        </h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>
              <div className="testimonial-author">
                <h3 className="author-name">{testimonial.name}</h3>
                <p className="author-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-banner">
          <h3 className="cta-text">Stop worrying about hosting problems</h3>
          <button className="cta-button">Sign up now</button>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
