import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import AuthFormContainer from "../shared/AuthFormContainer";
import CustomInput from "../shared/CustomInput";
import InputLabel from "../shared/InputLabel";
import Button from "../shared/Button";

import { usersActions } from "../../redux/actions";
import { logupValidSchema } from "../../validationSchemas";
import { navRoutes } from "../../routes";

const FormLogup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <AuthFormContainer>
      <Formik
        initialValues={{
          login: "",
          password: "",
          passwordConfirm: "",
        }}
        validationSchema={logupValidSchema}
        onSubmit={({ login, password }) => {
          dispatch(usersActions.logup.Request({ login, password }));
          navigate(navRoutes.login);
        }}
      >
        {() => (
          <Form>
            <InputLabel label="name">
              <Field name="login" type="text" component={CustomInput} />
            </InputLabel>
            <InputLabel label="password">
              <Field name="password" type="password" component={CustomInput} />
            </InputLabel>
            <InputLabel label="confirm password">
              <Field
                name="passwordConfirm"
                type="password"
                component={CustomInput}
              />
            </InputLabel>
            <Button type="submit" name="Submit" />
          </Form>
        )}
      </Formik>
    </AuthFormContainer>
  );
};

export default FormLogup;
