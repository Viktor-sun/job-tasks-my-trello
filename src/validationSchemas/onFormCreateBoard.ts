import * as Yup from "yup";

export const validationSchema = Yup.object({
  title: Yup.string()
    .trim()
    .strict()
    .required("👋Board title is required")
    .min(2, "needs to be at least two characters"),
});
