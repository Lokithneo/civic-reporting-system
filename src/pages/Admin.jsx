// src/pages/Admin.jsx

import Navbar from "../components/Navbar";

function Admin() {
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
          Municipal Admin Portal
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          {[
            {
              title: "Total Complaints",
              value: "15,240",
            },
            {
              title: "Pending Issues",
              value: "1,540",
            },
            {
              title: "Resolved Cases",
              value: "13,700",
            },
            {
              title: "Departments Active",
              value: "120",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "35px",
                borderRadius: "15px",
                boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <h2 style={{ color: "#2563eb" }}>{item.value}</h2>

              <p style={{ marginTop: "10px", fontSize: "18px" }}>
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <section
          style={{
            marginTop: "70px",
            background: "white",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ marginBottom: "25px" }}>
            Administrative Capabilities
          </h2>

          <ul style={{ lineHeight: "2", fontSize: "18px" }}>
            <li>Filter complaints by category, priority, and location</li>

            <li>Assign tasks to field officers and departments</li>

            <li>Monitor complaint resolution progress in real-time</li>

            <li>Generate analytics and performance reports</li>

            <li>Track departmental response times</li>

            <li>Manage citizen communications and notifications</li>

            <li>Support scalable cloud-based civic operations</li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Admin;