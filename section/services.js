import { ServicesCard } from "../components/serviceCard";
import { services } from "../data/setting";
export const Services = () => {
  return (
    <section className="services">
      <h2 className="title">{services.title}</h2>
      <div className="row">
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
