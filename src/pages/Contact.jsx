import React, { useState } from 'react';
import '../styles/Contact.css';
import axios from 'axios'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    try{
      let response= await axios.post('https://mailer-beryl-gamma.vercel.app/email-api/send-email',{data:formData})
      console.log(response.data)
    }catch(err){
      console.log("Error sending mail",err);
    }finally{
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setSubmitted(true);
    console.log("finallly")
    }
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact">
      <div className="contact-hero">
        <h1>Get In Touch</h1>
        <p>Have a project in mind? We'd love to hear from you</p>
      </div>

      <div className="contact-container">
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            {submitted && <div className="success-message">✓ Thank you! We'll get back to you soon.</div>}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="mechanical">Mechanical Design</option>
                  <option value="software">Software & IT Solutions</option>
                  <option value="interior">Layout Design</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <h2>Contact Information</h2>
            
            <div className="info-card">
              <h3>📧 Email</h3>
              <a href="mailto:tektontechsolutions@gmail.com">tektontechsolutions@gmail.com</a>
              {/* <a href="mailto:projects@tektontech.com">projects@tektontech.com</a> */}
            </div>

            <div className="info-card">
              <h3>📱 Phone</h3>
              <a href="tel:+919696573095">+91 96965 73095</a>
              {/* <a href="tel:+919876543211">+91 98765 43211</a> */}
            </div>

            <div className="info-card">
              <h3>💬 Quick Connect</h3>
              <a href="https://wa.me/919696573095" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                💬 Chat on WhatsApp
              </a>
            </div>

            <div className="info-card">
              <h3>📍 Office Location</h3>
              <p>TektonTech Solutions<br />
                 Crossing Republic Ghaziabad<br />
                 India
              </p>
            </div>

            <div className="info-card">
              <h3>🕐 Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                 Saturday: 10:00 AM - 4:00 PM IST<br />
                 Sunday: Closed
              </p>
            </div>

            <div className="social-section">
              <h3>Follow Us</h3>
              <div className="social-links-contact">
                {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> */}
                {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> */}
                <a href="https://www.linkedin.com/in/tektontech-solution-2637453a8/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.instagram.com/tektontechsolutions_/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section - Optional */}
        {/* <div className="map-section">
          <h2>Find Us on Map</h2>
          <div className="map-placeholder">
            <p>📍 Google Map Integration Coming Soon</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Contact;
