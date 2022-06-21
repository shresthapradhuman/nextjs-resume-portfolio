import ContactForm from "../components/ContactForm";
import { contact as data } from "../data/setting";
export default function Contact() {
  return (
    <section className="my-5 mt-3 shadow shadow-slate-400 rounded-2xl bg-white">
      <div className="py-10 px-5 ">
        <h2 className="title text-2xl pb-2 mb-2 font-medium">Get In Touch</h2>
        <ul>
          <li className="py-2 flex justify-between">
            <span className="text-xl font-medium">Address: </span>
            <span className="text-xl font-light">{data.address}</span>
          </li>
          <li className="py-2 flex justify-between">
            <span className="text-xl font-medium">Email: </span>
            <span className="text-xl font-light">{data.email}</span>
          </li>
        </ul>
      </div>
      <div className="py-10 px-5">
        <h2 className="title text-2xl pb-2 mb-2 font-medium">Contact Form</h2>
        <ContactForm />
      </div>
    </section>
  );
}
