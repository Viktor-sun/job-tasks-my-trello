import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import styled from "styled-components";
import { HexColorPicker } from "react-colorful";

import InputLabel from "../shared/InputLabel";
import CustomInput from "../shared/CustomInput";
import Button from "../shared/Button";

import { onFormCreateBoard } from "../../validationSchemas";
import { boardsActions } from "../../redux/actions";

interface IProps {
  onCloseModal: () => void;
}

const FormCreateBoard = ({ onCloseModal }: IProps) => {
  const dispatch = useDispatch();
  const [color, setColor] = useState("#aabbcc");

  return (
    <Formik
      initialValues={{
        title: "",
      }}
      validationSchema={onFormCreateBoard}
      onSubmit={({ title }) => {
        dispatch(boardsActions.createBoard.Request({ title, bgColor: color }));
        onCloseModal();
      }}
    >
      {() => (
        <Form>
          <StyledP>Background</StyledP>
          <HexColorPicker
            style={{ width: "100%" }}
            color={color}
            onChange={setColor}
          />
          <InputLabel label="Board title">
            <Field name="title" type="text" component={CustomInput} />
          </InputLabel>
          <Button type="submit" name="create board" />
        </Form>
      )}
    </Formik>
  );
};

const StyledP = styled.p`
  margin: 15px 0;
`;

export default FormCreateBoard;
