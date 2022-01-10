import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { usersActions } from "../../redux/actions";
import {
  Label,
  Input,
  Button,
  InputError,
  AuthForm,
} from "../../assets/styles/styledComponents";

const FormLogup = () => {
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      login: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: Yup.object({
      login: Yup.string().trim().strict().min(2).max(12).required(),
      password: Yup.string().min(6).max(12).required(),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "password mismatch")
        .required(),
    }),
    onSubmit: ({ login, password }) => {
      dispatch(usersActions.login.Request({ login, password }));
    },
  });
  return (
    <AuthForm onSubmit={handleSubmit}>
      <Label>
        name
        <Input
          name="login"
          type="text"
          onChange={handleChange}
          value={values.login}
        />
        {errors.login && touched.login && (
          <InputError>{errors.login}</InputError>
        )}
      </Label>

      <Label>
        password
        <Input
          name="password"
          type="password"
          onChange={handleChange}
          value={values.password}
        />
        {errors.password && touched.password && (
          <InputError>{errors.password}</InputError>
        )}
      </Label>

      <Label>
        confirm password
        <Input
          name="passwordConfirm"
          type="password"
          onChange={handleChange}
          value={values.passwordConfirm}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <InputError>{errors.passwordConfirm}</InputError>
        )}
      </Label>

      <Button type="submit">Submit</Button>
    </AuthForm>
  );
};

export default FormLogup;
