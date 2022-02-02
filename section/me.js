import { me } from "../data/setting";
export const Me = () => {
  return (
    <section className="py-10 px-5 bg-white rounded-tl-2xl rounded-tr-2xl">
      <h2 className="title pb-2 mb-5 text-2xl font-medium">{me.title}</h2>
      <p className="text-lg font-light leading-6">
        <strong className="font-medium">{me.strong} </strong>
        {me.description}
      </p>
    </section>
  );
};
