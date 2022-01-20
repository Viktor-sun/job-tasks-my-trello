import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, FastField, Form } from "formik";

import InputLabel from "../shared/InputLabel";
import CustomInput from "../shared/CustomInput";
import CustomTextarea from "../shared/CustomTexarea";
import CustomSelect from "../shared/CustomSelect";
import CustomColorSelect from "../shared/CustomColorSelect";
import Button from "../shared/Button";

import { boardActions } from "../../redux/actions";
import { boardSelectors } from "../../redux/selectors";

import { IValuesForCardForms } from "../../interfaces";
import { validationSchema } from "../../validationSchemas";

interface IProps {
  onCloseForm: () => void;
  columnId: string;
}

const FormAddCard = ({ onCloseForm, columnId }: IProps) => {
  const dispatch = useDispatch();
  const boardId = useSelector(boardSelectors.getBoardId);
  const labels = useSelector(boardSelectors.getLabels);

  useEffect(() => {
    dispatch(boardActions.fetchLabels.Request(boardId));
  }, [dispatch, boardId]);

  const initialValues: IValuesForCardForms = {
    title: "",
    summary: "",
    description: "",
    priority: "Hight",
    reporter: "",
    status: "Forgotten",
    label: "#ffffff",
  };

  const handleSubmit = (values: IValuesForCardForms) => {
    const hasLabel = labels.find(({ label }) => label === values.label);
    if (!hasLabel) {
      dispatch(boardActions.addLabel.Request({ boardId, label: values.label }));
    }

    const card = {
      boardId,
      owner: columnId,
      date: new Date(),
      ...values,
    };

    dispatch(boardActions.addCard.Request(card));
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
              options={labels ? labels.map(({ label }) => label) : []}
              as={CustomColorSelect}
            />
          </InputLabel>

          <Button type="submit" name="Create card" />
        </Form>
      )}
    </Formik>
  );
};

export default FormAddCard;
