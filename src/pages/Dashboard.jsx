const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="hero-title">Private Dashboard</h1>
      <p className="hero-subtitle">
        Welcome to the management portal. Here you can manage PG residents, accounts, and advertisements.
      </p>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Manage Residents</h3>
          <p>View and edit resident details.</p>
        </div>
        <div className="dashboard-card">
          <h3>Applications</h3>
          <p>Check new PG applications.</p>
        </div>
        <div className="dashboard-card">
          <h3>Billing</h3>
          <p>Track payments and invoices.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
