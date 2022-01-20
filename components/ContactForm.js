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
        data-netlify-recaptcha="true"
      >
        <div>
          <Field type="hidden" name="form-name" />
          <Field type="hidden" name="bot-field" />
        </div>
        <div>
          <label htmlFor="name">Name *</label>
          <Field type="name" id="name" name="name" placeholder="Name" />
          <div className="error">
            <ErrorMessage name="name" />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email *</label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
          />
          <div className="error">
            <ErrorMessage name="email" />
          </div>
        </div>
        <div>
          <label htmlFor="message">Message *</label>
          <Field
            as="textarea"
            id="message"
            name="message"
            placeholder="Enter your message"
            cols="30"
            rows="10"
          />
          <div className="error">
            <ErrorMessage name="message" />
          </div>
        </div>

        <button type="submit">Send Message</button>
      </Form>
    </Formik>
  );
}
