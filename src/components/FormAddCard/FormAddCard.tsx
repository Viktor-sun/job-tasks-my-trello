import { useDispatch, useSelector } from "react-redux";
import { Formik, FastField, Form } from "formik";
import shortid from "shortid";

import InputLabel from "../shared/InputLabel";
import CustomInput from "../shared/CustomInput";
import CustomTextarea from "../shared/CustomTexarea";
import CustomSelect from "../shared/CustomSelect";
import CustomColorSelect from "../shared/CustomColorSelect";
import Button from "../shared/Button";

import { boardActions } from "../../redux/actions";
import { boardSelectors } from "../../redux/selectors";

import { IValues } from "../../interfaces";
import { validationSchema } from "../../validationSchemas";

interface IProps {
  onCloseForm: () => void;
  columnId: string;
}

const FormAddCard = ({ onCloseForm, columnId }: IProps) => {
  const dispatch = useDispatch();
  const labels = useSelector(boardSelectors.getLabels);

  const initialValues: IValues = {
    title: "",
    summary: "",
    description: "",
    priority: "Hight",
    reporter: "",
    status: "Forgotten",
    label: "#ffffff",
  };

  const handleSubmit = (values: IValues) => {
    if (!labels.includes(values.label)) {
      dispatch(boardActions.addLabel.Request(values.label));
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
            <FastField name="label" options={labels} as={CustomColorSelect} />
          </InputLabel>

          <Button type="submit" name="Create card" />
        </Form>
      )}
    </Formik>
  );
};

export default FormAddCard;
