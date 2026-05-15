// src/pages/Home.jsx

import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <section
        style={{
          background: "linear-gradient(to right,#2563eb,#0f172a)",
          color: "white",
          padding: "100px 40px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "55px", marginBottom: "20px" }}>
          Crowdsourced Civic Issue Reporting & Resolution System
        </h1>

        <p
          style={{
            maxWidth: "900px",
            margin: "auto",
            fontSize: "20px",
            lineHeight: "1.8",
          }}
        >
          Smart governance platform enabling citizens to report civic
          problems with live tracking, automated routing, and transparent
          issue resolution.
        </p>
      </section>

      <section style={{ padding: "80px 60px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "40px",
          }}
        >
          Platform Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >
          {[
            "Real-time issue reporting",
            "Photo & video upload support",
            "Automated department routing",
            "Live complaint tracking",
            "Admin management portal",
            "Analytics & reporting dashboard",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "#f5f7fb",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          background: "#0f172a",
          color: "white",
          padding: "80px 60px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontSize: "40px",
          }}
        >
          System Workflow
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          {[
            "Citizen reports an issue",
            "System categorizes complaint",
            "Issue routed to department",
            "Authorities update progress",
            "Citizen receives notifications",
            "Issue resolved successfully",
          ].map((step, index) => (
            <div
              key={index}
              style={{
                background: "#1e293b",
                padding: "30px",
                borderRadius: "15px",
              }}
            >
              <h2 style={{ color: "#60a5fa" }}>0{index + 1}</h2>

              <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer
        style={{
          background: "#111827",
          color: "white",
          textAlign: "center",
          padding: "30px",
        }}
      >
        <h3>CivicConnect Smart Governance Platform</h3>

        <p style={{ marginTop: "10px" }}>
          Improving civic engagement and municipal transparency through
          technology.
        </p>
      </footer>
    </>
  );
}

export default Home;