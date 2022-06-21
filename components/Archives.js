import Link from "next/link";

const Archives = ({ data, title }) => {
  let archives = Object.values(
    data.reduce((a, c) => {
      (a[c] || (a[c] = { archive: c, count: 0 })).count += 1;
      return a;
    }, {})
  ).sort();
  return (
    <div>
      <h1 className="title pb-2 mb-5 p-2 text-2xl font-light uppercase">
        {title}
      </h1>
      <ul className="px-2 mb-4">
        {Object.values(archives).map((item, index) => (
          <li
            key={index}
            className="mb-2 last:mb-0 last:border-b-0 border-b py-1"
          >
            <Link href={`/blog?dt=${item.archive}`}>
              <a className="flex justify-between pr-2">
                <span className="capitalize">{item.archive}</span>
                <span>{item.count}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Archives;
