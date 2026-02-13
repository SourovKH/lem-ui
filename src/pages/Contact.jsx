const Contact = () => {
  return (
    <div className="contact-container">
      <header className="page-header">
        <h1 className="hero-title">Contact Us</h1>
        <p className="hero-subtitle">Reach out for inquiries or to visit the premises.</p>
      </header>

      <div className="info-grid">
        <div className="info-card">
          <h3>Contact Details</h3>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Alternative:</strong> +91 87654 32109</p>
          <p><strong>Email:</strong> contact@lempg.com</p>
        </div>

        <div className="info-card">
          <h3>Our Address</h3>
          <div className="address-box">
            <p><strong>LEM - Lokenath Engineering Mess</strong></p>
            <p>123 Student Avenue, Near Engineering College,</p>
            <p>Salt Lake, Sector V,</p>
            <p>Kolkata, West Bengal - 700091</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
