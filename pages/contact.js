import ContactForm from "../components/ContactForm";
import { contact as data } from "../data/setting";
export default function contact() {
  return (
    <section className="contact">
      <div className="contact-info">
        <h2 className="title">Get In Touch</h2>
        <ul>
          <li>
            <span>Address: </span>
            <span>{data.address}</span>
          </li>
          <li>
            <span>Email: </span>
            <span>{data.email}</span>
          </li>
          <li>
            <span>Freelancer: </span>
            <span>{data.freelance}</span>
          </li>
        </ul>
      </div>
      <div className="contact-form">
        <h2 className="title">Contact Form</h2>
        <ContactForm />
      </div>
    </section>
  );
}
