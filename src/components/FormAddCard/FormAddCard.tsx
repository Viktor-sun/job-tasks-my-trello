import { useDispatch, useSelector } from "react-redux";
import { Formik, FastField, Form } from "formik";
import * as Yup from "yup";
import shortid from "shortid";
import {
  CustomInputComponent,
  CustomTexareaComponent,
  CustomSelectComponent,
  CustomColorSelect,
} from "../shared/customInputComponents";
import { boardActions } from "../../redux/actions";
import { boardSelectors } from "../../redux/selectors";
import { Button, Label } from "../../assets/styles/styledComponents";
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
      {() => (
        <Form>
          <Label>
            Title
            <FastField
              name="title"
              type="text"
              placeholder="Enter title"
              component={CustomInputComponent}
            />
          </Label>
          <Label>
            Summary
            <FastField
              name="summary"
              type="text"
              placeholder="Some summary"
              component={CustomInputComponent}
            />
          </Label>
          <Label>
            Description
            <FastField
              name="description"
              placeholder="More description"
              component={CustomTexareaComponent}
            />
          </Label>
          <Label>
            Priority
            <FastField
              name="priority"
              options={["Hight", "Medium", "Low"]}
              as={CustomSelectComponent}
            />
          </Label>
          <Label>
            Reporter
            <FastField
              name="reporter"
              placeholder="Who am I..."
              component={CustomInputComponent}
            />
          </Label>
          <Label>
            Status
            <FastField
              name="status"
              options={["Forgotten", "In work", "Fulfilled"]}
              as={CustomSelectComponent}
            />
          </Label>

          <Label>
            Label
            <FastField name="label" options={colors} as={CustomColorSelect} />
          </Label>

          <Button type="submit">Create card</Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormAddCard;
