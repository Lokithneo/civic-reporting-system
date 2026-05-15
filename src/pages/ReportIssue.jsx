// src/pages/ReportIssue.jsx

import Navbar from "../components/Navbar";

function ReportIssue() {
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
            marginBottom: "40px",
            fontSize: "45px",
          }}
        >
          Report Civic Issue
        </h1>

        <form
          style={{
            maxWidth: "700px",
            margin: "auto",
            background: "white",
            padding: "40px",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
          }}
        >
          <input
            type="text"
            placeholder="Issue Title"
            style={inputStyle}
          />

          <textarea
            placeholder="Describe the issue in detail"
            rows="6"
            style={inputStyle}
          ></textarea>

          <input
            type="text"
            placeholder="Location"
            style={inputStyle}
          />

          <select style={inputStyle}>
            <option>Select Category</option>
            <option>Road Damage</option>
            <option>Garbage Overflow</option>
            <option>Street Light Failure</option>
            <option>Water Leakage</option>
            <option>Traffic Signal Issue</option>
          </select>

          <input type="file" style={inputStyle} />

          <button
            type="submit"
            style={{
              padding: "15px",
              border: "none",
              background: "#2563eb",
              color: "white",
              fontSize: "18px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Submit Report
          </button>
        </form>
      </div>
    </>
  );
}

const inputStyle = {
  padding: "15px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

export default ReportIssue;