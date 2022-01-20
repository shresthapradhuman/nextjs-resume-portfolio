import { me } from "../data/setting";
export const Me = () => {
  return (
    <section className="me">
      <h2 className="title">{me.title}</h2>
      <p>
        <strong>{me.strong} {" "}</strong>
        {me.description}
      </p>
    </section>
  );
};
