import Circle from "../components/Circle";
import Star from "../components/Star";
import { skills } from "../data/setting";
export const Skill = () => {
  return (
    <section className="py-10 px-5 bg-white rounded-bl-2xl rounded-br-2xl">
      <h2 className="title pb-2 mb-5 text-2xl font-medium">{skills.title}</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col mb-5 md:mb-0">
          <h3 className="text-xl text-center bg-yellow-400 py-2 capitalize">{skills.coding.title}</h3>
          <div className="flex flex-wrap my-2">
            {skills.coding.items.map((item, key) => (
              <Circle key={key} title={item.title} percent={item.percent} />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl capitalize text-center bg-yellow-400 py-2">{skills.language.title}</h3>
          <div className="flex flex-col my-2">
            {skills.language.items.map((star, key) => (
              <Star
                title={star.title}
                ratings={star.rating}
                key={key}
                id={key}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
