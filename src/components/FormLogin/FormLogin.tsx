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

const FormLogin = () => {
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: Yup.object({
      login: Yup.string().trim().strict().min(2).max(12).required(),
      password: Yup.string().min(6).max(12).required(),
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

      <Button type="submit">Submit</Button>
    </AuthForm>
  );
};

export default FormLogin;
