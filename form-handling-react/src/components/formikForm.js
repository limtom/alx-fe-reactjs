import { Field, Form, Formik } from "formik";
import * as yup from "yup";

// Validation Schema using Yup
const basicSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, { message: "must be at least 3 characters" })
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("required"),
  password: yup
    .string()
    .min(5)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      { message: "Please create a stronger password" },
    )
    .required(),
});

function onSubmit(values, { setSubmitting, resetForm }) {
  // Simulate API call
  setTimeout(() => {
    console.log("Form values:", values);
    alert("Form submitted successfully!");
    setSubmitting(false);
    resetForm();
  }, 1000);
}

// Custom Input Component with Error Styling
const CustomInput = ({ field, form: { touched, errors }, ...props }) => {
  const hasError = touched[field.name] && errors[field.name];

  return (
    <div className="mb-4">
      <input
        {...field}
        {...props}
        className={`w-full p-2 border rounded transition-all duration-200 ${
          hasError
            ? "ring-2 ring-red-500 border-red-500 focus:ring-red-500"
            : "focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
        }`}
      />
      <ErrorMessage name={field.name}>
        {(errorMessage) => (
          <div className="text-red-500 text-sm mt-1">{errorMessage}</div>
        )}
      </ErrorMessage>
    </div>
  );
};

function FormikForm() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>

      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={basicSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            {/* Username Field */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-medium mb-2"
              >
                Username
              </label>
              <Field
                name="username"
                type="text"
                placeholder="Enter your username"
                component={CustomInput}
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                component={CustomInput}
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <Field
                name="password"
                type="password"
                placeholder="Enter your password"
                component={CustomInput}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 px-4 rounded font-medium text-white 
                ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 transition-colors"
                }`}
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
