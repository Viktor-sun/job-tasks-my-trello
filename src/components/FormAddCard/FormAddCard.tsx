import { useDispatch } from "react-redux";
import { Formik, FastField, Form } from "formik";
import * as Yup from "yup";
import shortid from "shortid";
import styled from "styled-components";
import { boardActions } from "../../redux/actions";
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

const labelsArr = ["#ffffff", "#544128", "#a7a9c3"];

const FormAddCard = ({ onCloseForm, columnId }: IProps) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        title: "",
        summary: "",
        description: "",
        priority: "Hight",
        reporter: "",
        status: "Forgotten",
        label: "",
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string().required(),
        summary: Yup.string().max(20),
        description: Yup.string().min(5).max(70),
        priority: Yup.string(),
        reporter: Yup.string().max(10).required(),
        status: Yup.string(),
      })}
      onSubmit={(values) => {
        console.log({ id: shortid.generate(), owner: columnId, ...values });

        dispatch(
          boardActions.addCard.Request({
            id: shortid.generate(),
            owner: columnId,
            ...values,
          })
        );
        onCloseForm();
      }}
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
              {({ field, form, meta }: any) => (
                <>
                  <Input {...field} type="text" placeholder="Some summary" />
                  <InputError>{meta.touched && meta.error}</InputError>
                  {/* {form.touched.title && form.errors.title && form.errors.title} */}
                </>
              )}
            </FastField>
          </Label>
          <Label>
            Description
            <FastField name="description">
              {({ field, form, meta }: any) => (
                <>
                  <Textarea {...field} placeholder="More description" />
                  <InputError>{meta.touched && meta.error}</InputError>
                  {/* {form.touched.title && form.errors.title && form.errors.title} */}
                </>
              )}
            </FastField>
          </Label>
          <Label>
            Priority
            <FastField name="priority">
              {({ field, form, meta }: any) => (
                <>
                  <Select {...field} value={values.priority}>
                    <option value="Hight">Hight</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </Select>
                  <InputError>{meta.touched && meta.error}</InputError>
                  {/* {form.touched.title && form.errors.title && form.errors.title} */}
                </>
              )}
            </FastField>
          </Label>
          <Label>
            Reporter
            <FastField name="reporter">
              {({ field, form, meta }: any) => (
                <>
                  <Input {...field} type="text" placeholder="Who am I..." />
                  <InputError>{meta.touched && meta.error}</InputError>
                  {/* {form.touched.title && form.errors.title && form.errors.title} */}
                </>
              )}
            </FastField>
          </Label>
          <Label>
            Status
            <FastField name="status">
              {({ field, form, meta }: any) => (
                <>
                  <Select {...field} value={values.status}>
                    <option value="Forgotten">Forgotten</option>
                    <option value="In work">In work</option>
                    <option value="Fulfilled">Fulfilled</option>
                  </Select>
                  <InputError>{meta.touched && meta.error}</InputError>
                  {/* {form.touched.title && form.errors.title && form.errors.title} */}
                </>
              )}
            </FastField>
          </Label>

          <Label>
            Label
            <FastField name="label">
              {({ field, form, meta }: any) => (
                <div style={{ display: "flex" }}>
                  <input {...field} type="color" value={values.label} />

                  <select {...field} value={values.label}>
                    {labelsArr.map((color) => (
                      <Option key={color} value={color} bgColor={color}>
                        {/* {color} */}
                      </Option>
                    ))}
                  </select>
                  {/* <InputError>{meta.touched && meta.error}</InputError> */}
                  {/* {form.touched.title && form.errors.title && form.errors.title} */}
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

// const ColorLabel = styled.select`
//   position: absolute;
//   top: 0;
//   right: 0;
//   width: 30px;
//   height: 30px;
// `;

type TProps = {
  bgColor?: string;
};

const Option = styled.option<TProps>`
  background-color: ${(props) => props.bgColor};
  width: 50px;
  height: 30px;
  border-radius: 3px;
`;
// <FastField name="label">
//   {({ field, form, meta }: any) => (
//     <>
// <ColorLabel {...field} value={values.label}>
//   {labelsArr.map((color) => (
//     <Option key={color} value={color} bgColor={color}>
//       {color}
//     </Option>
//   ))}
// </ColorLabel>
//       <InputError>{meta.touched && meta.error}</InputError>
//       {/* {form.touched.title && form.errors.title && form.errors.title} */}
//     </>
//   )}
// </FastField>;

// ==================================================================================
// const FormAddCard = ({ onCloseForm, columnId }: IProps) => {
//   const dispatch = useDispatch();
//   const [cardName, setCardName] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
//     setCardName(e.currentTarget.value);

// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
// dispatch(
//   boardActions.addCard.Request({
//     id: shortid.generate(),
//     title: cardName,
//     owner: columnId,
//   })
// );
// onCloseForm();
// };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Label>
//         <Input
//           type="text"
//           onChange={handleChange}
//           value={cardName}
//           placeholder="Enter title"
//         />
//       </Label>
//       <Button fontSize="15px" padding="10px 15px" type="submit">
//         add card
//       </Button>
//     </form>
//   );
// };

export default FormAddCard;
