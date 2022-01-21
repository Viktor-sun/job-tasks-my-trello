import { useDispatch } from "react-redux";
import { Formik, FastField, Form } from "formik";
import { useParams } from "react-router-dom";

import InputLabel from "../shared/InputLabel";
import CustomInput from "../shared/CustomInput";
import CustomTextarea from "../shared/CustomTexarea";
import CustomSelect from "../shared/CustomSelect";
import CustomColorSelect from "../shared/CustomColorSelect";
import Button from "../shared/Button";

import { boardActions, cardsActions } from "../../redux/actions";

import { IValuesForCardForms, ICard, ILabels } from "../../interfaces";
import { validationSchema } from "../../validationSchemas";

interface IProps {
  onCloseForm: () => void;
  card: ICard;
  labels: ILabels[];
}

const FormEditCard = ({ onCloseForm, card, labels }: IProps) => {
  const dispatch = useDispatch();
  const { boardId } = useParams();

  const initialValues: IValuesForCardForms = {
    title: card.title,
    summary: card.summary,
    description: card.description,
    priority: card.priority,
    reporter: card.reporter,
    status: card.status,
    label: card.label,
  };

  const handleSubmit = (values: IValuesForCardForms) => {
    const hasLabel = labels.find(({ label }) => label === values.label);
    if (!hasLabel) {
      dispatch(boardActions.addLabel.Request({ boardId, label: values.label }));
    }

    dispatch(
      cardsActions.editCard.Request({
        editedCard: { date: new Date(), ...values },
        cardId: card._id,
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
          <InputLabel label="Title">
            <FastField
              name="title"
              type="text"
              placeholder="Enter title"
              component={CustomInput}
            />
          </InputLabel>
          <InputLabel label="Summary">
            <FastField
              name="summary"
              type="text"
              placeholder="Some summary"
              component={CustomInput}
            />
          </InputLabel>
          <InputLabel label="Description">
            <FastField
              name="description"
              placeholder="More description"
              component={CustomTextarea}
            />
          </InputLabel>
          <InputLabel label="Priority">
            <FastField
              name="priority"
              options={["Hight", "Medium", "Low"]}
              as={CustomSelect}
            />
          </InputLabel>
          <InputLabel label="Reporter">
            <FastField
              name="reporter"
              placeholder="Who am I..."
              component={CustomInput}
            />
          </InputLabel>
          <InputLabel label="Status">
            <FastField
              name="status"
              options={["Forgotten", "In work", "Fulfilled"]}
              as={CustomSelect}
            />
          </InputLabel>

          <InputLabel label="Label">
            <FastField
              name="label"
              options={labels.map(({ label }) => label)}
              as={CustomColorSelect}
            />
          </InputLabel>

          <Button type="submit" name="Save changes" />
        </Form>
      )}
    </Formik>
  );
};

export default FormEditCard;
