import { Formik, Form, Field, ErrorMessage } from "formik";
export default function ContactForm() {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };
  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 20) {
      errors.name = "Must be 20 characters or less";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid Email";
    }
    if (!values.message) {
      errors.message = "Required";
    }
    return errors;
  };
  const onSubmit = (values, submitProps) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        } else if (response.ok) {
          alert("Message Successfully Sent.");
          submitProps.resetForm();
        } else {
          alert("Oops! error has occurred");
        }
        return response;
      })
      .catch((error) => alert(error));
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="mt-10 mb-5"
      >
        <div>
          <Field type="hidden" name="form-name" />
          <Field type="hidden" name="bot-field" />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="name" className="text-lg mb-2">
            Name *
          </label>
          <Field
            type="name"
            id="name"
            name="name"
            placeholder="Name"
            className=" bg-slate-100 py-2 px-2 mb-2 focus:outline-none"
          />
          <div className=" text-red-500">
            <ErrorMessage name="name" />
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="email" className="text-lg mb-2">
            Email *
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            className="bg-slate-100 py-2 px-2 mb-2 focus:outline-none"
          />
          <div className="text-red-500">
            <ErrorMessage name="email" />
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="message" className="text-lg mb-2">
            Message *
          </label>
          <Field
            as="textarea"
            id="message"
            name="message"
            placeholder="Enter your message"
            rows="8"
            className="bg-slate-100 py-2 px-2 mb-2 focus:outline-none resize-none"
          />
          <div className="text-red-500">
            <ErrorMessage name="message" />
          </div>
        </div>

        <button
          type="submit"
          className="px-2 py-2 text-lg border-2 border-slate-800 hover:bg-black hover:text-white transition w-max"
        >
          Send Message
        </button>
      </Form>
    </Formik>
  );
}
