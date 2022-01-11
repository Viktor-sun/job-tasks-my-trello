import * as Yup from "yup";

export const validationSchema = Yup.object({
  column: Yup.string().trim().required().max(10),
});
