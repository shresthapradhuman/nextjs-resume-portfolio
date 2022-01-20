import Circle from "../components/Circle";
import Star from "../components/Star";
import { skills } from "../data/setting";
export const Skill = () => {
  return (
    <section className="skills">
      <h2 className="title">{skills.title}</h2>
      <div className="row">
        <div className="code">
          <h3>{skills.coding.title}</h3>
          <div className="row">
            {skills.coding.items.map((item, key) => (
              <Circle key={key} title={item.title} percent={item.percent} />
            ))}
          </div>
        </div>
        <div className="lang">
          <h3>{skills.language.title}</h3>
          <div className="row">
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
