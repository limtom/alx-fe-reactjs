import * as yup from "yup";

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const basicSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, { message: "must be at least 3 characters" })
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required(),
});
