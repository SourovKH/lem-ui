const Facilities = () => {
  const facilities = [
    { title: "Nutritious Food", desc: "Pure veg and non-veg meals served three times a day with high hygiene standards." },
    { title: "High-Speed WiFi", desc: "Reliable internet connectivity throughout the premises for your academic needs." },
    { title: "Laundry Service", desc: "Regular laundry and cleaning services to keep your focus on studies." },
    { title: "24/7 Security", desc: "CCTV surveillance and secure entry points for your peace of mind." },
    { title: "Power Backup", desc: "Uninterrupted power supply for late-night study sessions." },
    { title: "Clean Drinking Water", desc: "RO purified water available around the clock." }
  ];

  return (
    <div className="facilities-container">
      <header className="page-header">
        <h1 className="hero-title">Our Facilities</h1>
        <p className="hero-subtitle">We provide everything you need for a comfortable and productive student life.</p>
      </header>
      
      <div className="info-grid">
        {facilities.map((f, i) => (
          <div key={i} className="info-card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
