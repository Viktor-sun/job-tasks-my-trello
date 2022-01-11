import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import shortid from "shortid";
import styled from "styled-components";

import InputLabel from "../shared/InputLabel";
import CustomInput from "../shared/CustomInput";
import Button from "../shared/Button";

import { onFormAddColumn } from "../../validationSchemas";
import { boardActions } from "../../redux/actions";

interface IProps {
  onCloseForm: () => void;
}

const FormAddList = ({ onCloseForm }: IProps) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        column: "",
      }}
      validationSchema={onFormAddColumn}
      onSubmit={({ column }) => {
        dispatch(
          boardActions.createColumn.Request({
            id: shortid.generate(),
            title: column,
          })
        );
        onCloseForm();
      }}
    >
      {() => (
        <StyledForm>
          <InputLabel>
            <Field name="column" type="text" component={CustomInput} />
          </InputLabel>
          <Button type="submit" name="add list" />
          <Button type="button" name="close" onClick={onCloseForm} />
        </StyledForm>
      )}
    </Formik>
  );
};

const StyledForm = styled(Form)`
  display: flex;
`;

export default FormAddList;
