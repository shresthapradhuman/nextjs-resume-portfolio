export const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="card-box">
        <h3>{title}</h3>
        <div>
          <p>{description}</p>
          <span>{icon}</span>
        </div>
      </div>
    </div>
  );
};
