import { useDispatch, useSelector } from "react-redux";
import { Formik, FastField, Form } from "formik";
import * as Yup from "yup";
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
  card: {
    id: string;
    title: string | "";
    summary: string | "";
    description: string | "";
    priority: string | "";
    reporter: string | "";
    status: string | "";
    label: string | "";
    date: Date;
  };
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

const FormAddCard = ({ onCloseForm, card }: IProps) => {
  const dispatch = useDispatch();
  const colors = useSelector(boardSelectors.getColors);

  const initialValues: IValues = {
    title: card.title,
    summary: card.summary,
    description: card.description,
    priority: card.priority,
    reporter: card.reporter,
    status: card.status,
    label: card.label,
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
      boardActions.editCard.Request({
        id: card.id,
        editedCard: { date: new Date(), ...values },
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

          <Button type="submit">Save changes</Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormAddCard;
