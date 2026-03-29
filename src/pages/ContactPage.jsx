
import Header from "../components/Header";
import Footer from "../components/Footer";
import { contactDetails } from "../data/siteData";
import { Link } from "react-router-dom";
import { useState } from "react";


function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
    budget: "",
    timeline: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add API call here if needed
  };

  return (
    <div className="page-wrap section-beige contact-page">
      <section className="contact-page__hero">
        <Header />
        <img
          src="https://k1047.com/wp-content/uploads/sites/49/2019/08/shutterstock_746715481.jpg"
          alt="Contact Portfolio"
          className="contact-page__hero-image"
        />
      </section>

      <section className="container contact-intro">
        <p>
          I’ve answered some of the most common questions here. If you need more details or have a specific requirement, feel free to get in touch. I’ll respond as soon as possible.
        </p>
        <p>
          Please review our <Link to="/faq">FAQ</Link> section to find answers to some frequently asked questions.
        </p>
        <p>{contactDetails.email}</p>
        <p>{contactDetails.phone}</p>
        <p>{contactDetails.cities}</p>
      </section>

      <section className="container contact-form-wrap">
        {submitted ? (
          <div className="contact-form__thankyou" style={{textAlign: 'center', fontSize: '1.2rem', color: '#181818', padding: '32px 0'}}>
            Thank you for contacting me!<br />I will get back to you soon.
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name*" required />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email*" type="email" required />
            <div className="contact-form__phone-row">
              <span className="contact-form__dial">+91</span>
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number*" required />
            </div>
            <input name="projectType" value={form.projectType} onChange={handleChange} placeholder="Project Type (e.g. Website, App, Branding)*" required />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project, goals, or any specific requirements.*" rows="3" required />
            <div className="contact-form__split-row">
              <input name="budget" value={form.budget} onChange={handleChange} placeholder="Estimated Budget (e.g. ₹50,000)" />
              <input name="timeline" value={form.timeline} onChange={handleChange} placeholder="Timeline (e.g. 2 months)" />
            </div>
            <button type="submit" className="btn btn--gold">
              Submit
            </button>
          </form>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default ContactPage;
