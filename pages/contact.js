import ContactForm from "../components/ContactForm";
import { contact as data } from "../data/setting";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="my-5 mt-3 shadow shadow-slate-400 rounded-2xl bg-white py-8">
      <div className="grid md:grid-cols-[minmax(0,_.4fr)_minmax(0,_.6fr)] p-4 gap-4">
        <div>
          <h1 className="uppercase text-7xl font-medium bg-black text-white w-max p-2">contact</h1>
          <p className="capitalize text-4xl font-medium ml-2 mt-8 mb-8">
            lets keep in touch
          </p>
          <div className="flex mb-5">
            <span className="h-10 w-10 mr-4 flex justify-center items-center">
              <FontAwesomeIcon icon={faLocationDot} className="text-3xl" />
            </span>
            <span className="text-lg space-y-2">
              <p>Maebara Higashi 3-29-1,</p>
              <p>Funabashi, Chiba, Japan</p>
            </span>
          </div>
          <div className="flex mb-5">
            <span className="h-10 w-10 mr-4 flex justify-center items-center">
              <FontAwesomeIcon icon={faPhone} className="text-2xl" />
            </span>
            <span className="text-lg flex justify-center items-center">+81 70-8425-2738</span>
          </div>
          <div className="flex">
            <span className="h-10 w-10 mr-2 flex justify-center items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
            </span>
            <span className="text-lg flex justify-center items-center">shresthapradhuman2020@gmail.com</span>
          </div>
        </div>
        <div>
          <h2 className="uppercase text-4xl font-bold">drop me a line</h2>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
