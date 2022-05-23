import Link from "next/link";


const Categroies = ({ data, title }) => {
  /** category sorting and count */
  let categories = Object.values(
    data.reduce((a, c) => {
      (a[c] || (a[c] = { category: c, count: 0 })).count += 1;
      return a;
    }, {})
  ).sort(({ count: ac }, { count: bc }) => bc - ac);
  return (
    <div>
      <h1 className="title mb-5 p-2 text-2xl font-light uppercase">
        {title}
      </h1>
      <ul className="px-2 mb-4">
        {Object.values(categories).map((item, index) => (
          <li
            key={index}
            className="mb-2 last:mb-0 last:border-b-0 border-b py-1"
          >
            <Link href={`/blog?cat=${item.category}`}>
              <a className="flex justify-between pr-2">
                <span className="capitalize">{item.category}</span>
                <span>{item.count}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categroies;

// let array = data,
// counts = Object.values(
//   array.reduce((a, c) => {
//     (a[c] || (a[c] = { name: c, count: 0 })).count += 1;
//     return a;
//   }, {})
// ).sort(({ count: ac }, { count: bc }) => bc - ac),
// target = "html",
// found = counts.find(({ name }) => name === target);
//   console.log(counts);
//   console.log(found);
//   console.log(found.count);
//   console.log(array);
