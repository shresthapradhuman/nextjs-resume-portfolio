function Circle({ title, percent }) {
  let offset = 370 - (370 * percent) / 100;
  return (
    <div className="circle">
      <div className="percent">
        <svg>
          <circle cx="50%" cy="50%" r="60"></circle>
          <circle
            cx="50%"
            cy="50%"
            r="60"
            style={{ strokeDashoffset: offset }}
          ></circle>
        </svg>
        <h3 className="number">{`${percent}%`}</h3>
      </div>
      <h2>{title}</h2>
    </div>
  );
}

export default Circle;
