import { useDispatch, useSelector } from "react-redux";
import { Formik, FastField, Form } from "formik";
import * as Yup from "yup";
import shortid from "shortid";
import styled from "styled-components";
import { boardActions } from "../../redux/actions";
import { boardSelectors } from "../../redux/selectors";
import {
  Button,
  Input,
  Label,
  InputError,
  Textarea,
  Select,
} from "../../assets/styles/styledComponents";

interface IProps {
  onCloseForm: () => void;
  columnId: string;
}

interface IValues {
  title: string;
  summary: string;
  description: string;
  priority: string;
  reporter: string;
  status: string;
  label: string;
}

const FormAddCard = ({ onCloseForm, columnId }: IProps) => {
  const dispatch = useDispatch();
  const colors = useSelector(boardSelectors.getColors);

  const initialValues: IValues = {
    title: "",
    summary: "",
    description: "",
    priority: "Hight",
    reporter: "",
    status: "Forgotten",
    label: "#ffffff",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    summary: Yup.string().max(20),
    description: Yup.string().min(5).max(70),
    priority: Yup.string(),
    reporter: Yup.string().max(10).required(),
    status: Yup.string(),
    label: Yup.string(),
  });

  const handleSubmit = (values: IValues) => {
    if (!colors.includes(values.label)) {
      dispatch(boardActions.addColor.Request(values.label));
    }

    dispatch(
      boardActions.addCard.Request({
        id: shortid.generate(),
        owner: columnId,
        date: new Date(),
        ...values,
      })
    );
    onCloseForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <Label>
            Title
            <FastField name="title">
              {({ field, form, meta }: any) => (
                <>
                  <Input {...field} type="text" placeholder="Enter title" />
                  <InputError>{meta.touched && meta.error}</InputError>
                  {/* {form.touched.title && form.errors.title && form.errors.title} */}
                </>
              )}
            </FastField>
          </Label>
          <Label>
            Summary
            <FastField name="summary">
              {({ field, meta }: any) => (
                <>
                  <Input {...field} type="text" placeholder="Some summary" />
                  <InputError>{meta.touched && meta.error}</InputError>
                </>
              )}
            </FastField>
          </Label>
          <Label>
            Description
            <FastField name="description">
              {({ field, meta }: any) => (
                <>
                  <Textarea {...field} placeholder="More description" />
                  <InputError>{meta.touched && meta.error}</InputError>
                </>
              )}
            </FastField>
          </Label>
          <Label>
            Priority
            <FastField name="priority">
              {({ field }: any) => (
                <>
                  <Select {...field} value={values.priority}>
                    <option value="Hight">Hight</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </Select>
                </>
              )}
            </FastField>
          </Label>
          <Label>
            Reporter
            <FastField name="reporter">
              {({ field, meta }: any) => (
                <>
                  <Input {...field} type="text" placeholder="Who am I..." />
                  <InputError>{meta.touched && meta.error}</InputError>
                </>
              )}
            </FastField>
          </Label>
          <Label>
            Status
            <FastField name="status">
              {({ field }: any) => (
                <>
                  <Select {...field} value={values.status}>
                    <option value="Forgotten">Forgotten</option>
                    <option value="In work">In work</option>
                    <option value="Fulfilled">Fulfilled</option>
                  </Select>
                </>
              )}
            </FastField>
          </Label>

          <Label>
            Label
            <FastField name="label">
              {({ field }: any) => (
                <div style={{ display: "flex" }}>
                  <input {...field} type="color" value={values.label} />

                  <select {...field} value={values.label}>
                    {colors.map((color) => (
                      <Option
                        key={color}
                        value={color}
                        bgColor={color}
                      ></Option>
                    ))}
                  </select>
                </div>
              )}
            </FastField>
          </Label>

          <Button type="submit">Create card</Button>
        </Form>
      )}
    </Formik>
  );
};

type TProps = {
  bgColor?: string;
};

const Option = styled.option<TProps>`
  background-color: ${(props) => props.bgColor};
  width: 50px;
  height: 30px;
  border-radius: 3px;
`;

export default FormAddCard;
