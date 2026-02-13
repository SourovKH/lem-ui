import { Link } from 'react-router-dom';

const LandingPage = () => {
  const highlights = [
    { icon: "🚶", label: "5 mins to station" },
  ];

  return (
    <section className="hero-section" style={{ paddingTop: '2rem' }}>
      <h1 className="hero-title">A Home Away from Home for Students</h1>
      <p className="hero-subtitle">
        Focus on your studies while we take care of your living. Lokenath Engineering Mess (LEM) provides premium accommodation with all essential student facilities.
      </p>
      
      <div className="highlights-bar">
        {highlights.map((h, i) => (
          <div key={i} className="highlight-item">
            <span className="highlight-icon">{h.icon}</span>
            <span className="highlight-label">{h.label}</span>
          </div>
        ))}
      </div>

      <div className="cta-group" style={{ marginTop: '3rem' }}>
        <Link to="/facilities">
          <button className="btn-primary" style={{ padding: '1rem 3rem' }}>View Facilities</button>
        </Link>
        <Link to="/contact">
          <button className="btn-secondary" style={{ padding: '1rem 3rem' }}>Get Directions</button>
        </Link>
      </div>
    </section>
  );
};

export default LandingPage;
