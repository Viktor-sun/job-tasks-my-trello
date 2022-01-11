import styled from "styled-components";
import InputError from "../InputError";

const CustomTexarea = ({ field, form: { touched, errors }, ...props }: any) => (
  <>
    <Textarea {...field} {...props} />
    <InputError touched={touched} errors={errors} field={field} />
  </>
);

const Textarea = styled.textarea`
  width: 100%;
  padding: 15px 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-height: 150px;
  resize: vertical;
`;

export default CustomTexarea;
