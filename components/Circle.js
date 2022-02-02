import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Circle({ title, percent }) {
  return (
    <>
      <div className="basis-6/12 flex flex-col items-center py-2">
        <CircularProgressbar
          value={percent}
          text={`${percent}%`}
          strokeWidth={7}
          styles={buildStyles({
            textColor: "#000",
            pathColor: "#feb100",
            trailColor: "#eee",
          })}
        />
        <p className="my-2 capitalize font-medium">{title}</p>
      </div>
    </>
  );
}

export default Circle;
