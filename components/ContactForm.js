import { useFormik } from "formik";
export default function ContactForm() {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 20) {
      errors.name = "Must be 20 characters or less";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.message) {
      errors.message = "Required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name *</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="message">Message *</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          onChange={formik.handleChange}
          value={formik.values.message}
          placeholder="Enter your message"
        ></textarea>
        {formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
      </div>

      <button type="submit">Send Message</button>
    </form>
  );
}
