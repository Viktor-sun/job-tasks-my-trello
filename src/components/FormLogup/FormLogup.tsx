import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import AuthFormContainer from "../shared/AuthFormContainer";
import CustomInput from "../shared/CustomInput";
import InputLabel from "../shared/InputLabel";
import Button from "../shared/Button";

import { usersActions } from "../../redux/actions";
import { logupValidSchema } from "../../validationSchemas";
import { usersSelectors } from "../../redux/selectors";
import { navRoutes } from "../../routes";

const FormLogup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(usersSelectors.getIsAuthenticated);

  return (
    <AuthFormContainer>
      {isAuthenticated && <Navigate to={navRoutes.home} replace={true} />}
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
