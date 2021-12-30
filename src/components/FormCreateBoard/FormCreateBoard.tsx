import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import routes from "../../routes";
import { boardActions } from "../../redux/actions";

const FormCreateBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    onSubmit: (values) => {
      dispatch(boardActions.changeTitle.Request(values.title));
      navigate(routes.board);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Board title
        <input
          type="text"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title && formik.touched.title ? (
          <div style={{ color: "red" }}>{formik.errors.title}</div>
        ) : null}
      </label>
      <button type="submit">submit</button>
    </form>
  );
};

export default FormCreateBoard;
