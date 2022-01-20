import dynamic from "next/dynamic";

function Star({ title, ratings }) {
  let num = parseFloat(ratings);
  const StarRatings = dynamic(() => import("react-star-ratings"), {
    ssr: false,
  });
  return (
    <div className="star">
      <label htmlFor="ratings">{title}</label>
      <span>
        <StarRatings
          rating={num}
          numberOfStars={10}
          starRatedColor="#feb100"
          name="rating"
          starDimension="20px"
          starSpacing="5px"
        />
      </span>
    </div>
  );
}

export default Star;
