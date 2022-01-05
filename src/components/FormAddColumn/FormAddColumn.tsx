import { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import styled from "styled-components";
import { boardActions } from "../../redux/actions";
import { Label, Input, Button } from "../../assets/styles/styledComponents";

interface IProps {
  onCloseForm: () => void;
}

const FormAddList = ({ onCloseForm }: IProps) => {
  const dispatch = useDispatch();
  const [inputValue, setInputvalue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputvalue(e.currentTarget.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      boardActions.createColumn.Request({
        id: shortid.generate(),
        title: inputValue,
      })
    );
    onCloseForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Input
          type="text"
          onChange={handleChange}
          value={inputValue}
          placeholder="Enter list title"
        />
      </Label>
      <Button type="submit">add list</Button>
      <Button type="button" onClick={onCloseForm}>
        close
      </Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
`;

export default FormAddList;
