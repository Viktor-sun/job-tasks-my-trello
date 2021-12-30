import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { HexColorPicker } from "react-colorful";
import { navRoutes } from "../../routes";
import { boardActions } from "../../redux/actions";

const FormCreateBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [color, setColor] = useState("#aabbcc");

  const formik = useFormik({
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
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <HexColorPicker color={color} onChange={setColor} />
      <label>
        Board title
        <input
          type="text"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title && formik.touched.title && (
          <div style={{ color: "red" }}>{formik.errors.title}</div>
        )}
      </label>
      <button type="submit">submit</button>
    </form>
  );
};

export default FormCreateBoard;
