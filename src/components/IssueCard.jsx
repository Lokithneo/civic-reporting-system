function IssueCard({ title, status, location }) {
  return (
    <div className="issue-card">
      <h3>{title}</h3>
      <p>Status: {status}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default IssueCard;