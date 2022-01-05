import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { HexColorPicker } from "react-colorful";
import { navRoutes } from "../../routes";
import { boardActions } from "../../redux/actions";
import { Button, Input, Label } from "../../assets/styles/styledComponents";

const FormCreateBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [color, setColor] = useState("#aabbcc");

  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        title: "",
      },
      validationSchema: Yup.object({
        title: Yup.string()
          .trim("need trim")
          .strict()
          .required("👋Board title is required")
          .min(2, "needs to be at least two characters"),
      }),
      onSubmit: ({ title }) => {
        dispatch(boardActions.changeTitle.Request({ title, bgColor: color }));
        navigate(navRoutes.board);
        resetForm();
      },
    });

  return (
    <Form onSubmit={handleSubmit}>
      <p>Background</p>
      <HexColorPicker
        style={{ width: "100%" }}
        color={color}
        onChange={setColor}
      />
      <Label>
        Board title
        <Input
          type="text"
          name="title"
          onChange={handleChange}
          value={values.title}
        />
        {errors.title && touched.title && (
          <div style={{ color: "red" }}>{errors.title}</div>
        )}
      </Label>
      <Button type="submit">create board</Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export default FormCreateBoard;
