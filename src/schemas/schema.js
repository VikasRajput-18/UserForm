import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).required("Please enter your name"),
  dob: Yup.string().required("Please enter your Date of Birth or Age"),
  email: Yup.string().email().required("Please enter your email"),
});
