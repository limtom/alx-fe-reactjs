import { useFormik } from "formik";
import { basicSchema } from "../schemas";

function onSubmit() {
  console.log("submitted");
}

function FormikForm() {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  console.log(errors);

  return (
    <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
      <h2 className="text-center text-3xl text-orange-500 mb-5">
        Registration Form
      </h2>
      <div className="flex flex-col gap-1 mb-3">
        <label htmlFor="username" className="">
          Username
        </label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className={`w-full p-2 border rounded ${
            errors.username && touched.username
              ? "ring-2 ring-red-500 focus:ring-red-500 border-red-300"
              : "focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
          }`}
          required
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.username && touched.username && (
          <p className="text-sm text-red-600 font-light">{errors.username}</p>
        )}
      </div>
      <div className="flex flex-col gap-1 mb-3">
        <label htmlFor="email" className="">
          Email
        </label>
        <input
          type="text"
          name="email"
          placeholder="Input email"
          className={`w-full p-2 border rounded ${
            errors.email && touched.email
              ? "ring-2 ring-red-500 focus:ring-red-500 border-red-300"
              : "focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
          }`}
          required
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <p className="text-sm text-red-600 font-light">{errors.email}</p>
        )}
      </div>
      <div className="flex flex-col gap-1 mb-3">
        <label htmlFor="password" className="">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Input password"
          className={`w-full p-2 border rounded ${
            errors.password && touched.password
              ? "ring-2 ring-red-500 focus:ring-red-500 border-red-300"
              : "focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
          }`}
          required
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <p className="text-sm text-red-600 font-light">{errors.password}</p>
        )}
      </div>
      <input
        type="submit"
        value="Submit"
        className="py-2 px-4 border-0 rounded-lg bg-orange-400 text-white justify-self-center"
      />
    </form>
  );
}

export default FormikForm;
