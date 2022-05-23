import Link from "next/link";

const Pagination = ({ totalCount, router }) => {
  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  /** check query exist or not */
  let queryExist = Object.entries(router.query).length > 0;
  /** container to store query expect page */
  let query = [];
  /** save and build query for url expect page */
  Object.entries(router.query).map(([key, value]) => {
    /** check key is page or not */
    if (key !== "page") {
      query = [...query, `${key}=${value}`];
    }
  });
  /** check and add & if require */
  let amp = query.length > 0 ? "&" : "";
  /** check and add value if require */
  let amp2 = query.length > 0 ? `?${query.join("&")}` : "";
  /** create route for user  */
  let route = queryExist
    ? router.route + "?" + query.join("&") + amp
    : router.route + "?";
  /** active pagination */
  const active = router.query.page > 1 ? router.query.page : 1;
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="pagination">
        {range(1, Math.ceil(totalCount / 6)).map((number, index) => {
          let base =
            number > 1 ? `${route}page=${number}` : `${router.route + amp2}`;
          return (
            totalCount > 6 && (
              <Link key={index} href={base}>
                <a
                  className={`py-1 px-2 mr-2 border-2 rounded-full ${
                    index === active - 1 ? "text-red-500" : ""
                  }`}
                >
                  {number}
                </a>
              </Link>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
