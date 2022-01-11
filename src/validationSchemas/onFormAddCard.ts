import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string().required(),
  summary: Yup.string().max(20),
  description: Yup.string().min(5).max(70),
  priority: Yup.string(),
  reporter: Yup.string().max(10).required(),
  status: Yup.string(),
  label: Yup.string(),
});
