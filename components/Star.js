import dynamic from "next/dynamic";

function Star({ title, ratings }) {
  let num = parseFloat(ratings);
  const StarRatings = dynamic(() => import("react-star-ratings"), {
    ssr: false,
  });
  return (
    <div className="flex flex-col  my-3">
      <label htmlFor="ratings" className=" mb-5 font-medium">{title}</label>
      <span>
        <StarRatings
          rating={num}
          numberOfStars={10}
          starRatedColor="#feb100"
          name="rating"
          starDimension="18px"
          starSpacing="5px"
        />
      </span>
    </div>
  );
}

export default Star;
