import React from 'react';

const Testimonials = () => (
  <section className="container my-5 fade-in">
    <h2 className="text-center">What Our Clients Say</h2>
    <div className="row mt-4 text-center">
      <div className="col-md-6">
        <blockquote className="blockquote">
          "Incredible experience. I sold old licenses in a day!"
          <footer className="blockquote-footer mt-2">Amit Sharma, CTO, DevCorp</footer>
        </blockquote>
      </div>
      <div className="col-md-6">
        <blockquote className="blockquote">
          "Very simple and quick process. Highly recommended!"
          <footer className="blockquote-footer mt-2">Priya Patel, Product Lead, SoftNova</footer>
        </blockquote>
      </div>
    </div>
  </section>
);

export default Testimonials;