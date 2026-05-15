// src/pages/Dashboard.jsx

import Navbar from "../components/Navbar";

function Dashboard() {
  const issues = [
    {
      title: "Broken Street Light",
      status: "In Progress",
      location: "Chennai",
    },
    {
      title: "Road Pothole",
      status: "Resolved",
      location: "Coimbatore",
    },
    {
      title: "Garbage Overflow",
      status: "Pending",
      location: "Erode",
    },
    {
      title: "Water Leakage",
      status: "Assigned",
      location: "Salem",
    },
  ];

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "70px 40px",
          background: "#f5f7fb",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontSize: "45px",
          }}
        >
          Citizen Dashboard
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >
          {issues.map((issue, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
              }}
            >
              <h2 style={{ marginBottom: "15px", color: "#2563eb" }}>
                {issue.title}
              </h2>

              <p style={{ marginBottom: "10px" }}>
                <strong>Status:</strong> {issue.status}
              </p>

              <p>
                <strong>Location:</strong> {issue.location}
              </p>
            </div>
          ))}
        </div>

        <section
          style={{
            marginTop: "70px",
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {[
            { number: "1200+", label: "Reports Submitted" },
            { number: "920+", label: "Issues Resolved" },
            { number: "85%", label: "Resolution Rate" },
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                background: "#0f172a",
                color: "white",
                padding: "35px",
                minWidth: "220px",
                borderRadius: "15px",
                textAlign: "center",
              }}
            >
              <h1 style={{ color: "#60a5fa" }}>{stat.number}</h1>
              <p>{stat.label}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default Dashboard;