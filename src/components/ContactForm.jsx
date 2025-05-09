import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setForm({ name: "", email: "", company: "", message: "", select: "" })
    alert("Thanks for contacting us! We'll get in touch shortly.");
  };


  return (
    <section className="container my-5 fade-in">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <input type="text" className="form-control" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <input type="email" className="form-control" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <input type="text" className="form-control" name="company" placeholder="Company" value={form.company} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <select className="form-select" name="type" value={form.select} onChange={handleChange} required>
            <option value="">Select License Type</option>
            <option value="personal">Personal</option>
            <option value="enterprise">Enterprise</option>
          </select>
        </div>
        <div className="col-12">
          <textarea className="form-control" name="message" placeholder="Your Message" rows="4" value={form.message} onChange={handleChange} required />
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary px-5">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;