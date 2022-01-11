import * as Yup from "yup";

export const validationSchema = Yup.object({
  login: Yup.string().trim().strict().min(2).max(12).required(),
  password: Yup.string().min(6).max(12).required(),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "password mismatch")
    .required(),
});
