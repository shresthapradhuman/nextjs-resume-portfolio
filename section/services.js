import { ServicesCard } from "../components/serviceCard";
import { services } from "../data/setting";
export const Services = () => {
  return (
    <section className="py-10 px-5">
      <h2 className="title  pb-2 mb-5 text-2xl font-medium">
        {services.title}
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {services.item.map((item, key) => (
          <ServicesCard
            key={key}
            title={item.title}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};
